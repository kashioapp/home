let supportOnline = false;

/* SIDEBAR */
function toggleSidebar(){
document.getElementById("sidebar").classList.toggle("collapsed");
}

/* CHAT */
function toggleChat(){
document.getElementById("chat").classList.toggle("open");
updateStatus();
}

function updateStatus(){
const status = document.getElementById("chatStatus");

if(supportOnline){
status.innerText = "Status: Online";
} else {
status.innerText = "Offline - contact@kashioapp.com";
}
}

/* SEND MESSAGE */
function sendMsg(){

const input = document.getElementById("msgInput");
const text = input.value;
if(!text) return;

const box = document.getElementById("chatMessages");

/* USER */
const msg = document.createElement("div");
msg.className = "msg-user";
msg.innerText = text;
box.appendChild(msg);

/* DISCORD */
fetch("YOUR_WEBHOOK_HERE", {
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
content:"Support Message: " + text
})
});

/* BOT */
const bot = document.createElement("div");
bot.className = "msg-bot";

if(supportOnline){
bot.innerText = "Support will reply shortly.";
} else {
bot.innerText = "Support offline. Email us.";
}

box.appendChild(bot);

input.value="";
box.scrollTop = box.scrollHeight;
}
