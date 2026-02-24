// --- 1. GAME STATE (Data) ---
let gameData = {
    currency: 0,
    currencyPerClick: 1,
    currencyPerSecond: 0,
    upgrade1Cost: 10,
    // Add more variables here
};

// --- 2. DOM ELEMENTS (Links to HTML) ---
const currencyUI = document.getElementById('currency-display');
const perSecondUI = document.getElementById('per-second-display');
const mainBtn = document.getElementById('main-click-btn');
const upgrade1Btn = document.getElementById('upgrade-1-btn');
const u1CostUI = document.getElementById('u1-cost');

// --- 3. FUNCTIONS (The "How") ---

function updateDisplay() {
    // This function updates the text on the screen
    currencyUI.innerText = Math.floor(gameData.currency);
    perSecondUI.innerText = gameData.currencyPerSecond;
    u1CostUI.innerText = gameData.upgrade1Cost;
    
    // Disable buttons if player can't afford them
    upgrade1Btn.disabled = gameData.currency < gameData.upgrade1Cost;
}

function handleMainClick() {
    // Logic for when the big button is clicked
}

function buyUpgrade1() {
    // Logic for buying the first upgrade
}

// --- 4. EVENT LISTENERS (The "When") ---

mainBtn.addEventListener('click', () => {
    handleMainClick();
    updateDisplay();
});

upgrade1Btn.addEventListener('click', () => {
    buyUpgrade1();
    updateDisplay();
});

// --- 5. THE GAME LOOP (The "Idle" part) ---

setInterval(function() {
    // This code runs every 1 second (1000ms)
    // 1. Add currency per second to total currency
    // 2. Update the display
}, 1000);

// Initialize display on load
updateDisplay();
