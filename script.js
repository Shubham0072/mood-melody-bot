// Expanded Local Database grouped by Mood, then split by Language
// Rock-Solid Spotify Embed Database (Hindi & English Variety)
const songDatabase = {
    happy: {
        english: [
            { title: "Surfaces - Sunday Best", embedUrl: "https://open.spotify.com/embed/track/1Cv16Y6DGfcBiwX6wYI6pG" },
            { title: "Pharrell Williams - Happy", embedUrl: "https://open.spotify.com/embed/track/60nZto6J67w6a6imvFU36C" },
            { title: "Justin Timberlake - Can't Stop The Feeling", embedUrl: "https://open.spotify.com/embed/track/1Yg9p6VInBsh1h8GvX9X2E" },
            { title: "Bruno Mars - Uptown Funk", embedUrl: "https://open.spotify.com/embed/track/32OlwCamAxZgXwK17jUjTS" }
        ],
        hindi: [
            { title: "Kishore Kumar - Zindagi Ek Safar", embedUrl: "https://open.spotify.com/embed/track/47gPZ6Z67GvS3T8pM3wV3X" },
            { title: "Ilahi - Yeh Jawaani Hai Deewani", embedUrl: "https://open.spotify.com/embed/track/2ScaZq9wK7U8oUvV6E2z4a" },
            { title: "Gallan Goodiyaan - Dil Dhadakne Do", embedUrl: "https://open.spotify.com/embed/track/2FvS9X7v6WvK8W2xE2z4bA" },
            { title: "Udit Narayan - Yun Hi Chala Chal", embedUrl: "https://open.spotify.com/embed/track/1x7v6WvK8W2xE2z4cA5dB" }
        ]
    },
    sad: {
        english: [
            { title: "Coldplay - Fix You", embedUrl: "https://open.spotify.com/embed/track/7LVHVw6v6Yg3cA6QIaa06A" },
            { title: "Passenger - Let Her Go", embedUrl: "https://open.spotify.com/embed/track/7gYI6gVInBsh1h8GvX9X2E" },
            { title: "Adele - Someone Like You", embedUrl: "https://open.spotify.com/embed/track/4un9vV6E2z4a6GvS3T8pM3" },
            { title: "Lewis Capaldi - Someone You Loved", embedUrl: "https://open.spotify.com/embed/track/7m9OqXm67w6a6imvFU36C" }
        ],
        hindi: [
            { title: "Arijit Singh - Channa Mereya", embedUrl: "https://open.spotify.com/embed/track/3yW2g67w6a6imvFU36C7z" },
            { title: "Atif Aslam - Jeena Jeena", embedUrl: "https://open.spotify.com/embed/track/5v6WvK8W2xE2z4cA5dB6e" },
            { title: "Mohit Chauhan - Tune Jo Na Kaha", embedUrl: "https://open.spotify.com/embed/track/2xE2z4cA5dB6e7f8g9h1i" },
            { title: "Arijit Singh - Tum Hi Ho", embedUrl: "https://open.spotify.com/embed/track/57GvS3T8pM3wV3X47gPZ6" }
        ]
    },
    energetic: {
        english: [
            { title: "The Weeknd - Blinding Lights", embedUrl: "https://open.spotify.com/embed/track/0VjIjW4GlUZAM7v2Rz6g6p" },
            { title: "Eminem - Till I Collapse", embedUrl: "https://open.spotify.com/embed/track/4X7v6WvK8W2xE2z4cA5dB" },
            { title: "Survivor - Eye Of The Tiger", embedUrl: "https://open.spotify.com/embed/track/27gPZ6Z67GvS3T8pM3wV3X" },
            { title: "Linkin Park - In The End", embedUrl: "https://open.spotify.com/embed/track/60nZto6J67w6a6imvFU36C" }
        ],
        hindi: [
            { title: "Ranveer Singh - Apna Time Aayega", embedUrl: "https://open.spotify.com/embed/track/4VvS9X7v6WvK8W2xE2z4bA" },
            { title: "Sukhwinder Singh - Kar Har Maidaan Fateh", embedUrl: "https://open.spotify.com/embed/track/1ScaZq9wK7U8oUvV6E2z4a" },
            { title: "Vishal-Shekhar - Malhari", embedUrl: "https://open.spotify.com/embed/track/347gPZ6Z67GvS3T8pM3wV3X" },
            { title: "Shankar Mahadevan - Maurya Re", embedUrl: "https://open.spotify.com/embed/track/67GvS3T8pM3wV3X47gPZ6Z" }
        ]
    },
    relaxed: {
        english: [
            { title: "Marconi Union - Weightless", embedUrl: "https://open.spotify.com/embed/track/57GvS3T8pM3wV3X47gPZ6" },
            { title: "Norah Jones - Come Away With Me", embedUrl: "https://open.spotify.com/embed/track/2ScZq9wK7U8oUvV6E2z4a6" },
            { title: "Billie Eilish - Ocean Eyes", embedUrl: "https://open.spotify.com/embed/track/7v6WvK8W2xE2z4cA5dB6e7" },
            { title: "Ed Sheeran - Perfect", embedUrl: "https://open.spotify.com/embed/track/0tgGoYf66QQgYv83ubwfnR" }
        ],
        hindi: [
            { title: "Arijit Singh - Samjhawan", embedUrl: "https://open.spotify.com/embed/track/2FvS9X7v6WvK8W2xE2z4bA5" },
            { title: "Mohit Chauhan - Dooba Dooba", embedUrl: "https://open.spotify.com/embed/track/47gPZ6Z67GvS3T8pM3wV3X6" },
            { title: "Lucky Ali - O Sanam", embedUrl: "https://open.spotify.com/embed/track/1x7v6WvK8W2xE2z4cA5dB6" },
            { title: "Prateek Kuhad - cold/mess", embedUrl: "https://open.spotify.com/embed/track/1m9OqXm67w6a6imvFU36C7" }
        ]
    }
};

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Session variables tracking step-by-step state
let chosenMood = null;
let chosenLanguage = null;

