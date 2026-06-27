// Expanded Local Database grouped by Mood, then split by Language
const songDatabase = {
    happy: {
        english: [
            { title: "Surfaces - Sunday Best", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/561707259&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Pharrell Williams - Happy", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125345700&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Justin Timberlake - Can't Stop The Feeling", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262705055&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Bruno Mars - Uptown Funk", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177964402&color=%231db954&hide_related=true&show_comments=false&show_user=false" }
        ],
        hindi: [
            { title: "Kishore Kumar - Zindagi Ek Safar", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/281665486&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Ilahi - Yeh Jawaani Hai Deewani", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/92661853&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Kar Kar Kar - Dil Dhadakne Do", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/203450917&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Udit Narayan - Yun Hi Chala Chal", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173909569&color=%231db954&hide_related=true&show_comments=false&show_user=false" }
        ]
    },
    sad: {
        english: [
            { title: "Coldplay - Fix You", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/114144415&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Passenger - Let Her Go", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/92224734&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Adele - Someone Like You", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/24855473&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Lewis Capaldi - Someone You Loved", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/527187978&color=%231db954&hide_related=true&show_comments=false&show_user=false" }
        ],
        hindi: [
            { title: "Arijit Singh - Channa Mereya", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/285324314&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Atif Aslam - Jeena Jeena", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/186105370&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Mohit Chauhan - Tune Jo Na Kaha", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167232240&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Arijit Singh - Tum Hi Ho", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/87340051&color=%231db954&hide_related=true&show_comments=false&show_user=false" }
        ]
    },
    energetic: {
        english: [
            { title: "The Weeknd - Blinding Lights", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/720364906&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Eminem - Till I Collapse", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/17234320&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Survivor - Eye Of The Tiger", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/43460662&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Linkin Park - In The End", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/186591343&color=%231db954&hide_related=true&show_comments=false&show_user=false" }
        ],
        hindi: [
            { title: "Ranveer Singh - Apna Time Aayega", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/558564177&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Sukhwinder Singh - Kar Har Maidaan Fateh", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/456674487&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Vishal-Shekhar - Malhari", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/235079218&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Shankar Mahadevan - Maurya Re", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/67104527&color=%231db954&hide_related=true&show_comments=false&show_user=false" }
        ]
    },
    relaxed: {
        english: [
            { title: "Marconi Union - Weightless", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/33894236&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Norah Jones - Come Away With Me", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/246473179&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Billie Eilish - Ocean Eyes", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233519154&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Ed Sheeran - Perfect", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310657960&color=%231db954&hide_related=true&show_comments=false&show_user=false" }
        ],
        hindi: [
            { title: "Arijit Singh - Samjhawan", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154181971&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Mohit Chauhan - Dooba Dooba", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/33716942&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Lucky Ali - O Sanam", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/114995574&color=%231db954&hide_related=true&show_comments=false&show_user=false" },
            { title: "Prateek Kuhad - cold/mess", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/465134769&color=%231db954&hide_related=true&show_comments=false&show_user=false" }
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
