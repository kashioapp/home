let supportOnline = false;

/* SIDEBAR */
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

/* SEARCH */
function toggleSearch(){
document.getElementById("searchBox").classList.toggle("active");
}

/* CHAT */
function toggleChat(){
const chat = document.getElementById("chat");
chat.classList.toggle("open");

const status = document.getElementById("chatStatus");

if(supportOnline){
status.innerText = "Online";
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

const msg = document.createElement("div");
msg.innerText = text;
box.appendChild(msg);

input.value="";
}
