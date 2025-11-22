const message = document.getElementById("message");
const background = document.getElementById("background");

const quotes = ["Your smile is basically solar energy. Keep shining, bestie the world runs better when you’re glowing.", "It’s okay to feel low sometimes. Just breathe this moment won’t last forever.","You’re heated right now, and that’s valid. Take a second you deserve clarity, not chaos.", "Look at you, leveling up quietly. You should hype yourself more you earned this."];

const colors = ["bg-yellow-300", "bg-blue-400", "bg-red-400", "bg-purple-400"];

function getMood(num) {
    window.location.href = "/message.html?mood=" + encodeURIComponent(num);
}

function displayMessage() {
    const params = new URLSearchParams(window.location.search);
    const mood = params.get("mood");
    message.innerHTML = quotes[mood];
    background.classList.add(colors[mood]);
}