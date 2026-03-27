function toggleSidebar(){
document.querySelector(".sidebar").classList.toggle("collapsed");
}

function toggleChat(){
document.querySelector(".chat-box").classList.toggle("open");
}

function sendMessage(){
const msg = document.getElementById("chatInput").value;

fetch("https://discord.com/api/webhooks/1486913651712724992/nK_fkyLouoC1FXHeLKXIH_XyBjSI_2k5RzcILzOcNpW38khjkqpqctAQtKz-v6RKLyog", {
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({content:msg})
});
}
