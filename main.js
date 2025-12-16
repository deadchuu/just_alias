// ===== GAME DATA =====
let WORDS = [];

// Load words from CSV
async function loadWordsFromCSV() {
    try {
        const response = await fetch('alias.csv');
        const csv = await response.text();
        const lines = csv.trim().split('\n');
        
        // Skip header
        for (let i = 1; i < lines.length; i++) {
            const parts = lines[i].split(',');
            if (parts.length >= 3) {
                const word = parts[0].trim();
                const definition = parts[2].trim();
                if (word && definition) {
                    WORDS.push({ word, hint: definition });
                }
            }
        }
        console.log(`Loaded ${WORDS.length} words from CSV`);
    } catch (error) {
        console.error('Error loading CSV:', error);
        // Fallback words if CSV fails
        WORDS = [
            { word: 'Computer', hint: 'Electronic device for processing data' },
            { word: 'Browser', hint: 'Software for accessing websites' },
            { word: 'Bluetooth', hint: 'Wireless technology for short-range data exchange' },
            { word: 'Battery', hint: 'Device that stores electrical energy' },
            { word: 'Keyboard', hint: 'Input device with letter keys' },
            { word: 'Mouse', hint: 'Pointing device for computers' },
            { word: 'Monitor', hint: 'Display screen for computers' },
            { word: 'Cable', hint: 'Wire used to connect devices' },
            { word: 'Charger', hint: 'Device for replenishing battery energy' },
            { word: 'Backup', hint: 'Data backup' },
        ];
    }
}

// ===== STATE =====
let gameState = {
    settings: {},
    players: [],
    currentPlayerIndex: 0,
    roundNumber: 1,
    usedWords: [],
    currentRoundScores: {},
    gameActive: false,
    timerInterval: null
};

// ===== UTILITY FUNCTIONS =====
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function getRandomWords(count) {
    const available = WORDS.filter((_, idx) => !gameState.usedWords.includes(idx));
    if (available.length < count) {
        gameState.usedWords = [];
        return WORDS.slice(0, count);
    }
    const selected = shuffleArray(available).slice(0, count);
    gameState.usedWords.push(...WORDS.map((w, i) => available.includes(w) ? i : -1).filter(i => i >= 0));
    return selected;
}

// ===== SCREEN MANAGEMENT =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// ===== HOME SCREEN =====
function initHomeScreen() {
    loadWordsFromCSV();
    
    document.getElementById('btn-new-game').addEventListener('click', () => {
        showScreen('settings-screen');
    });

    const savedGame = localStorage.getItem('gameState');
    if (savedGame) {
        document.getElementById('btn-continue').style.display = 'inline-block';
        document.getElementById('btn-continue').addEventListener('click', () => {
            gameState = JSON.parse(savedGame);
            showScreen('game-screen');
            startRound();
        });
    }
}

// ===== SETTINGS SCREEN =====
function initSettingsScreen() {
    document.getElementById('btn-back-home').addEventListener('click', () => {
        showScreen('home-screen');
    });

    document.getElementById('btn-start-game').addEventListener('click', () => {
        const settings = {
            roomName: document.getElementById('room-name').value,
            playerCount: parseInt(document.getElementById('player-count').value),
            roundTime: parseInt(document.getElementById('round-time').value),
            targetScore: parseInt(document.getElementById('target-score').value)
        };

        if (settings.playerCount < 2) {
            alert('Minimum 2 players required!');
            return;
        }

        gameState.settings = settings;
        gameState.players = [];
        gameState.currentRoundScores = {};
        gameState.currentPlayerIndex = 0;
        gameState.roundNumber = 1;

        document.getElementById('max-players-display').textContent = settings.playerCount;
        document.getElementById('room-title').textContent = `Room: ${settings.roomName}`;

        showScreen('lobby-screen');
    });
}

// ===== LOBBY SCREEN =====
function initLobbyScreen() {
    document.getElementById('btn-add-player').addEventListener('click', addPlayer);
    document.getElementById('player-name-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addPlayer();
    });

    document.getElementById('btn-back-settings').addEventListener('click', () => {
        showScreen('settings-screen');
    });

    document.getElementById('btn-game-ready').addEventListener('click', () => {
        if (gameState.players.length < 2) {
            alert('Потрібно мінімум 2 гравці!');
            return;
        }
        gameState.gameActive = true;
        gameState.currentPlayerIndex = 0;
        gameState.roundNumber = 1;
        gameState.currentRoundScores = {};
        gameState.players.forEach(p => {
            gameState.currentRoundScores[p.id] = 0;
        });
        showScreen('game-screen');
        startRound();
    });
}

