// A vastly expanded mapping dictionary for smart matching
// Bulletproof Mobile-Friendly Spotify Embed Database
const searchDatabase = {
    happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec76w2jVD?utm_source=generator",
    sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRSy6vPhw?utm_source=generator",
    energetic: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76t638V6eg8?utm_source=generator",
    relaxed: "https://open.spotify.com/embed/playlist/37i9dQZF1DX889v67v6H6b?utm_source=generator",
    
    // Sub-genres
    old: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0Tk9Y9876wZ?utm_source=generator", 
    hindi: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XU6869NWhb?utm_source=generator", 
    punjabi: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5cZuAhl9GY4?utm_source=generator", 
    lofi: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0EXPn?utm_source=generator" 
};
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

window.onload = () => {
    startConversation();
};

function startConversation() {
    appendMessage("Hello! Choose a vibe below, or type exactly what kind of music/artist you want to search for!", "bot-msg");
    createOptionChips(["😊 Happy", "😢 Sad", "⚡ Energetic", "🍃 Relaxed"], (selected) => {
        const mood = selected.replace(/[^\w\s]/gi, '').trim().toLowerCase();
        appendMessage(`I want something ${selected}`, "user-msg");
        processSearch(mood);
    });
}

// This handles manual user typing OR button clicks seamlessly
function processSearch(queryText) {
    const cleanQuery = queryText.toLowerCase().trim();
    let embedUrl = "";
    let displayTitle = "";

    // 1. Smart Keyword Scanner
    if (cleanQuery.includes("happy") || cleanQuery.includes("joy")) {
        embedUrl = searchDatabase.happy;
        displayTitle = "Live Happy Vibes";
    } else if (cleanQuery.includes("sad") || cleanQuery.includes("cry") || cleanQuery.includes("low")) {
        embedUrl = searchDatabase.sad;
        displayTitle = "Melancholy Mix";
    } else if (cleanQuery.includes("energetic") || cleanQuery.includes("gym") || cleanQuery.includes("workout")) {
        embedUrl = searchDatabase.energetic;
        displayTitle = "High Energy Workout Core";
    } else if (cleanQuery.includes("relax") || cleanQuery.includes("chill") || cleanQuery.includes("calm")) {
        embedUrl = searchDatabase.relaxed;
        displayTitle = "Chill Lounge Collective";
    } else if (cleanQuery.includes("old") || cleanQuery.includes("retro") || cleanQuery.includes("90s")) {
        embedUrl = searchDatabase.old;
        displayTitle = "Classic Timeless Melodies";
    } else if (cleanQuery.includes("hindi") || cleanQuery.includes("bollywood")) {
        embedUrl = searchDatabase.hindi;
        displayTitle = "Trending Bollywood";
    } else if (cleanQuery.includes("punjabi")) {
        embedUrl = searchDatabase.punjabi;
        displayTitle = "Powerhouse Punjabi Tracks";
    } else if (cleanQuery.includes("lofi") || cleanQuery.includes("sleep")) {
        embedUrl = searchDatabase.lofi;
        displayTitle = "Lofi Study Session";
    } else {
        // Fallback: If they type something totally random, generate a direct native Spotify Search landing card!
        
        embedUrl = `https://open.spotify.com/embed/screen/search?q=${encodeURIComponent(cleanQuery)}&utm_source=generator`;
        displayTitle = `Real-time search results for: "${queryText}"`;
    }

    // 2. Render the interactive Results Deck
    setTimeout(() => {
        const botResponse = `
            <div class="bot-recommendation">
                <p>🔍 <strong>${displayTitle}</strong></p>
                <p>Click on any song in the playlist below to instantly stream it:</p>
                <div class="video-wrapper">
                    <iframe src="${embedUrl}" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        `;
        appendMessage(botResponse, "bot-msg");

        // Offer an instantaneous restart bridge
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
