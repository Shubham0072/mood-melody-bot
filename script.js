// A robust dataset of direct audio streaming links (.mp3 format)
const songDatabase = {
    happy: [
        { title: "Retro Groovy Beats (Old School)", artist: "Music Unlimited", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "Summer Upbeat Pop (New Era)", artist: "Praz Khanal", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "Energetic Dance Vibe", artist: "Yrii Semchyshyn", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
    ],
    sad: [
        { title: "Melancholic Piano Melody", artist: "Lesfm", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { title: "Emotional Guitar Acoustic", artist: "Sergii Guzen", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
        { title: "Cinematic Rainy Mood", artist: "Snoozy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
    ],
    energetic: [
        { title: "Cyberpunk Synthwave Hype", artist: "Alexgrohl", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
        { title: "Power Workout Rock Core", artist: "Ashot Danielyan", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
        { title: "Fast Electronic Pulse", artist: "Coma-Media", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" }
    ],
    relaxed: [
        { title: "Lofi Study Beats", artist: "FASSounds", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
        { title: "Chill Ambient Lounge", artist: "Oleg Fedak", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
        { title: "Peaceful Flute Chillout", artist: "Aura", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" }
    ]
};

// Global HTML5 Audio Element
const audioPlayer = new Audio();

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

window.onload = () => {
    startConversation();
};

function startConversation() {
    appendMessage("Hello! Choose a preset mood below, or type how you feel (e.g. happy, sad, gym, chill) to see matching tracks!", "bot-msg");
    createOptionChips(["😊 Happy", "😢 Sad", "⚡ Energetic", "🍃 Relaxed"], (selected) => {
        const mood = selected.replace(/[^\w\s]/gi, '').trim().toLowerCase();
        appendMessage(`I feel ${selected}`, "user-msg");
        processSearch(mood);
    });
}

function processSearch(textInput) {
    const query = textInput.toLowerCase().trim();
    let selectedGenre = "happy"; // Default fallback

    // Map text keywords to data tracks
    if (query.includes("sad") || query.includes("cry") || query.includes("low")) selectedGenre = "sad";
    else if (query.includes("energetic") || query.includes("gym") || query.includes("workout") || query.includes("hype")) selectedGenre = "energetic";
    else if (query.includes("relax") || query.includes("chill") || query.includes("lofi") || query.includes("calm")) selectedGenre = "relaxed";
    else selectedGenre = "happy";

    const tracks = songDatabase[selectedGenre];

    setTimeout(() => {
        // Build custom interactive UI list inside the chat bubble
        let listHtml = `
            <div class="music-list-container">
                <p>🎵 <strong>Found tracks for your vibe:</strong></p>
                <p style="font-size: 0.8rem; opacity: 0.8; margin-bottom: 8px;">Click any song below to play/pause instantly:</p>
                <div class="track-rows">
        `;

        tracks.forEach((track, index) => {
            listHtml += `
                <div class="track-row" onclick="togglePlay(this, '${track.url}')">
                    <span class="play-icon">▶️</span>
                    <div class="track-meta">
                        <span class="track-title">${track.title}</span>
                        <span class="track-artist">${track.artist}</span>
                    </div>
                </div>
            `;
        });

        listHtml += `</div></div>`;
        appendMessage(listHtml, "bot-msg");

        setTimeout(() => {
            createOptionChips(["🔄 Reset & Find New Vibe"], () => {
                audioPlayer.pause();
                startConversation();
            });
        }, 1500);

    }, 500);
}

// Play/Pause control engine logic
function togglePlay(element, audioUrl) {
    // If clicking the currently playing track, toggle pause
    if (audioPlayer.src === audioUrl) {
        if (audioPlayer.paused) {
            audioPlayer.play();
            element.querySelector(".play-icon").innerText = "⏸️";
            element.classList.add("playing");
        } else {
            audioPlayer.pause();
            element.querySelector(".play-icon").innerText = "▶️";
            element.classList.remove("playing");
        }
    } else {
        // Stop any currently playing animation elements
        document.querySelectorAll(".track-row").forEach(row => {
            row.classList.remove("playing");
            row.querySelector(".play-icon").innerText = "▶️";
        });

        // Load new source link and trigger execution
        audioPlayer.src = audioUrl;
        audioPlayer.play();
        element.querySelector(".play-icon").innerText = "⏸️";
        element.classList.add("playing");
    }
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
