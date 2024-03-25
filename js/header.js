// This script is for making a mobile-compatible collabsible header

// For opening and closing the mobile nav menu
window.onload = function () {

  const menu_button = document.querySelector('.hamburger');
  const navMobile = document.querySelector('.nav-mobile');

  menu_button.addEventListener('click', function() {
    menu_button.classList.toggle('is-active');
    navMobile.classList.toggle('is-active');
  });
}


// Mobile / Desktop Conversion
const navDesktop = document.querySelector('.nav-desktop');
const navMobile = document.querySelector('.nav-mobile');
const navContent = navDesktop.innerHTML;
navMobile.innerHTML = navContent;


//
//function transferNavLinks() {
//  const windowWidth = window.innerWidth;

//  if (windowWidth < 1024) {
    // Transfer content to mobile navbar
//    navMobile.innerHTML = navContent;
//    navDesktop.innerHTML = '';
//  } else {
    // Restore content to desktop navbar
//    navDesktop.innerHTML = navContent;
//    navMobile.innerHTML = '';
//  }
//}

// Initial call
//transferNavLinks();

// Event listener for window resize
//window.addEventListener('resize', transferNavLinks);



//let navContent = document.querySelector(".nav-desktop").innerHTML;
//let navDesktop = document.querySelector('.nav-desktop');
//let navMobile = document.querySelector('.nav-mobile');

//navMobile.innerHTML = navContent;


//function transferNavLinks() {
//  const windowWidth = window.innerWidth;
//  navDesktop.innerHTML = "";
//  navMobile.innerHTML = "";

//  console.log(windowWidth);
//  if (windowWidth < 1024) {
//    navMobile.innerHTML = navContent;
//  } else {
//    navDesktop.innerHTML = navContent;
//  }
//}

// Initial call
//transferNavLinks();

// Event listener for window resize
//window.addEventListener('resize', transferNavLinks);