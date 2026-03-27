function toggleSidebar(){
const sidebar = document.getElementById("sidebar");
const logo = document.getElementById("logo");

sidebar.classList.toggle("collapsed");

if(sidebar.classList.contains("collapsed")){
logo.src="favicon.png";
} else {
logo.src="bannerlogo.png";
}
}

/* SEARCH */
function toggleSearch(){
document.querySelector(".search-container").classList.toggle("active");
}

/* CHAT */
function toggleChat(){
document.getElementById("chat").classList.toggle("open");
}

/* SEND MESSAGE */
function sendMsg(){
const input = document.getElementById("msgInput");
if(!input.value) return;

const msg = document.createElement("div");
msg.innerText = input.value;

document.getElementById("chatMessages").appendChild(msg);
input.value="";
}
