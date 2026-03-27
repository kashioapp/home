function toggleSidebar(){
document.getElementById("sidebar").classList.toggle("collapsed");
}

function toggleSearch(){
document.getElementById("searchBox").classList.toggle("active");
}

function toggleChat(){
document.getElementById("chat").classList.toggle("open");

document.getElementById("chatStatus").innerText =
"Offline - contact@kashioapp.com";
}

function sendMsg(){
const input = document.getElementById("msgInput");
if(!input.value) return;

const msg = document.createElement("div");
msg.innerText = input.value;

document.getElementById("chatMessages").appendChild(msg);

input.value="";
}
