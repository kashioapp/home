// LOADER (LONGER + SMOOTH)
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 800);
    }, 2500); // LONGER LOADING
});

// NAV FIX
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.style.background = window.scrollY > 50 
        ? "rgba(0,0,0,0.9)" 
        : "rgba(0,0,0,0.4)";
});

// PROMO SYSTEM
function redeemCode() {
    const input = document.getElementById("promoInput").value;
    const result = document.getElementById("promoResult");

    if (input === "KASHIO10") {
        result.innerText = "+10% XP BOOST ACTIVATED";
        result.style.color = "#00ff99";
    } else {
        result.innerText = "Invalid code";
        result.style.color = "red";
    }
}

// CHAT TOGGLE
function toggleChat() {
    const chat = document.getElementById("chatBox");
    chat.classList.toggle("open");
}

// SEND MESSAGE (DISCORD WEBHOOK)
function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value;

    if (!msg) return;

    fetch("YOUR_DISCORD_WEBHOOK_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content: "New Support Message: " + msg
        })
    });

    document.getElementById("chatMessages").innerHTML += `
        <div class="user-msg">${msg}</div>
    `;

    input.value = "";
}
