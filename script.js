// High-Scale Database mapped to exact YouTube Track IDs for seamless background streaming
const songDatabase = {
    happy: {
        hindi: {
            old: [
                { title: "Khaike Pan Banaras Wala", artist: "Kishore Kumar", id: "7b979929373" },
                { title: "Zindagi Ek Safar Hai Suhana", artist: "Kishore Kumar", id: "4a01be95fae" }
            ],
            new: [
                { title: "Ilahi (YJHD)", artist: "Arijit Singh", id: "a49057b52fa" },
                { title: "Proper Patola", artist: "Diljit Dosanjh", id: "c338df37fbf" }
            ]
        },
        english: {
            old: [
                { title: "Stayin' Alive", artist: "Bee Gees", id: "28bf96f5b38" },
                { title: "Don't Stop Me Now", artist: "Queen", id: "8e3c66f6455" }
            ],
            new: [
                { title: "Happy", artist: "Pharrell Williams", id: "55e81541efc" },
                { title: "Uptown Funk", artist: "Bruno Mars", id: "cb20bbbb169" }
            ]
        },
        punjabi: {
            old: [
                { title: "Tunak Tunak Tun", artist: "Daler Mehndi", id: "f5beef3b554" },
                { title: "Mundian To Bach Ke", artist: "Panjabi MC", id: "0d16d3f2140" }
            ],
            new: [
                { title: "High Rated Gabru", artist: "Guru Randhawa", id: "21bc18214fa" },
                { title: "Brown Munde", artist: "AP Dhillon", id: "3dbf9e9e647" }
            ]
        }
    },
    sad: {
        hindi: {
            old: [
                { title: "Kabhi Kabhie Mere Dil Mein", artist: "Mukesh", id: "fc297ac72be" },
                { title: "Chingari Koi Bhadke", artist: "Kishore Kumar", id: "8bcbdb10867" }
            ],
            new: [
                { title: "Channa Mereya", artist: "Arijit Singh", id: "3710375f2ff" },
                { title: "Tum Hi Ho", artist: "Arijit Singh", id: "6400aa81306" }
            ]
        },
        english: {
            old: [
                { title: "Yesterday", artist: "The Beatles", id: "44d17e763f1" },
                { title: "Tears in Heaven", artist: "Eric Clapton", id: "7689df967c9" }
            ],
            new: [
                { title: "Someone Like You", artist: "Adele", id: "580c36cbee4" },
                { title: "Someone You Loved", artist: "Lewis Capaldi", id: "b40dee046f8" }
            ]
        },
        punjabi: {
            old: [
                { title: "Challa", artist: "Gurdas Maan", id: "e523e80801e" },
                { title: "Khali Dil Nahi", artist: "Amrinder Gill", id: "bf1f2f8155d" }
            ],
            new: [
                { title: "Excuses", artist: "AP Dhillon", id: "0896616ea34" },
                { title: "The Last Ride", artist: "Sidhu Moose Wala", id: "4ec5d1b7a3c" }
            ]
        }
    },
    energetic: {
        hindi: {
            old: [
                { title: "Chak De India Title", artist: "Sukhwinder Singh", id: "c41fa16ad4c" },
                { title: "Zinda (Bhaag Milkha Bhaag)", artist: "Siddharth Mahadevan", id: "cc62ca4f37d" }
            ],
            new: [
                { title: "Malhari", artist: "Vishal Dadlani", id: "21dfb85be92" },
                { title: "Apna Time Aayega", artist: "Ranveer Singh", id: "b5061803138" }
            ]
        },
        english: {
            old: [
                { title: "Eye of the Tiger", artist: "Survivor", id: "9757270eee0" },
                { title: "Lose Yourself", artist: "Eminem", id: "ca870c53b0b" }
            ],
            new: [
                { title: "Blinding Lights", artist: "The Weeknd", id: "be83884ccb6" },
                { title: "Believer", artist: "Imagine Dragons", id: "9197bc09906" }
            ]
        },
        punjabi: {
            old: [
                { title: "Mitran De Boot", artist: "Jazzy B", id: "21df0cbd13c" },
                { title: "Das Ja", artist: "DJ Sanj", id: "34089454e69" }
            ],
            new: [
                { title: "We Rollin", artist: "Shubh", id: "0ed9bd4fa21" },
                { title: "GOAT", artist: "Diljit Dosanjh", id: "fe537dbf643" }
            ]
        }
    },
    relaxed: {
        hindi: {
            old: [
                { title: "Dooba Dooba Silk Route", artist: "Mohit Chauhan", id: "103938ea8b4" },
                { title: "O Sanam", artist: "Lucky Ali", id: "647449fcb8e" }
            ],
            new: [
                { title: "cold/mess", artist: "Prateek Kuhad", id: "6556a59b134" },
                { title: "Kasoor", artist: "Prateek Kuhad", id: "06f37a5067e" }
            ]
        },
        english: {
            old: [
                { title: "Come Away With Me", artist: "Norah Jones", id: "281d179602e" },
                { title: "Wonderful Tonight", artist: "Eric Clapton", id: "f583b27bb46" }
            ],
            new: [
                { title: "Ocean Eyes", artist: "Billie Eilish", id: "5a885408466" },
                { title: "Perfect", artist: "Ed Sheeran", id: "8eebbbdab6f" }
            ]
        },
        punjabi: {
            old: [
                { title: "Wanga", artist: "Amrinder Gill", id: "7ec38c4c3e6" },
                { title: "Yaarian", artist: "Amrinder Gill", id: "bff435923e2" }
            ],
            new: [
                { title: "Waalian", artist: "Harnoor", id: "b6c62fa35b3" },
                { title: "Chan Sitare", artist: "Ammy Virk", id: "c3d05cb9b8d" }
            ]
        }
    }
};

