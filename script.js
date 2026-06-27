// Simple Local Database of Songs Categorized by Mood
const songDatabase = {
    happy: [
        { title: "Don't Start Now - Dua Lipa", url: "https://www.youtube.com/watch?v=oygrmJFKYZY" },
        { title: "Dynamite - BTS", url: "https://www.youtube.com/watch?v=gdZLi9oWNZg" },
        { title: "Happy - Pharrell Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" }
    ],
    sad: [
        { title: "Someone Like You - Adele", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
        { title: "Fix You - Coldplay", url: "https://www.youtube.com/watch?v=k4V3Mo61fJM" },
        { title: "Stay - Rihanna", url: "https://www.youtube.com/watch?v=JF8BRnvnsR8" }
    ],
    energetic: [
        { title: "Blinding Lights - The Weeknd", url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
        { title: "Lose Yourself - Eminem", url: "https://www.youtube.com/watch?v=_Yhyp-_hK3Q" },
        { title: "Till I Collapse - Eminem", url: "https://www.youtube.com/watch?v=ytQ5CYE1VZw" }
    ],
    relaxed: [
        { title: "Weightless - Marconi Union", url: "https://www.youtube.com/watch?v=UfcAVejsvU0" },
        { title: "Strawberry Swing - Coldplay", url: "https://www.youtube.com/watch?v=isvXvHj5p3c" },
        { title: "Come Away With Me - Norah Jones", url: "https://www.youtube.com/watch?v=lbjZPfXFFuE" }
    ]
};

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Function to handle sending a message
function handleMessage() {
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;

    // 1. Display User Message
    appendMessage(userInput.value, "user-msg");
    userInput.value = "";

    // 2. Process Bot Response after a small delay (feels more natural)
    setTimeout(() => {
        let detectedMood = null;

        // Simple keyword matching
        if (text.includes("happy") || text.includes("joy") || text.includes("excited")) detectedMood = "happy";
        else if (text.includes("sad") || text.includes("cry") || text.includes("low")) detectedMood = "sad";
        else if (text.includes("energetic") || text.includes("gym") || text.includes("workout")) detectedMood = "energetic";
        else if (text.includes("relax") || text.includes("calm") || text.includes("sleep")) detectedMood = "relaxed";

        if (detectedMood) {
            const playlist = songDatabase[detectedMood];
            // Select a random song from the playlist
            const randomSong = playlist[Math.floor(Math.random() * playlist.length)];
            
            const botResponse = `I feel you. Here is a perfect song for your mood:<br>
            <strong>${randomSong.title}</strong><br>
            <a class="song-link" href="${randomSong.url}" target="_blank">▶️ Listen on YouTube</a>`;
            
            appendMessage(botResponse, "bot-msg");
        } else {
            appendMessage("I couldn't quite catch that mood. Try saying: Happy, Sad, Energetic, or Relaxed!", "bot-msg");
        }
    }, 600);
}

// Helper to add message to chat box
function appendMessage(htmlContent, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = htmlContent;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Event Listeners
sendBtn.addEventListener("click", handleMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleMessage();
});