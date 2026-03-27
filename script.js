function toggleSidebar(){
document.getElementById("sidebar").classList.toggle("collapsed");
}

function toggleChat(){
document.getElementById("chatBox").classList.toggle("open");
}

function sendMessage(){

const input = document.getElementById("chatInput");
const msg = input.value;

if(!msg) return;

const chat = document.getElementById("chatMessages");

/* show message */
const div = document.createElement("div");
div.className = "user-msg";
div.innerText = msg;
chat.appendChild(div);

/* send to webhook */
fetch("https://discord.com/api/webhooks/1486913651712724992/nK_fkyLouoC1FXHeLKXIH_XyBjSI_2k5RzcILzOcNpW38khjkqpqctAQtKz-v6RKLyog", {
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
content: "Support Message: " + msg
})
});

input.value = "";
chat.scrollTop = chat.scrollHeight;
}
