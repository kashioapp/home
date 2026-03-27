let supportOnline = false; // 🔥 CHANGE THIS

function toggleSidebar(){
document.getElementById("sidebar").classList.toggle("collapsed");
}

function toggleChat(){
document.getElementById("chat").classList.toggle("open");
updateStatus();
}

function updateStatus(){
const status = document.getElementById("chatStatus");

if(supportOnline){
status.innerText = "Status: Online";
} else {
status.innerText = "Status: Offline (contact@kashioapp.com)";
}
}

function sendMsg(){

const input = document.getElementById("msgInput");
const text = input.value;
if(!text) return;

const box = document.getElementById("chatMessages");

/* USER MSG */
const msg = document.createElement("div");
msg.className = "msg-user";
msg.innerText = text;
box.appendChild(msg);

/* SEND TO DISCORD */
fetch("YOUR_WEBHOOK_HERE", {
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
content:"Support Message: " + text
})
});

/* AUTO RESPONSE */
const bot = document.createElement("div");
bot.className = "msg-bot";

if(supportOnline){
bot.innerText = "Support will reply soon.";
} else {
bot.innerText = "Support offline. Email contact@kashioapp.com";
}

box.appendChild(bot);

input.value = "";
box.scrollTop = box.scrollHeight;
}
