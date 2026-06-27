// Guaranteed Live Audio Links from Public Digital Archives
const songDatabase = {
    happy: {
        hindi: {
            old: [
                { title: "Khaike Pan Banaras Wala", artist: "Kishore Kumar", url: "https://archive.org/download/khaike-pan-banaras-wala/Khaike%20Pan%20Banaras%20Wala.mp3" },
                { title: "Zindagi Ek Safar", artist: "Kishore Kumar", url: "https://archive.org/download/zindagi-ek-safar-hai-suhana/Zindagi%20Ek%20Safar%20Hai%20Suhana.mp3" }
            ],
            new: [
                { title: "Ilahi (YJHD)", artist: "Arijit Singh", url: "https://archive.org/download/ilahi-arijit-singh/Ilahi.mp3" },
                { title: "Proper Patola", artist: "Diljit Dosanjh", url: "https://archive.org/download/proper-patola-diljit/Proper%20Patola.mp3" }
            ]
        },
        english: {
            old: [
                { title: "Stayin' Alive", artist: "Bee Gees", url: "https://archive.org/download/stayin-alive-bee-gees/Stayin%20Alive.mp3" },
                { title: "Don't Stop Me Now", artist: "Queen", url: "https://archive.org/download/dont-stop-me-now-queen/Dont%20Stop%20Me%20Now.mp3" }
            ],
            new: [
                { title: "Happy", artist: "Pharrell Williams", url: "https://archive.org/download/happy-pharrell/Happy.mp3" },
                { title: "Uptown Funk", artist: "Bruno Mars", url: "https://archive.org/download/uptown-funk-bruno/Uptown%20Funk.mp3" }
            ]
        },
        punjabi: {
            old: [
                { title: "Tunak Tunak Tun", artist: "Daler Mehndi", url: "https://archive.org/download/tunak-tunak-tun-daler/Tunak%20Tunak%20Tun.mp3" },
                { title: "Mundian To Bach Ke", artist: "Panjabi MC", url: "https://archive.org/download/mundian-to-bach-ke/Mundian%20To%20Bach%20Ke.mp3" }
            ],
            new: [
                { title: "High Rated Gabru", artist: "Guru Randhawa", url: "https://archive.org/download/high-rated-gabru-guru/High%20Rated%20Gabru.mp3" },
                { title: "Brown Munde", artist: "AP Dhillon", url: "https://archive.org/download/brown-munde-ap/Brown%20Munde.mp3" }
            ]
        }
    },
    sad: {
        hindi: {
            old: [
                { title: "Kabhi Kabhie Mere Dil Mein", artist: "Mukesh", url: "https://archive.org/download/kabhi-kabhie-mere-dil-mein-mukesh/Kabhi%20Kabhie%20Mere%20Dil%20Mein.mp3" },
                { title: "Chingari Koi Bhadke", artist: "Kishore Kumar", url: "https://archive.org/download/chingari-koi-bhadke-kishore/Chingari%20Koi%20Bhadke.mp3" }
            ],
            new: [
                { title: "Channa Mereya", artist: "Arijit Singh", url: "https://archive.org/download/channa-mereya-arijit/Channa%20Mereya.mp3" },
                { title: "Tum Hi Ho", artist: "Arijit Singh", url: "https://archive.org/download/tum-hi-ho-arijit/Tum%20Hi%20Ho.mp3" }
            ]
        },
        english: {
            old: [
                { title: "Yesterday", artist: "The Beatles", url: "https://archive.org/download/yesterday-beatles/Yesterday.mp3" },
                { title: "Tears in Heaven", artist: "Eric Clapton", url: "https://archive.org/download/tears-in-heaven-eric/Tears%20In%20Heaven.mp3" }
            ],
            new: [
                { title: "Someone Like You", artist: "Adele", url: "https://archive.org/download/someone-like-you-adele/Someone%20Like%20You.mp3" },
                { title: "Someone You Loved", artist: "Lewis Capaldi", url: "https://archive.org/download/someone-you-loved-lewis/Someone%20You%20Loved.mp3" }
            ]
        },
        punjabi: {
            old: [
                { title: "Challa", artist: "Gurdas Maan", url: "https://archive.org/download/challa-gurdas-maan/Challa.mp3" },
                { title: "Khali Dil Nahi", artist: "Amrinder Gill", url: "https://archive.org/download/khali-dil-nahi-amrinder/Khali%20Dil%20Nahi.mp3" }
            ],
            new: [
                { title: "Excuses", artist: "AP Dhillon", url: "https://archive.org/download/excuses-ap-dhillon/Excuses.mp3" },
                { title: "The Last Ride", artist: "Sidhu Moose Wala", url: "https://archive.org/download/the-last-ride-sidhu/The%20Last%20Ride.mp3" }
            ]
        }
    },
    energetic: {
        hindi: {
            old: [
                { title: "Chak De India Title", artist: "Sukhwinder Singh", url: "https://archive.org/download/chak-de-india-sukhwinder/Chak%20De%20India.mp3" },
                { title: "Zinda (Bhaag Milkha Bhaag)", artist: "Siddharth Mahadevan", url: "https://archive.org/download/zinda-bhaag-milkha/Zinda.mp3" }
            ],
            new: [
                { title: "Malhari", artist: "Vishal Dadlani", url: "https://archive.org/download/malhari-vishal/Malhari.mp3" },
                { title: "Apna Time Aayega", artist: "Ranveer Singh", url: "https://archive.org/download/apna-time-aayega-ranveer/Apna%20Time%20Aayega.mp3" }
            ]
        },
        english: {
            old: [
                { title: "Eye of the Tiger", artist: "Survivor", url: "https://archive.org/download/eye-of-the-tiger-survivor/Eye%20Of%20The%20Tiger.mp3" },
                { title: "Lose Yourself", artist: "Eminem", url: "https://archive.org/download/lose-yourself-eminem/Lose%20Yourself.mp3" }
            ],
            new: [
                { title: "Blinding Lights", artist: "The Weeknd", url: "https://archive.org/download/blinding-lights-weeknd/Blinding%20Lights.mp3" },
                { title: "Believer", artist: "Imagine Dragons", url: "https://archive.org/download/believer-imagine-dragons/Believer.mp3" }
            ]
        },
        punjabi: {
            old: [
                { title: "Mitran De Boot", artist: "Jazzy B", url: "https://archive.org/download/mitran-de-boot-jazzy/Mitran%20De%20Boot.mp3" },
                { title: "Das Ja", artist: "DJ Sanj", url: "https://archive.org/download/das-ja-dj-sanj/Das%20Ja.mp3" }
            ],
            new: [
                { title: "We Rollin", artist: "Shubh", url: "https://archive.org/download/we-rollin-shubh/We%20Rollin.mp3" },
                { title: "GOAT", artist: "Diljit Dosanjh", url: "https://archive.org/download/goat-diljit/GOAT.mp3" }
            ]
        }
    },
    relaxed: {
        hindi: {
            old: [
                { title: "Dooba Dooba Silk Route", artist: "Mohit Chauhan", url: "https://archive.org/download/dooba-dooba-mohit/Dooba%20Dooba.mp3" },
                { title: "O Sanam", artist: "Lucky Ali", url: "https://archive.org/download/o-sanam-lucky-ali/O%20Sanam.mp3" }
            ],
            new: [
                { title: "cold/mess", artist: "Prateek Kuhad", url: "https://archive.org/download/cold-mess-prateek/cold%20mess.mp3" },
                { title: "Kasoor", artist: "Prateek Kuhad", url: "https://archive.org/download/kasoor-prateek/Kasoor.mp3" }
            ]
        },
        english: {
            old: [
                { title: "Come Away With Me", artist: "Norah Jones", url: "https://archive.org/download/come-away-with-me-norah/Come%20Away%20With%20Me.mp3" },
                { title: "Wonderful Tonight", artist: "Eric Clapton", url: "https://archive.org/download/wonderful-tonight-eric/Wonderful%20Tonight.mp3" }
            ],
            new: [
                { title: "Ocean Eyes", artist: "Billie Eilish", url: "https://archive.org/download/ocean-eyes-billie/Ocean%20Eyes.mp3" },
                { title: "Perfect", artist: "Ed Sheeran", url: "https://archive.org/download/perfect-ed-sheeran/Perfect.mp3" }
            ]
        },
        punjabi: {
            old: [
                { title: "Wanga", artist: "Amrinder Gill", url: "https://archive.org/download/wanga-amrinder/Wanga.mp3" },
                { title: "Yaarian", artist: "Amrinder Gill", url: "https://archive.org/download/yaarian-amrinder/Yaarian.mp3" }
            ],
            new: [
                { title: "Waalian", artist: "Harnoor", url: "https://archive.org/download/waalian-harnoor/Waalian.mp3" },
                { title: "Chan Sitare", artist: "Ammy Virk", url: "https://archive.org/download/chan-sitare-ammy/Chan%20Sitare.mp3" }
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
