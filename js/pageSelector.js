// This javascript function selects the active page of this website

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});