"use strict";

const btnGenerate = document.querySelector(".btn-container");
const adviceId = document.getElementById("advice-id");
const adviceContent = document.querySelector(".advice");

const generateQuote = ()=>{
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(json =>{
        adviceId.innerText = json.slip.id;
        adviceContent.innerText = json.slip.advice;
    })
}

btnGenerate.addEventListener("click",()=>{
    generateQuote();
})

generateQuote();

