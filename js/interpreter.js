// This script is for switching between English and Spanish forms


// Toggle button 
const toggle = document.querySelector(".toggle");

function animatedToggle() {
  toggle.classList.toggle("switch");
  toggleText();
  interpreter();
  console.log("button pressed");
}


// Toggle text underline
const toggleEnglish = document.querySelector(".toggle-english");
const toggleSpanish = document.querySelector(".toggle-spanish");
toggleEnglish.classList.add("underline");

function toggleText() {
  if(toggle.classList.contains("switch")) {
    toggleEnglish.classList.remove("underline");
    toggleSpanish.classList.add("underline");
  } else {
    toggleEnglish.classList.add("underline");
    toggleSpanish.classList.remove("underline");
  }
}


// Interpret website content in english or spanish
const contentEnglish = document.querySelectorAll(".english");
const contentSpanish = document.querySelectorAll(".spanish");
contentEnglish.forEach(element => {
  element.classList.add("show");
})

function interpreter() {
  if(toggle.classList.contains("switch")) {
    contentEnglish.forEach(element => {
      element.classList.remove("show");
    })
    contentSpanish.forEach(element => {
      element.classList.add("show");
    })
  } else {
    contentEnglish.forEach(element => {
      element.classList.add("show");
    })
    contentSpanish.forEach(element => {
      element.classList.remove("show");
    })
  }
}

