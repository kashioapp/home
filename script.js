function toggleSidebar(){
const sidebar = document.getElementById("sidebar");
const logo = document.getElementById("logo");

sidebar.classList.toggle("collapsed");

if(sidebar.classList.contains("collapsed")){
logo.src = "./favicon.png";
} else {
logo.src = "./bannerlogo.png";
}
}

/* SEARCH TOGGLE */
function toggleSearch(){
const box = document.getElementById("searchBox");
box.classList.toggle("active");
}

/* CHAT */
function toggleChat(){
const chat = document.getElementById("chat");
chat.classList.toggle("open");

document.getElementById("chatStatus").innerText =
"Offline - contact@kashioapp.com";
}

/* SEND */
function sendMsg(){
const input = document.getElementById("msgInput");
if(!input.value) return;

const msg = document.createElement("div");
msg.innerText = input.value;

document.getElementById("chatMessages").appendChild(msg);

input.value="";
}
