// Local Database with YouTube Embed URLs
const songDatabase = {
    happy: [
        { title: "Don't Start Now - Dua Lipa", embedUrl: "https://www.youtube.com/embed/oygrmJFKYZY" },
        { title: "Dynamite - BTS", embedUrl: "https://www.youtube.com/embed/gdZLi9oWNZg" },
        { title: "Happy - Pharrell Williams", embedUrl: "https://www.youtube.com/embed/ZbZSe6N_BXs" }
    ],
    sad: [
        { title: "Someone Like You - Adele", embedUrl: "https://www.youtube.com/embed/hLQl3WQQoQ0" },
        { title: "Fix You - Coldplay", embedUrl: "https://www.youtube.com/embed/k4V3Mo61fJM" },
        { title: "Stay - Rihanna", embedUrl: "https://www.youtube.com/embed/JF8BRnvnsR8" }
    ],
    energetic: [
        { title: "Blinding Lights - The Weeknd", embedUrl: "https://www.youtube.com/embed/4NRXx6U8ABQ" },
        { title: "Lose Yourself - Eminem", embedUrl: "https://www.youtube.com/embed/_Yhyp-_hK3Q" },
        { title: "Till I Collapse - Eminem", embedUrl: "https://www.youtube.com/embed/ytQ5CYE1VZw" }
    ],
    relaxed: [
        { title: "Weightless - Marconi Union", embedUrl: "https://www.youtube.com/embed/UfcAVejsvU0" },
        { title: "Strawberry Swing - Coldplay", embedUrl: "https://www.youtube.com/embed/isvXvHj5p3c" },
        { title: "Come Away With Me - Norah Jones", embedUrl: "https://www.youtube.com/embed/lbjZPfXFFuE" }
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
                        <iframe src="${randomSong.embedUrl}" allowfullscreen></iframe>
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