function addPlayer() {
    const input = document.getElementById('player-name-input');
    const name = input.value.trim();

    if (!name) {
        alert('Enter a player name!');
        return;
    }

    if (gameState.players.some(p => p.name === name)) {
        alert('Player already exists!');
        return;
    }

    if (gameState.players.length >= gameState.settings.playerCount) {
        alert('Maximum players reached!');
        return;
    }

    const player = {
        id: generateId(),
        name: name,
        score: 0,
        solved: 0,
        skipped: 0
    };

    gameState.players.push(player);
    gameState.currentRoundScores[player.id] = 0;

    input.value = '';
    updatePlayersList();

    const readyBtn = document.getElementById('btn-game-ready');
    readyBtn.disabled = gameState.players.length < 2;

    input.focus();
}

function updatePlayersList() {
    const list = document.getElementById('players-list');
    list.innerHTML = gameState.players.map(p => 
        `<li>${p.name} <button onclick="removePlayer('${p.id}')">✕</button></li>`
    ).join('');
    document.getElementById('player-count-display').textContent = gameState.players.length;
}

function removePlayer(playerId) {
    gameState.players = gameState.players.filter(p => p.id !== playerId);
    delete gameState.currentRoundScores[playerId];
    updatePlayersList();
}

// ===== GAME SCREEN =====
function initGameScreen() {
    document.getElementById('btn-skip').addEventListener('click', skipWord);
    document.getElementById('btn-correct').addEventListener('click', correctWord);
    document.getElementById('btn-pause').addEventListener('click', pauseGame);
}

function startRound() {
    gameState.currentRoundScores = {};
    gameState.players.forEach(p => {
        gameState.currentRoundScores[p.id] = 0;
    });
    
    gameState.currentPlayerIndex = 0;
    nextWord();
    startTimer();
}

function nextWord() {
    const words = getRandomWords(1);
    if (words.length === 0) {
        endGame();
        return;
    }

    const word = words[0];
    document.getElementById('current-word').textContent = word.word;
    document.getElementById('current-hint').textContent = word.hint;

    updateGameInfo();
}

function updateGameInfo() {
    const player = gameState.players[gameState.currentPlayerIndex];
    document.getElementById('current-player-name').textContent = player.name;
    document.getElementById('round-number').textContent = gameState.roundNumber;
    document.getElementById('current-score').textContent = gameState.currentRoundScores[player.id] || 0;

    let scoresHtml = '';
    gameState.players.forEach(p => {
        const score = gameState.currentRoundScores[p.id] || 0;
        scoresHtml += `<div>${p.name}: ${score}</div>`;
    });
    document.getElementById('current-round-scores').innerHTML = scoresHtml;
}

function skipWord() {
    const player = gameState.players[gameState.currentPlayerIndex];
    player.skipped++;
    nextPlayerTurn();
}

function correctWord() {
    const player = gameState.players[gameState.currentPlayerIndex];
    player.solved++;
    gameState.currentRoundScores[player.id] = (gameState.currentRoundScores[player.id] || 0) + 1;

    if (player.score + gameState.currentRoundScores[player.id] >= gameState.settings.targetScore) {
        endGame();
        return;
    }

    nextWord();
}

function nextPlayerTurn() {
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    
    if (gameState.currentPlayerIndex === 0) {
        gameState.roundNumber++;
    }

    const player = gameState.players[gameState.currentPlayerIndex];
    if (player.score >= gameState.settings.targetScore) {
        endGame();
        return;
    }

    nextWord();
}

function pauseGame() {
    gameState.gameActive = false;
    clearInterval(gameState.timerInterval);
    alert('Game paused. Click OK to continue.');
    gameState.gameActive = true;
    startTimer();
}

function startTimer() {
    let timeLeft = gameState.settings.roundTime;
    document.getElementById('timer').textContent = timeLeft;

    gameState.timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            nextPlayerTurn();
            startTimer();
        }
    }, 1000);
}

function endGame() {
    clearInterval(gameState.timerInterval);
    gameState.gameActive = false;

    gameState.players.forEach(p => {
        p.score += gameState.currentRoundScores[p.id] || 0;
    });

    localStorage.removeItem('gameState');
    showResults();
}

// ===== RESULTS SCREEN =====
function initResultsScreen() {
    document.getElementById('btn-play-again').addEventListener('click', () => {
        showScreen('home-screen');
    });

    document.getElementById('btn-home').addEventListener('click', () => {
        showScreen('home-screen');
    });
}

function showResults() {
    const sorted = [...gameState.players].sort((a, b) => b.score - a.score);
    
    let html = '';
    sorted.forEach(p => {
        html += `
            <tr>
                <td>${p.name}</td>
                <td>${p.score}</td>
                <td>${p.solved}</td>
                <td>${p.skipped}</td>
            </tr>
        `;
    });

    document.getElementById('results-body').innerHTML = html;
    showScreen('results-screen');
}

document.addEventListener('DOMContentLoaded', () => {
    initHomeScreen();
    initSettingsScreen();
    initLobbyScreen();
    initGameScreen();
    initResultsScreen();
});
