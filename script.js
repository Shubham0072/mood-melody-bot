// A database mapping moods to optimized YouTube search queries
const searchDatabase = {
    happy: "happy pop songs playlist",
    sad: "sad hindi english songs mix",
    energetic: "gym workout motivational music",
    relaxed: "lofi chill beats live audio",
    old: "90s classic bollywood retro hits",
    hindi: "latest trending bollywood songs",
    punjabi: "new punjabi dance hits",
    lofi: "lofi study sleep lounge mix"
};

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

window.onload = () => {
    startConversation();
};

function startConversation() {
    appendMessage("Hello! Choose a vibe below, or type any artist/song you want to search for!", "bot-msg");
    createOptionChips(["😊 Happy", "😢 Sad", "⚡ Energetic", "🍃 Relaxed"], (selected) => {
        const mood = selected.replace(/[^\w\s]/gi, '').trim().toLowerCase();
        appendMessage(`I want something ${selected}`, "user-msg");
        processSearch(mood);
    });
}

function processSearch(queryText) {
    const cleanQuery = queryText.toLowerCase().trim();
    let searchQuery = "";
    let displayTitle = "";

    // 1. Check if it matches our presets
    if (cleanQuery.includes("happy") || cleanQuery.includes("joy")) {
        searchQuery = searchDatabase.happy;
        displayTitle = "Live Happy Vibes";
    } else if (cleanQuery.includes("sad") || cleanQuery.includes("cry") || cleanQuery.includes("low")) {
        searchQuery = searchDatabase.sad;
        displayTitle = "Melancholy Mix";
    } else if (cleanQuery.includes("energetic") || cleanQuery.includes("gym") || cleanQuery.includes("workout")) {
        searchQuery = searchDatabase.energetic;
        displayTitle = "High Energy Core";
    } else if (cleanQuery.includes("relax") || cleanQuery.includes("chill") || cleanQuery.includes("calm")) {
        searchQuery = searchDatabase.relaxed;
        displayTitle = "Chill Lounge Collective";
    } else if (cleanQuery.includes("old") || cleanQuery.includes("retro") || cleanQuery.includes("90s")) {
        searchQuery = searchDatabase.old;
        displayTitle = "Classic Timeless Melodies";
    } else if (cleanQuery.includes("hindi") || cleanQuery.includes("bollywood")) {
        searchQuery = searchDatabase.hindi;
        displayTitle = "Trending Bollywood";
    } else if (cleanQuery.includes("punjabi")) {
        searchQuery = searchDatabase.punjabi;
        displayTitle = "Powerhouse Punjabi Tracks";
    } else if (cleanQuery.includes("lofi") || cleanQuery.includes("sleep")) {
        searchQuery = searchDatabase.lofi;
        displayTitle = "Lofi Session";
    } else {
        // Dynamic search query if they type anything else
        searchQuery = cleanQuery;
        displayTitle = `Search results for: "${queryText}"`;
    }

    // 2. Formulate open search URL using YouTube's official embed query landing platform
    const embedUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(searchQuery)}`;

    setTimeout(() => {
        const botResponse = `
            <div class="bot-recommendation">
                <p>🔍 <strong>${displayTitle}</strong></p>
                <p>Use the controls inside the video player player below to watch or skip tracks:</p>
                <div class="video-wrapper">
                    <iframe src="${embedUrl}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        `;
        appendMessage(botResponse, "bot-msg");

        setTimeout(() => {
            createOptionChips(["🔄 Search for something else"], () => {
                startConversation();
            });
        }, 2000);
    }, 600);
}

function handleMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    appendMessage(text, "user-msg");
    userInput.value = "";
    processSearch(text);
}

function appendMessage(htmlContent, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = htmlContent;
    chatBox.appendChild(messageDiv);
    setTimeout(() => { chatBox.scrollTop = chatBox.scrollHeight; }, 50);
}

function createOptionChips(optionsArray, callback) {
    const chipContainer = document.createElement("div");
    chipContainer.className = "chip-container-block";
    optionsArray.forEach(optionText => {
        const button = document.createElement("button");
        button.className = "option-chip";
        button.innerText = optionText;
        button.addEventListener("click", () => {
            chipContainer.remove();
            callback(optionText);
        });
        chipContainer.appendChild(button);
    });
    chatBox.appendChild(chipContainer);
    setTimeout(() => { chatBox.scrollTop = chatBox.scrollHeight; }, 50);
}

sendBtn.addEventListener("click", handleMessage);
userInput.addEventListener("keypress", (e) => { if (e.key === "Enter") handleMessage(); });