let currentMood = "";
let currentLang = "";
let activeTrackId = null;

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Create dynamic invisible player stream iframe
const bgPlayer = document.createElement("iframe");
bgPlayer.id = "hidden-youtube-stream";
bgPlayer.style.display = "none";
document.body.appendChild(bgPlayer);

window.onload = () => {
    startConversation();
};

function startConversation() {
    appendMessage("Welcome back! What vibe or mood are you running with right now?", "bot-msg");
    createOptionChips(["😊 Happy", "😢 Sad", "⚡ Energetic", "🍃 Relaxed"], (selected) => {
        currentMood = selected.replace(/[^\w\s]/gi, '').trim().toLowerCase();
        appendMessage(`I'm feeling ${selected}`, "user-msg");
        setTimeout(askLanguage, 500);
    });
}

function askLanguage() {
    appendMessage("Select your preferred musical territory:", "bot-msg");
    createOptionChips(["🇮🇳 Hindi", "🇬🇧 English", "🚜 Punjabi"], (selected) => {
        currentLang = selected.replace(/[^\w\s]/gi, '').trim().toLowerCase();
        appendMessage(`Let's go with ${selected}`, "user-msg");
        setTimeout(askEra, 500);
    });
}

function askEra() {
    appendMessage("Final touch: do you want classic timeless hits or fresh tracks?", "bot-msg");
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
                <p style="font-size: 0.8rem; opacity: 0.8; margin-bottom: 8px;">Tap any track row to stream background music instantly:</p>
                <div class="track-rows">
        `;

        tracks.forEach((track) => {
            listHtml += `
                <div class="track-row" data-id="${track.id}" onclick="togglePlay(this, '${track.id}')">
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
                bgPlayer.src = ""; // Kill stream
                activeTrackId = null;
                startConversation();
            });
        }, 1500);
    }, 500);
}

function togglePlay(element, trackId) {
    if (activeTrackId === trackId) {
        // Toggle stop if tapping current active row
        bgPlayer.src = "";
        activeTrackId = null;
        element.querySelector(".play-icon").innerText = "▶️";
        element.classList.remove("playing");
    } else {
        // Clean old states
        document.querySelectorAll(".track-row").forEach(row => {
            row.classList.remove("playing");
            row.querySelector(".play-icon").innerText = "▶️";
        });

        // Fire new stream using specialized auto-engaging stream strings
        activeTrackId = trackId;
        bgPlayer.src = `https://www.youtube.com/embed/${trackId}?autoplay=1&enablejsapi=1&controls=0`;
        element.querySelector(".play-icon").innerText = "⏸️";
        element.classList.add("playing");
    }
}

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
        appendMessage("Try interacting with the options to explore the full library matrix!", "bot-msg");
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
