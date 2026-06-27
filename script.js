// High-Scale Structured Database across Moods, Languages, and Eras
const songDatabase = {
    happy: {
        hindi: {
            old: [
                { title: "Zindagi Ek Safar Hai Suhana", artist: "Kishore Kumar", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
                { title: "Khaike Pan Banaraswala", artist: "Kishore Kumar", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
            ],
            new: [
                { title: "Ilahi (Yeh Jawaani Hai Deewani)", artist: "Arijit Singh", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
                { title: "Proper Patola", artist: "Diljit Dosanjh", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
            ]
        },
        english: {
            old: [
                { title: "Don't Stop Me Now", artist: "Queen", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
                { title: "Stayin' Alive", artist: "Bee Gees", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
            ],
            new: [
                { title: "Happy", artist: "Pharrell Williams", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
                { title: "Uptown Funk", artist: "Bruno Mars", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
            ]
        },
        punjabi: {
            old: [
                { title: "Tunak Tunak Tun", artist: "Daler Mehndi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
                { title: "Mundian To Bach Ke", artist: "Panjabi MC", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
            ],
            new: [
                { title: "High Rated Gabru", artist: "Guru Randhawa", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
                { title: "Brown Munde", artist: "AP Dhillon", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" }
            ]
        }
    },
    sad: {
        hindi: {
            old: [
                { title: "Chingari Koi Bhadke", artist: "Kishore Kumar", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
                { title: "Kabhi Kabhie Mere Dil Mein", artist: "Mukesh", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" }
            ],
            new: [
                { title: "Channa Mereya", artist: "Arijit Singh", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
                { title: "Tum Hi Ho", artist: "Arijit Singh", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" }
            ]
        },
        english: {
            old: [
                { title: "Yesterday", artist: "The Beatles", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
                { title: "Tears in Heaven", artist: "Eric Clapton", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
            ],
            new: [
                { title: "Someone Like You", artist: "Adele", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
                { title: "Someone You Loved", artist: "Lewis Capaldi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
            ]
        },
        punjabi: {
            old: [
                { title: "Challa", artist: "Gurdas Maan", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
                { title: "Khali Dil Nahi", artist: "Amrinder Gill", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
            ],
            new: [
                { title: "Excuses", artist: "AP Dhillon", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
                { title: "Clicc", artist: "Sidhu Moose Wala", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
            ]
        }
    },
    energetic: {
        hindi: {
            old: [
                { title: "Chak De India Title Track", artist: "Sukhwinder Singh", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
                { title: "Zinda (Bhaag Milkha Bhaag)", artist: "Siddharth Mahadevan", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
            ],
            new: [
                { title: "Malhari", artist: "Vishal Dadlani", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
                { title: "Apna Time Aayega", artist: "Ranveer Singh", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" }
            ]
        },
        english: {
            old: [
                { title: "Eye of the Tiger", artist: "Survivor", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
                { title: "Lose Yourself", artist: "Eminem", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" }
            ],
            new: [
                { title: "Blinding Lights", artist: "The Weeknd", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
                { title: "Believer", artist: "Imagine Dragons", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" }
            ]
        },
        punjabi: {
            old: [
                { title: "Mitran De Boot", artist: "Jazzy B", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
                { title: "Das Ja", artist: "DJ Sanj", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
            ],
            new: [
                { title: "The Last Ride", artist: "Sidhu Moose Wala", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
                { title: "We Rollin", artist: "Shubh", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
            ]
        }
    },
    relaxed: {
        hindi: {
            old: [
                { title: "Dooba Dooba Silk Route", artist: "Mohit Chauhan", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
                { title: "O Sanam", artist: "Lucky Ali", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
            ],
            new: [
                { title: "cold/mess", artist: "Prateek Kuhad", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
                { title: "Kasoor", artist: "Prateek Kuhad", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
            ]
        },
        english: {
            old: [
                { title: "Come Away With Me", artist: "Norah Jones", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
                { title: "Wonderful Tonight", artist: "Eric Clapton", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
            ],
            new: [
                { title: "Ocean Eyes", artist: "Billie Eilish", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
                { title: "Perfect", artist: "Ed Sheeran", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" }
            ]
        },
        punjabi: {
            old: [
                { title: "Wanga", artist: "Amrinder Gill", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
                { title: "Yaarian", artist: "Amrinder Gill", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" }
            ],
            new: [
                { title: "Waalian", artist: "Harnoor", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
                { title: "Chan Sitare", artist: "Ammy Virk", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" }
            ]
        }
    }
};

const audioPlayer = new Audio();
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Session parameters tracking state tree
let currentMood = "";
let currentLang = "";

window.onload = () => {
    startConversation();
};

function startConversation() {
    appendMessage("Welcome to Mood Melody Bot! What vibe or mood are you running with right now?", "bot-msg");
    createOptionChips(["😊 Happy", "😢 Sad", "⚡ Energetic", "🍃 Relaxed"], (selected) => {
        currentMood = selected.replace(/[^\w\s]/gi, '').trim().toLowerCase();
        appendMessage(`I'm feeling ${selected}`, "user-msg");
        setTimeout(askLanguage, 500);
    });
}

function askLanguage() {
    appendMessage("Got it. Select your preferred musical language territory:", "bot-msg");
    createOptionChips(["🇮🇳 Hindi", "🇬🇧 English", "🚜 Punjabi"], (selected) => {
        currentLang = selected.replace(/[^\w\s]/gi, '').trim().toLowerCase();
        appendMessage(`Let's go with ${selected}`, "user-msg");
        setTimeout(askEra, 500);
    });
}

function askEra() {
    appendMessage("Awesome choice! Final touch: do you want classic timeless hits or fresh tracks?", "bot-msg");
    createOptionChips(["⏳ Old Era Classic", "🔥 New Era Hits"], (selected) => {
        const era = selected.includes("Old") ? "old" : "new";
        appendMessage(`Give me ${selected}`, "user-msg");
        renderTracks(era);
    });
}

function renderTracks(era) {
    const tracks = songDatabase[currentMood]?.[currentLang]?.[era];
    
    if (!tracks) {
        appendMessage("An issue occurred processing this matrix combination.", "bot-msg");
        return;
    }

    setTimeout(() => {
        let listHtml = `
            <div class="music-list-container">
                <p>🚀 <strong>Custom Matrix Recommendation Deck:</strong></p>
                <p style="font-size: 0.8rem; opacity: 0.8; margin-bottom: 8px;">Tap any track row to play/pause dynamically on-site:</p>
                <div class="track-rows">
        `;

        tracks.forEach((track) => {
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
            createOptionChips(["🔄 Change Vibe / Reset"], () => {
                audioPlayer.pause();
                startConversation();
            });
        }, 1500);
    }, 500);
}

function togglePlay(element, audioUrl) {
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
        document.querySelectorAll(".track-row").forEach(row => {
            row.classList.remove("playing");
            row.querySelector(".play-icon").innerText = "▶️";
        });

        audioPlayer.src = audioUrl;
        audioPlayer.play();
        element.querySelector(".play-icon").innerText = "⏸️";
        element.classList.add("playing");
    }
}

// Handlers for manual typed parsing fallback
function handleMessage() {
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;
    appendMessage(userInput.value, "user-msg");
    userInput.value = "";
    
    if (text.includes("happy")) { currentMood = "happy"; askLanguage(); }
    else if (text.includes("sad")) { currentMood = "sad"; askLanguage(); }
    else if (text.includes("energetic")) { currentMood = "energetic"; askLanguage(); }
    else if (text.includes("relax")) { currentMood = "relaxed"; askLanguage(); }
    else {
        appendMessage("Try interacting with the dynamic option options to explore the full library matrix!", "bot-msg");
    }
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
