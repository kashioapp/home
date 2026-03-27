// LOADING SCREEN
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }, 1200);
});

// NAV SCROLL EFFECT
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.8)";
    } else {
        nav.style.background = "rgba(0,0,0,0.4)";
    }
});

// PROMO CODE
function redeemCode() {
    const input = document.getElementById("promoInput").value;
    const result = document.getElementById("promoResult");

    if (input.toLowerCase() === "kashio10") {
        result.innerText = "Code applied: +10% boost!";
        result.style.color = "#00ff99";
    } else {
        result.innerText = "Invalid code.";
        result.style.color = "red";
    }
}

// CHAT TOGGLE
function toggleChat() {
    const chat = document.getElementById("chatBox");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
}