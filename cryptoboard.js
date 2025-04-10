// show or hide sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener('click', () => {
  sidebar.style.display = "block";
})
closeBtn.addEventListener('click', () => {
  sidebar.style.display = "none";
})

// Change theme 
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle('dark-theme');
  themeBtn.querySelector('ion-icon:first-child').classList.toggle('active');
  themeBtn.querySelector('ion-icon:last-child').classList.toggle('active');
})

// Switching in navigation
const navLinks = document.querySelectorAll("main aside .sidebar a");

navLinks.forEach(function(element){
  element.addEventListener("click", function(){
    navLinks.forEach((e) => {
      e.classList.remove('active');
      this.classList.add('active');
    })
  })
})