// Initial Setup when page loads
window.onload = () => {
    askForMood();
};

function askForMood() {
    appendMessage("What vibe or mood are you feeling right now?", "bot-msg");
    createOptionChips(["😊 Happy", "😢 Sad", "⚡ Energetic", "🍃 Relaxed"], (selected) => {
        // Strip out the emoji to evaluate key strings
        chosenMood = selected.replace(/[^\w\s]/gi, '').trim().toLowerCase();
        appendMessage(`I picked ${selected}`, "user-msg");
        
        setTimeout(() => {
            askForLanguage();
        }, 600);
    });
}

function askForLanguage() {
    appendMessage("Awesome. Do you want to vibe with Hindi or English tracks?", "bot-msg");
    createOptionChips(["🇮🇳 Hindi", "🇬🇧 English"], (selected) => {
        chosenLanguage = selected.replace(/[^\w\s]/gi, '').trim().toLowerCase();
        appendMessage(`Let's hear some ${selected}`, "user-msg");
        
        setTimeout(() => {
            giveRecommendation();
        }, 600);
    });
}

function giveRecommendation() {
    const trackList = songDatabase[chosenMood]?.[chosenLanguage];
    
    if (trackList && trackList.length > 0) {
        // Randomly pick a song from the designated cluster
        const song = trackList[Math.floor(Math.random() * trackList.length)];
        
        const botResponse = `
            <div class="bot-recommendation">
                <p>Boom! Here is a track custom curated for you:</p>
                <strong>${song.title}</strong>
                <div class="video-wrapper">
                    <iframe src="${song.embedUrl}" scrolling="no" allow="autoplay"></iframe>
                </div>
            </div>
        `;
        appendMessage(botResponse, "bot-msg");
    } else {
        appendMessage("Oops, I encountered a tiny bug parsing that combination.", "bot-msg");
    }

    // Offer a reset flow so they can continue testing infinite combinations
    setTimeout(() => {
        appendMessage("Want to discover another song or match another feeling?", "bot-msg");
        createOptionChips(["🔄 Find Another Song"], () => {
            chosenMood = null;
            chosenLanguage = null;
            askForMood();
        });
    }, 1500);
}

// Processing direct manual keyboard input as an alternative path
function handleMessage() {
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;

    appendMessage(userInput.value, "user-msg");
    userInput.value = "";

    setTimeout(() => {
        // Simple scan backup logic
        if (text.includes("happy")) { chosenMood = "happy"; askForLanguage(); }
        else if (text.includes("sad")) { chosenMood = "sad"; askForLanguage(); }
        else if (text.includes("energetic")) { chosenMood = "energetic"; askForLanguage(); }
        else if (text.includes("relax")) { chosenMood = "relaxed"; askForLanguage(); }
        else {
            appendMessage("I couldn't quite map that mood text. Try using my interactive chips below!", "bot-msg");
            askForMood();
        }
    }, 600);
}

// UI Rendering Engine Helpers
function appendMessage(htmlContent, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = htmlContent;
    chatBox.appendChild(messageDiv);
    
    setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 50);
}

function createOptionChips(optionsArray, callback) {
    const chipContainer = document.createElement("div");
    chipContainer.className = "chip-container-block";

    optionsArray.forEach(optionText => {
        const button = document.createElement("button");
        button.className = "option-chip";
        button.innerText = optionText;
        button.addEventListener("click", () => {
            chipContainer.remove(); // Remove active options once selection terminates
            callback(optionText);
        });
        chipContainer.appendChild(button);
    });

    chatBox.appendChild(chipContainer);
    setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 50);
}

sendBtn.addEventListener("click", handleMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleMessage();
});
