document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#send").addEventListener("click", send);
    document.querySelector("#generate-random").addEventListener("click", generate);
});

let responses = [
    "Cieszę się",
    "Przykro mi z tego powodu",
    "Przykładowy tekst",
    "Jakaś wypowiedź",
    "Losowe słowa",
    "tekst tekst tekst tekst",
    "Odpowiedź Krzysztofa Łukasińskiego",
    "test1",
    "test2"
]

function send(){
    let message = document.querySelector(".message-jolka").cloneNode(true);
    let text = document.querySelector("#input-message").value;
    message.querySelector(".message-text").innerText = text
    let container = document.querySelector("#chat-container");
    container.appendChild(message).scrollIntoView()
}

function generate(){
    let message = document.querySelector(".message-krzysiek").cloneNode(true);
    let index = Math.floor(Math.random()*9); 
    let text = responses[index]
    message.querySelector(".message-text").innerText = text
    let container = document.querySelector("#chat-container");
    container.appendChild(message).scrollIntoView()
}