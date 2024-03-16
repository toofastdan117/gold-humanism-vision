// This script is for switching between English and Spanish forms


// Toggle button 
const toggle = document.querySelector(".toggle");

function animatedToggle() {
  toggle.classList.toggle("spanish");
  toggleText();
  interpreter();
  console.log("button pressed");
}


// Toggle text underline
const toggleEnglish = document.querySelector(".toggle-english");
const toggleSpanish = document.querySelector(".toggle-spanish");
toggleEnglish.classList.add("underline");

function toggleText() {
  if(toggle.classList.contains("spanish")) {
    toggleEnglish.classList.remove("underline");
    toggleSpanish.classList.add("underline");
  } else {
    toggleEnglish.classList.add("underline");
    toggleSpanish.classList.remove("underline");
  }
}


// Interpret website content in english or spanish
const contentEnglish = document.querySelector(".clinics-section-english");
const contentSpanish = document.querySelector(".clinics-section-spanish");
contentEnglish.classList.add("show");

function interpreter() {
  if(toggle.classList.contains("spanish")) {
    contentEnglish.classList.remove("show");
    contentSpanish.classList.add("show");
  } else {
    contentEnglish.classList.add("show");
    contentSpanish.classList.remove("show");
  }
}
