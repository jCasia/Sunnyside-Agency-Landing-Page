"use strict";

const navIcon = document.querySelector(".mobile-nav-toggle");
const navContent = document.querySelector(".mobile-nav-content");
const navLinks = document.querySelectorAll(".mobile-nav-links");

navIcon.addEventListener("click", () => {
  gsap.fromTo(
    navLinks,
    { autoAlpha: 0, x: -100 },
    { autoAlpha: 1, x: 0, duration: 0.4, stagger: 0.1 }
  );

  if (navIcon.classList.contains("fa-bars")) {
    navIcon.classList.replace("fa-bars", "fa-xmark");
  } else if (navIcon.classList.contains("fa-xmark")) {
    navIcon.classList.replace("fa-xmark", "fa-bars");
  }
  navContent.classList.toggle("open");
});
