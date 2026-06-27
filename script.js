// 100% Live Open-Access Original Track Previews (CORS Unblocked)
const songDatabase = {
    happy: {
        hindi: {
            old: [
                { title: "Khaike Pan Banaras Wala", artist: "Kishore Kumar", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7b/97/99/7b979929-3733-dc19-4591-628f237f3747/mzaf_16156710433290684124.plus.aac.p.m4a" },
                { title: "Zindagi Ek Safar Hai Suhana", artist: "Kishore Kumar", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4a/01/be/4a01be95-fae2-63b7-7eb1-c9186b160cf2/mzaf_15783300898517260538.plus.aac.p.m4a" }
            ],
            new: [
                { title: "Ilahi (YJHD)", artist: "Arijit Singh", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a4/90/57/a49057b5-2fa7-7a8e-cf02-18151f7b0558/mzaf_10521404179339396328.plus.aac.p.m4a" },
                { title: "Proper Patola", artist: "Diljit Dosanjh", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c3/38/df/c338df37-fbf4-747f-85f0-629ee7b39912/mzaf_4091646272551528628.plus.aac.p.m4a" }
            ]
        },
        english: {
            old: [
                { title: "Stayin' Alive", artist: "Bee Gees", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/28/bf/96/28bf96f5-b384-93ff-f604-037000d027e1/mzaf_14620023812239634288.plus.aac.p.m4a" },
                { title: "Don't Stop Me Now", artist: "Queen", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/8e/3c/66/8e3c66f6-455b-f111-92ea-297d09618f5f/mzaf_11306788577366367568.plus.aac.p.m4a" }
            ],
            new: [
                { title: "Happy", artist: "Pharrell Williams", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/55/e8/15/55e81541-efc8-9ff1-d5b9-1f061f09d84c/mzaf_15099395015383569527.plus.aac.p.m4a" },
                { title: "Uptown Funk", artist: "Bruno Mars", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cb/20/bb/cb20bbbb-169b-3a7a-6b22-83561633cd88/mzaf_3681533927592476007.plus.aac.p.m4a" }
            ]
        },
        punjabi: {
            old: [
                { title: "Tunak Tunak Tun", artist: "Daler Mehndi", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f5/be/ef/f5beef3b-5544-2f22-441f-508bf29239eb/mzaf_11270258169134110300.plus.aac.p.m4a" },
                { title: "Mundian To Bach Ke", artist: "Panjabi MC", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0d/16/d3/0d16d3f2-140b-71a2-581d-e59392e276be/mzaf_14457618991782292440.plus.aac.p.m4a" }
            ],
            new: [
                { title: "High Rated Gabru", artist: "Guru Randhawa", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/21/bc/18/21bc1821-4fa3-5e92-f0b0-a50e97bbd985/mzaf_6017758788410260492.plus.aac.p.m4a" },
                { title: "Brown Munde", artist: "AP Dhillon", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/3d/bf/9e/3dbf9e9e-6472-e1cb-7d1a-47fa39bf0f94/mzaf_15784949575814510714.plus.aac.p.m4a" }
            ]
        }
    },
    sad: {
        hindi: {
            old: [
                { title: "Kabhi Kabhie Mere Dil Mein", artist: "Mukesh", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/fc/29/7a/fc297ac7-2be2-263a-2337-ee77e68fa707/mzaf_18115668612711311029.plus.aac.p.m4a" },
                { title: "Chingari Koi Bhadke", artist: "Kishore Kumar", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8b/cb/db/8bcbdb10-8671-55db-17f1-58dc18b8aa83/mzaf_12683074351608670150.plus.aac.p.m4a" }
            ],
            new: [
                { title: "Channa Mereya", artist: "Arijit Singh", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/37/10/37/3710375f-2ffb-144f-c75c-e5bc418a09fe/mzaf_472491143891461966.plus.aac.p.m4a" },
                { title: "Tum Hi Ho", artist: "Arijit Singh", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/64/00/aa/6400aa81-3069-b5fe-520e-b7eec988be02/mzaf_16315848261314631677.plus.aac.p.m4a" }
            ]
        },
        english: {
            old: [
                { title: "Yesterday", artist: "The Beatles", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/44/d1/7e/44d17e76-3f1a-b6d3-be68-a4773c38cfdb/mzaf_11303273111867140409.plus.aac.p.m4a" },
                { title: "Tears in Heaven", artist: "Eric Clapton", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/76/89/df/7689df96-7c9b-6d5b-9d4f-3721e7d8d21b/mzaf_2086438061483868212.plus.aac.p.m4a" }
            ],
            new: [
                { title: "Someone Like You", artist: "Adele", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/58/0c/36/580c36cb-ee48-7359-59eb-35c911fa4d0b/mzaf_13812836262445037624.plus.aac.p.m4a" },
                { title: "Someone You Loved", artist: "Lewis Capaldi", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b4/0d/ee/b40dee04-6f81-bd6d-bfda-995c64bf2761/mzaf_15077229787126102148.plus.aac.p.m4a" }
            ]
        },
        punjabi: {
            old: [
                { title: "Challa", artist: "Gurdas Maan", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e5/23/e8/e523e808-01e4-3992-75d1-16474fb236e7/mzaf_4727192667355027581.plus.aac.p.m4a" },
                { title: "Khali Dil Nahi", artist: "Amrinder Gill", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bf/1f/2f/bf1f2f81-55d6-d082-ffb7-7ebfe3825838/mzaf_5888206126620543632.plus.aac.p.m4a" }
            ],
            new: [
                { title: "Excuses", artist: "AP Dhillon", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/08/96/61/0896616e-a342-6e2c-4ec7-b89694e77372/mzaf_482613143494796335.plus.aac.p.m4a" },
                { title: "The Last Ride", artist: "Sidhu Moose Wala", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4e/c5/d1/4ec5d1b7-a3ca-79ef-4bf2-37887265be79/mzaf_3338308882208077589.plus.aac.p.m4a" }
            ]
        }
    },
    energetic: {
        hindi: {
            old: [
                { title: "Chak De India Title", artist: "Sukhwinder Singh", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c4/1f/a1/c41fa16a-d4c3-b430-c3d5-e63d332d73f4/mzaf_3807567784305886361.plus.aac.p.m4a" },
                { title: "Zinda (Bhaag Milkha Bhaag)", artist: "Siddharth Mahadevan", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cc/62/ca/cc62ca4f-37db-312f-65b1-12c5b96796da/mzaf_5601177651088497645.plus.aac.p.m4a" }
            ],
            new: [
                { title: "Malhari", artist: "Vishal Dadlani", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/21/df/b8/21dfb85b-e925-546d-3f04-9a4f4efb718f/mzaf_4905380590059345484.plus.aac.p.m4a" },
                { title: "Apna Time Aayega", artist: "Ranveer Singh", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b5/06/18/b5061803-138e-0158-b617-6b4df3cb9ca1/mzaf_4141639739433285196.plus.aac.p.m4a" }
            ]
        },
        english: {
            old: [
                { title: "Eye of the Tiger", artist: "Survivor", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/97/57/27/9757270e-ee08-e047-97d8-8ec0970a2d48/mzaf_14099411993439401774.plus.aac.p.m4a" },
                { title: "Lose Yourself", artist: "Eminem", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ca/87/0c/ca870c53-b0bf-2e4a-935f-2fc286be62b7/mzaf_13506140838189811440.plus.aac.p.m4a" }
            ],
            new: [
                { title: "Blinding Lights", artist: "The Weeknd", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/be/83/88/be83884c-cb61-75fb-cb9e-561b369c7625/mzaf_7889345097448839077.plus.aac.p.m4a" },
                { title: "Believer", artist: "Imagine Dragons", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/91/97/bc/9197bc09-9060-e4aa-278a-c45479f64bf7/mzaf_659021655070267233.plus.aac.p.m4a" }
            ]
        },
        punjabi: {
            old: [
                { title: "Mitran De Boot", artist: "Jazzy B", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/21/df/0c/21df0cbd-13c5-926f-4fb0-b79e27c191a4/mzaf_12401673323030248496.plus.aac.p.m4a" },
                { title: "Das Ja", artist: "DJ Sanj", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/34/08/94/34089454-e69c-297e-1282-e877e8ca372e/mzaf_8496464817454992928.plus.aac.p.m4a" }
            ],
            new: [
                { title: "We Rollin", artist: "Shubh", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0e/d9/bd/0ed9bd4f-a212-be90-7f2a-e889d1b09b6c/mzaf_17202306764516390141.plus.aac.p.m4a" },
                { title: "GOAT", artist: "Diljit Dosanjh", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fe/53/7d/fe537dbf-6435-0810-72ee-c1005fbc0879/mzaf_6380629555122709230.plus.aac.p.m4a" }
            ]
        }
    },
    relaxed: {
        hindi: {
            old: [
                { title: "Dooba Dooba Silk Route", artist: "Mohit Chauhan", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/10/39/38/103938ea-8b43-2287-c580-0a256dfeb947/mzaf_3748261373516087541.plus.aac.p.m4a" },
                { title: "O Sanam", artist: "Lucky Ali", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/64/74/49/647449fc-b8e7-c872-dd3a-0e9e9db69e71/mzaf_5527339846175960410.plus.aac.p.m4a" }
            ],
            new: [
                { title: "cold/mess", artist: "Prateek Kuhad", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/65/56/a5/6556a59b-134d-17e9-a4cc-db0e8cc067ef/mzaf_4724286650428945648.plus.aac.p.m4a" },
                { title: "Kasoor", artist: "Prateek Kuhad", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/06/f3/7a/06f37a50-67eb-0797-2a4c-d65be8e25d48/mzaf_10022069273618306915.plus.aac.p.m4a" }
            ]
        },
        english: {
            old: [
                { title: "Come Away With Me", artist: "Norah Jones", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/28/1d/17/281d1796-02e0-f1c5-8f64-42ea952d7ee6/mzaf_14959196323146430310.plus.aac.p.m4a" },
                { title: "Wonderful Tonight", artist: "Eric Clapton", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f5/83/b2/f583b27b-b463-b24a-df28-1b777a412853/mzaf_13504104251433946059.plus.aac.p.m4a" }
            ],
            new: [
                { title: "Ocean Eyes", artist: "Billie Eilish", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/88/54/5a885408-466d-1bf2-bbca-0684f47ddbb2/mzaf_12411516049386766746.plus.aac.p.m4a" },
                { title: "Perfect", artist: "Ed Sheeran", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/8e/eb/bb/8eebbbda-b6fa-90fa-1e5b-3023023fb293/mzaf_2825595304917711467.plus.aac.p.m4a" }
            ]
        },
        punjabi: {
            old: [
                { title: "Wanga", artist: "Amrinder Gill", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/7e/c3/8c/7ec38c4c-3e61-a53d-dc9d-9cfc5264b967/mzaf_5316139430154823293.plus.aac.p.m4a" },
                { title: "Yaarian", artist: "Amrinder Gill", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bf/f4/35/bff43592-3e28-ca0e-4389-9eb10aefce75/mzaf_16314811985440713753.plus.aac.p.m4a" }
            ],
            new: [
                { title: "Waalian", artist: "Harnoor", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/b6/c6/2f/b6c62fa3-5b32-9c3a-7db1-6d7350cb444e/mzaf_12891398867375990263.plus.aac.p.m4a" },
                { title: "Chan Sitare", artist: "Ammy Virk", url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c3/d0/5c/c3d05cb9-b8d9-247f-859a-dfca6f6345fc/mzaf_14493397941093120198.plus.aac.p.m4a" }
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
