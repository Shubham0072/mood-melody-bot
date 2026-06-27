// Local Database with YouTube Embed URLs
// Local Database with SoundCloud Embed Player URLs
const songDatabase = {
    happy: [
        { title: "Surfaces - Sunday Best", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/561707259&color=%231db954&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" },
        { title: "Pharrell Williams - Happy", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125345700&color=%231db954&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" }
    ],
    sad: [
        { title: "Coldplay - Fix You", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/114144415&color=%231db954&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" },
        { title: "Passenger - Let Her Go", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/92224734&color=%231db954&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" }
    ],
    energetic: [
        { title: "The Weeknd - Blinding Lights", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/720364906&color=%231db954&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" },
        { title: "Eminem - Till I Collapse", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/17234320&color=%231db954&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" }
    ],
    relaxed: [
        { title: "Marconi Union - Weightless", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/33894236&color=%231db954&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" },
        { title: "Norah Jones - Come Away With Me", embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/246473179&color=%231db954&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" }
    ]
};
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function handleMessage() {
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;

    // 1. Display User Message
    appendMessage(userInput.value, "user-msg");
    userInput.value = "";

    // 2. Process Bot Response
    setTimeout(() => {
        let detectedMood = null;

        if (text.includes("happy") || text.includes("joy") || text.includes("excited")) detectedMood = "happy";
        else if (text.includes("sad") || text.includes("cry") || text.includes("low")) detectedMood = "sad";
        else if (text.includes("energetic") || text.includes("gym") || text.includes("workout")) detectedMood = "energetic";
        else if (text.includes("relax") || text.includes("calm") || text.includes("sleep")) detectedMood = "relaxed";

        if (detectedMood) {
            const playlist = songDatabase[detectedMood];
            const randomSong = playlist[Math.floor(Math.random() * playlist.length)];
            
            // Generate the embedded iframe layout instead of just a text link
            const botResponse = `
                <div class="bot-recommendation">
                    <p>I feel you. Here is a song for your mood:</p>
                    <strong>${randomSong.title}</strong>
                    <div class="video-wrapper">
                        // Replace the old iframe line in script.js with this one:
                        <iframe src="${randomSong.embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            `;
            
            appendMessage(botResponse, "bot-msg");
        } else {
            appendMessage("I couldn't quite catch that mood. Try saying: Happy, Sad, Energetic, or Relaxed!", "bot-msg");
        }
    }, 600);
}

function appendMessage(htmlContent, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = htmlContent;
    chatBox.appendChild(messageDiv);
    
    // Smooth scrolling down when new video pops up
    setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 100);
}

sendBtn.addEventListener("click", handleMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleMessage();
});
