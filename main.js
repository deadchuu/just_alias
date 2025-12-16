// ===== GAME DATA =====
const WORDS = [
    { word: 'Adjust', hint: 'To adjust means to change something slightly to improve comfort or function.' },
    { word: 'Adjust(chair height)', hint: 'To adjust chair height means to raise or lower a chair for comfort.' },
    { word: 'All-in-one', hint: 'An all-in-one is a computer with the monitor and components built into a single unit.' },
    { word: 'Alphabet keys', hint: 'Alphabet keys are the letter keys on a keyboard.' },
    { word: 'Alt key', hint: 'The Alt key is used in combination with other keys for shortcuts.' },
    { word: 'Antivirus software', hint: 'software protecting against viruses' },
    { word: 'Aspect ratio', hint: 'ratio of width to height of an image' },
    { word: 'Attachment', hint: 'email attachment' },
    { word: 'Attribution', hint: 'author attribution' },
    { word: 'Backspace key', hint: 'The backspace key deletes the character to the left of the cursor.' },
    { word: 'Backup', hint: 'data backup' },
    { word: 'Bandwidth', hint: 'connection bandwidth' },
    { word: 'Battery', hint: 'A battery is a device that stores electrical energy and powers electronic equipment.' },
    { word: 'Bluetooth', hint: 'Bluetooth is a wireless technology for short-range data exchange.' },
    { word: 'Bookmark', hint: 'webpage bookmark' },
    { word: 'Bright', hint: 'Bright refers to a high level of light or vividness.' },
    { word: 'Brightness', hint: 'Brightness refers to the amount of light emitted by a screen.' },
    { word: 'Browser', hint: 'internet browser' },
    { word: 'Bug', hint: 'program error' },
    { word: 'Cable', hint: 'A cable is a wire used to connect devices for power or data transfer.' },
    { word: 'Calculator keys', hint: 'Calculator keys are special keys used for mathematical operations.' },
    { word: 'Capacitor', hint: 'electronic capacitor' },
    { word: 'Caps lock key', hint: 'The caps lock key toggles typing between lowercase and uppercase letters.' },
    { word: 'Card reader', hint: 'A card reader is a device that reads memory cards.' },
    { word: 'CD Drive', hint: 'A CD drive is a device that reads data from compact discs.' },
    { word: 'Charger', hint: 'A charger is a device used to replenish the energy of batteries.' },
    { word: 'Charging(batteries)', hint: 'Charging batteries means supplying energy to restore their power.' },
    { word: 'Click', hint: 'To click means to press a mouse button.' },
    { word: 'Click on', hint: 'To click on means to press a mouse button to select an item on the screen.' },
    { word: 'Clipboard', hint: 'system clipboard' },
    { word: 'Cloud storage', hint: 'storing data in the cloud' },
    { word: 'Collaborative platform', hint: 'online collaboration platform' },
    { word: 'Command', hint: 'system command' },
    { word: 'Compact', hint: 'Compact means small and efficiently designed.' },
    { word: 'Compatible', hint: 'Compatible means able to work with another device or system.' },
    { word: 'Connected', hint: 'Connected means joined to a network, device, or power source.' },
    { word: 'Contrast', hint: 'Contrast is the difference between light and dark areas of a display.' },
    { word: 'Control key', hint: 'The control key is used in keyboard shortcuts for commands.' },
    { word: 'Copyright laws', hint: 'copyright laws' },
    { word: 'Crash', hint: 'system or program failure' },
    { word: 'CRT (Cathode Ray Tube)', hint: 'old type of CRT monitor' },
    { word: 'CRT Monitor', hint: 'A CRT monitor is a bulky display using cathode ray tube technology.' },
    { word: 'Cursor', hint: 'screen cursor' },
    { word: 'Data breach', hint: 'data security breach' },
    { word: 'Data input', hint: 'Data input refers to entering information into a computer system.' },
    { word: 'Data integrity', hint: 'data integrity' },
    { word: 'Decryption', hint: 'data decryption' },
    { word: 'Delete key', hint: 'The delete key removes characters or selected items.' },
    { word: 'Desktop case', hint: 'horizontal computer case' },
    { word: 'Desktop computer', hint: 'A desktop computer is a personal computer designed for use at a fixed location.' },
    { word: 'Digital camera', hint: 'A digital camera is a device that captures photographs and videos in digital format.' },
    { word: 'Discussion board', hint: 'discussion board' },
    { word: 'Disk cleanup utility', hint: 'disk cleaning tool' },
    { word: 'Disk defragmentation tool', hint: 'disk defragmentation program' },
    { word: 'Docking station', hint: 'A docking station is a device that connects a laptop to multiple peripherals.' },
    { word: 'Domain Name System (DNS)', hint: 'internet domain name system' },
    { word: 'Double click', hint: 'A double click is two quick presses of a mouse button.' },
    { word: 'Download speed', hint: 'data download speed' },
    { word: 'DPI(dots per inch)', hint: 'DPI refers to the number of dots per inch in a printed or scanned image.' },
    { word: 'Drop-down menu', hint: 'drop-down menu' },
    { word: 'DVD Drive', hint: 'A DVD drive is a device that reads and writes DVD discs.' },
    { word: 'Easy to use', hint: 'Easy to use means simple and user-friendly.' },
    { word: 'Email etiquette', hint: 'rules of writing emails' },
    { word: 'Encryption', hint: 'data encryption' },
    { word: 'Enter key', hint: 'The enter key executes commands or confirms actions.' },
    { word: 'Ergonomic keyboard', hint: 'An ergonomic keyboard is designed to reduce strain on hands and wrists.' },
    { word: 'Escape key', hint: 'The escape key cancels or exits operations.' },
    { word: 'Exhausted battery', hint: 'An exhausted battery is one that has completely run out of power.' },
    { word: 'Expansion card', hint: 'An expansion card is a component inserted into a computer to add functionality.' },
    { word: 'False', hint: 'False means untrue or incorrect.' },
    { word: 'Fan', hint: 'computer cooling fan' },
    { word: 'Fast', hint: 'Fast means moving or operating quickly.' },
    { word: 'Fax machine', hint: 'A fax machine is a device that sends and receives documents over telephone lines.' },
    { word: 'File format', hint: 'A file format is the structure in which a digital file is saved.' },
    { word: 'Firewall', hint: 'network firewall protecting the computer' },
    { word: 'Firmware', hint: 'built-in device software' },
    { word: 'Flaming', hint: 'offensive online comments' },
    { word: 'Flat battery', hint: 'A flat battery is one that has no remaining charge.' },
    { word: 'Flat panel monitor', hint: 'A flat panel monitor is a thin screen that uses LCD or LED technology.' },
    { word: 'Flatbed scanner', hint: 'A flatbed scanner scans documents placed on a glass surface.' },
    { word: 'Floppy disk', hint: 'A floppy disk is a magnetic storage medium used for small amounts of data.' },
    { word: 'Function keys', hint: 'Function keys are the keys labeled F1–F12 used for shortcuts.' },
    { word: 'Give(as in give a presentation)', hint: 'To give a presentation means to deliver information to an audience.' },
    { word: 'Handheld scanner', hint: 'A handheld scanner is a portable device used to scan documents manually.' },
    { word: 'Have a passion for', hint: 'to have a strong enthusiasm or interest in something' },
    { word: 'Have strong skills', hint: 'to possess advanced or highly developed abilities' },
    { word: 'Heat sink', hint: 'heat-dissipating radiator' },
    { word: 'High-tech', hint: 'High-tech refers to modern and advanced technology.' },
    { word: 'High resolution', hint: 'High resolution means an image contains many pixels and fine detail.' },
    { word: 'High speed', hint: 'High speed means very fast performance.' },
    { word: 'Highlight', hint: 'select text or object' },
    { word: 'Hit(key)', hint: 'To hit a key means to press a key on the keyboard.' },
    { word: 'Hold down', hint: 'To hold down means to keep a key or button pressed.' },
    { word: 'Image editing', hint: 'Image editing is the process of modifying or enhancing digital images.' },
    { word: 'Inches(screen size)', hint: 'Screen size in inches refers to the diagonal measurement of a monitor.' },
    { word: 'Incorrect', hint: 'Incorrect means not accurate or wrong.' },
    { word: 'Indicator lights', hint: 'Indicator lights show device status such as power or battery level.' },
    { word: 'Insert(CD ROM)', hint: 'To insert a CD-ROM means to place the disc into the computer drive.' },
    { word: 'Interface', hint: 'software interface' },
    { word: 'IP address', hint: 'device internet address' },
    { word: 'Joystick', hint: 'A joystick is a control device used mainly for gaming and simulations.' },
    { word: 'JPEG', hint: 'JPEG is a widely used digital image compression format.' },
    { word: 'Key', hint: 'A key is an individual button on a keyboard.' },
    { word: 'Key in', hint: 'To key in means to enter information using the keyboard.' },
    { word: 'Keyboard', hint: 'A keyboard is a device with keys used to input text and commands into a computer.' },
    { word: 'Laptop computer', hint: 'A laptop computer is a portable personal computer with a built-in screen and keyboard.' },
    { word: 'Laser printer', hint: 'high-quality laser printer' },
    { word: 'Latency', hint: 'delay in data transmission' },
    { word: 'Latest model', hint: 'Latest model refers to the most recently released version of a product.' },
    { word: 'LCD (Liquid Crystal Display)', hint: 'liquid crystal display' },
    { word: 'Left button', hint: 'The left button is the main mouse button used for selecting.' },
    { word: 'Login credentials', hint: 'login data' },
    { word: 'Long distance', hint: 'Long distance refers to the ability to operate over a large range.' },
    { word: 'Look at(screen)', hint: 'To look at the screen means to view information displayed on a monitor.' },
    { word: 'Loudspeakers', hint: 'Loudspeakers are devices that output sound from a computer or audio system.' },
    { word: 'Low-tech', hint: 'Low-tech refers to simple technology with minimal complexity.' },
    { word: 'Low battery', hint: 'A low battery has only a small amount of charge remaining.' },
    { word: 'Low resolution', hint: 'Low resolution means an image has fewer pixels and less detail.' },
    { word: 'Mechanical mouse', hint: 'mouse with a tracking ball' },
    { word: 'Memory card', hint: 'memory card' },
    { word: 'Modem', hint: 'A modem is a device that connects a computer to the internet over phone or cable lines.' },
    { word: 'Most modern', hint: 'Most modern means the most up-to-date in design or technology.' },
    { word: 'Motherboard', hint: 'mainboard / motherboard' },
    { word: 'Mouse', hint: 'A mouse is a handheld device used to move a pointer on the computer screen.' },
    { word: 'Mouse cord', hint: 'cable connecting the mouse to the computer' },
    { word: 'Mouse mat', hint: 'A mouse mat is a pad that provides a smooth surface for a computer mouse.' },
    { word: 'Move(as in move a mouse)', hint: 'To move the mouse means to shift the device to control the pointer on the screen.' },
    { word: 'Multimedia content', hint: 'multimedia content' },
    { word: 'Network adapter', hint: 'network card' },
    { word: 'Network connections', hint: 'links between devices within a network' },
    { word: 'Network troubleshooting', hint: 'network problem solving' },
    { word: 'Newest', hint: 'Newest means most recent.' },
    { word: 'Notebook', hint: 'A notebook is a lightweight, portable computer for everyday tasks.' },
    { word: 'Number pad', hint: 'part of the keyboard with numbers' },
    { word: 'Obsolete', hint: 'Obsolete means no longer used or out of date.' },
    { word: 'Obvious', hint: 'Obvious means easy to understand or recognize.' },
    { word: 'OCR Software', hint: 'OCR software converts scanned text into editable digital text.' },
    { word: 'Old-tech', hint: 'Old-tech refers to older or outdated technology.' },
    { word: 'Online forum', hint: 'internet forum' },
    { word: 'Operating system', hint: 'software that manages computer hardware and resources' },
    { word: 'Optical Character Recognition', hint: 'Optical Character Recognition is the technology that converts scanned text into editable text.' },
    { word: 'Optical mouse', hint: 'An optical mouse is a mouse that uses light to detect movement.' },
    { word: 'Original', hint: 'Original refers to the source document being scanned or copied.' },
    { word: 'Page file', hint: 'paging file' },
    { word: 'PDA (Personal Digital Assistant)', hint: 'A PDA is a handheld device used for managing personal information.' },
    { word: 'Performance', hint: 'system or program performance' },
    { word: 'Phishing', hint: 'attempt to steal data' },
    { word: 'Plug', hint: 'A plug is a connector that allows a device to draw electrical power.' },
    { word: 'Plug and play', hint: 'Plug and play means a device works automatically when connected without extra setup.' },
    { word: 'Plugged in', hint: 'Plugged in means connected to a power supply.' },
    { word: 'Pointer', hint: 'A pointer is the on-screen indicator controlled by a mouse.' },
    { word: 'Pop-up', hint: 'pop-up window' },
    { word: 'Port', hint: 'computer socket or connector' },
    { word: 'Power button', hint: 'A power button is a switch that turns a device on or off.' },
    { word: 'Power point', hint: 'A power point is an electrical outlet that provides power to devices.' },
    { word: 'Power supply unit (PSU)', hint: 'computer power supply' },
    { word: 'Power switch', hint: 'computer power button' },
    { word: 'PPM (pages per minute)', hint: 'number of pages printed per minute' },
    { word: 'Preferences', hint: 'user preferences' },
    { word: 'Preview', hint: 'Preview means to view something before finalizing or printing it.' },
    { word: 'Print out', hint: 'To print out means to create a physical copy of a digital document.' },
    { word: 'Printer', hint: 'A printer is a device that produces physical copies of digital documents or images.' },
    { word: 'Project management tool', hint: 'project management tool' },
    { word: 'Projector', hint: 'A projector is a device that displays images or video onto a large screen.' },
    { word: 'Properties', hint: 'settings or attributes of a file, object, or program' },
    { word: 'Proxy server', hint: 'intermediary server' },
    { word: 'Pulled out(plug)', hint: 'Pulled out means the plug was removed from the socket.' },
    { word: 'Quick', hint: 'Quick means fast or rapid.' },
    { word: 'QWERTY', hint: 'standard keyboard layout' },
    { word: 'RAM back-up', hint: 'a backup system that stores data from RAM' },
    { word: 'Re-chargeable', hint: 'capable of being charged again' },
    { word: 'Reboot', hint: 'system restart' },
    { word: 'Recharge', hint: 'To recharge means to restore power to a battery.' },
    { word: 'Redundant data', hint: 'duplicate data used for reliability or backup' },
    { word: 'Repetitive strain injury', hint: 'Repetitive strain injury is damage caused by repeating the same physical motion.' },
    { word: 'Restore', hint: 'restore data' },
    { word: 'Restrictive access privileges', hint: 'permissions that limit users ability to access resources' },
    { word: 'Return key', hint: 'The return key is used to start a new line or confirm a command.' },
    { word: 'Right button', hint: 'The right button opens context menus and additional options.' },
    { word: 'Roll(mouse wheel)', hint: 'To roll the mouse wheel means to rotate it to navigate content.' },
    { word: 'Router', hint: 'device distributing internet signal' },
    { word: 'Rows and columns', hint: 'horizontal and vertical divisions in a table or spreadsheet' },
    { word: 'Run out(of ink)', hint: 'To run out of ink means that the printer no longer has ink available.' },
    { word: 'Scanner', hint: 'A scanner is a device that converts physical documents into digital format.' },
    { word: 'Screen', hint: 'A screen is a display surface that shows visual output from a computer.' },
    { word: 'Screen saver', hint: 'animated image that appears when a device is idle' },
    { word: 'Scroll bar', hint: 'scroll bar' },
    { word: 'Scroll down', hint: 'To scroll down means to move displayed content downward.' },
    { word: 'Scroll up', hint: 'To scroll up means to move displayed content upward.' },
    { word: 'Scroll wheel', hint: 'The scroll wheel is a rotating control used to navigate through content.' },
    { word: 'Search engine', hint: 'internet search engine' },
    { word: 'Secure Setting up', hint: 'configuring a system in a secure manner' },
    { word: 'Send and receive(faxes)', hint: 'To send and receive faxes means to exchange documents via fax machine.' },
    { word: 'Settings', hint: 'configuration options in a device or program' },
    { word: 'Shared document', hint: 'shared document' },
    { word: 'Shift key', hint: 'The shift key is used to type capital letters and special characters.' },
    { word: 'Shortcut', hint: 'keyboard shortcut or icon' },
    { word: 'Sign-off', hint: 'email closing' },
    { word: 'Single click', hint: 'A single click is one press and release of a mouse button.' },
    { word: 'Socket', hint: 'A socket is an outlet that supplies electrical power to a plug.' },
    { word: 'Software', hint: 'programs and applications run on a computer' },
    { word: 'Space bar', hint: 'The space bar is a long key used to insert spaces between words.' },
    { word: 'Spam', hint: 'unwanted email messages' },
    { word: 'Spamming', hint: 'sending unwanted messages' },
    { word: 'Spyware', hint: 'malicious software that secretly collects user data' },
    { word: 'Stand', hint: 'A stand is a support that holds a monitor or device upright.' },
    { word: 'Standart keyboard', hint: 'A standard keyboard is a traditional layout with common keys and functions.' },
    { word: 'Subject line', hint: 'email subject' },
    { word: 'Switched off', hint: 'powered off or not operating' },
    { word: 'System monitoring tool', hint: 'system monitoring tool' },
    { word: 'Tab', hint: 'browser tab' },
    { word: 'Tab key', hint: 'The tab key moves the cursor to the next tab position or field.' },
    { word: 'Take(digital photos)', hint: 'To take digital photos means to capture images with a digital camera.' },
    { word: 'Task manager', hint: 'task manager' },
    { word: 'Terminate and stay resident', hint: 'a type of DOS program that remains in memory after closing' },
    { word: 'Terms of service', hint: 'service terms' },
    { word: 'Text', hint: 'Text is written or typed characters.' },
    { word: 'Thick', hint: 'Thick means having a large distance between opposite sides.' },
    { word: 'Toolbar', hint: 'toolbar' },
    { word: 'Touch screen', hint: 'screen that reacts to touch' },
    { word: 'Touchpad', hint: 'A touchpad is a flat surface that detects finger movement to control the pointer.' },
    { word: 'Tower', hint: 'A tower is the main vertical case of a desktop computer that houses components.' },
    { word: 'Trojan horse', hint: 'malicious program disguised as legitimate software' },
    { word: 'Type in', hint: 'To type in means to input text using a keyboard.' },
    { word: 'Typo', hint: 'spelling mistake in text' },
    { word: 'Uncomplicated', hint: 'Uncomplicated means simple and not difficult to understand.' },
    { word: 'Unformatted disk', hint: 'a disk that has not been prepared for data storage' },
    { word: 'Uninstalling', hint: 'removing software from a system' },
    { word: 'Unplug', hint: 'To unplug means to disconnect a device from its power source.' },
    { word: 'Unpopulated', hint: 'not filled, installed, or populated with components' },
    { word: 'Update', hint: 'a newer version of software or data' },
    { word: 'Upgrade', hint: 'hardware or software improvement' },
    { word: 'Upload speed', hint: 'data upload speed' },
    { word: 'User permissions', hint: 'user access rights' },
    { word: 'Vector graphics', hint: 'graphics based on paths rather than pixels' },
    { word: 'Virtual memory', hint: 'system virtual memory' },
    { word: 'Wi-Fi signal', hint: 'wireless network signal' },
    { word: 'Wire', hint: 'A wire is a conductor that carries electrical signals or power.' },
    { word: 'Wire-free', hint: 'Wire-free means operating without physical cables.' },
    { word: 'Wireless', hint: 'Wireless means functioning without wired connections.' },
    { word: 'Workstation', hint: 'computer workstation' },
    { word: 'Worm', hint: 'malware that spreads through networks independently' },
    { word: 'Wrong', hint: 'Wrong means inaccurate or mistaken.' }
];

// Shuffle function
function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
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
    if (available.length === 0) {
        // Reset and start over
        gameState.usedWords = [];
        return shuffleArray(WORDS).slice(0, count);
    }
    const selected = shuffleArray(available).slice(0, count);
    selected.forEach(word => {
        const idx = WORDS.indexOf(word);
        if (idx >= 0) gameState.usedWords.push(idx);
    });
    return selected;
}

// ===== SCREEN MANAGEMENT =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// ===== HOME SCREEN =====
function initHomeScreen() {
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
