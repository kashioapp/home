function toggleSidebar(){
const sidebar = document.getElementById("sidebar");
const logo = document.getElementById("logo");

sidebar.classList.toggle("collapsed");

if(sidebar.classList.contains("collapsed")){
logo.src="./favicon.png";
} else {
logo.src="./bannerlogo.png";
}
}

function toggleSearch(){
document.getElementById("searchWrap").classList.toggle("active");
}

function toggleChat(){
document.getElementById("chat").classList.toggle("open");
}

function sendMsg(){
let input = document.getElementById("msg");
if(!input.value) return;

let div = document.createElement("div");
div.innerText = input.value;

document.getElementById("messages").appendChild(div);

input.value="";
}

function go(page){
window.location.href = page;
}
