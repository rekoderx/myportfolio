// Parallax effect on the SVG shapes on the homepage background
// document.addEventListener("mousemove", parallax);
// function parallax(e) {
//   this.querySelectorAll(".shape").forEach((layer) => {
//     const speed = layer.getAttribute("data-speed");

//     const x = (window.innerWidth - e.pageX * speed) / 100;
//     const y = (window.innerHeight - e.pageY * speed) / 100;

//     layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }

// BURGER MENU ANIMATION
function closeButton() {
  let linkItem = Array.from(document.querySelectorAll(".nav-links li a"));
  const menuBtn = document.querySelector(".menu__btn");
  const navLinks = document.querySelector(".nav-links");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      navLinks.classList.add("nav-active");
      linkItem.forEach((item) => {
        item.addEventListener("click", () => {
          menuBtn.classList.remove("open");
          navLinks.classList.remove("nav-active");
          menuOpen = false;
        });
      });
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      navLinks.classList.remove("nav-active");
      menuOpen = false;
    }
  });
}
closeButton();

// PRELOADER ANIMATION
const preloader = document.querySelector(".preloader");
console.log(preloader);
setTimeout(() => {
  preloader.classList.add("vanish");
}, 2500);

// *************************************
// HOME PAGE ANIMATION WITH GSAP
// *************************************
// HERO TEXT ANIMATION
gsap.from(".hero-container .element", {
  x: "-150%",
  duration: 0.5,
  stagger: 0.1,
  delay: 2.5,
});

// // TOP HEADER MENU ANIMATION
gsap.from("nav", {
  y: "-200%",
  duration: 0.5,
  delay: 2.5,
});
// // CTA BUTTON ANIMATION
gsap.from(".hero-container .button", { opacity: 0, duration: 1.5, delay: 3 });

// // SoMe LINKS ANIMATION
gsap.from(".hero-container .social-media", {
  x: "100%",
  duration: 0.5,
  delay: 2.5,
});
gsap.from(".hero-container .social-media .link", {
  x: "100%",
  duration: 1,
  delay: 2.5,
  stagger: 0.2,
});
// SCROLLDOWN ANIMATION
gsap.from(".scrolldown", {
  y: "100%",
  duration: 1,
  delay: 2.5,
});

// *************************************
// ABOUT PAGE ANIMATION WITH GSAP
// *************************************
let tl_about = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutme-heading-container .aboutme img",
    start: "top bottom",
  },
});

tl_about.from(".aboutme-heading-container .heading-container__title", {
  x: "-100%",
  opacity: 0,
  duration: 1,
});

tl_about.from(
  ".aboutme-heading-container .heading-container__background",
  {
    x: "-100%",
    opacity: 0,
    duration: 1,
  },
  "-=0.8"
);

tl_about.from(
  ".aboutme-heading-container .aboutme .element",
  {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  },
  "-=0.9"
);

// MY SKILLS ANIMATION
let tl_skills = gsap.timeline({
  scrollTrigger: {
    trigger: ".myskills-heading-container",
    start: "center bottom",
  },
});

tl_skills.from(".myskills-heading-container .heading-container__title", {
  x: "-100%",
  opacity: 0,
  duration: 1,
});

tl_skills.from(
  ".myskills-heading-container .heading-container__background",
  {
    x: "-100%",
    opacity: 0,
    duration: 1,
  },
  "-=0.8"
);
tl_skills.from(
  ".myskills-heading-container .skills .element",
  {
    y: "100%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  },
  "-=0.8"
);

// FLASH STORY ANIMATION
let tl_flashstory = gsap.timeline({
  scrollTrigger: {
    trigger: ".flashstory-heading-container",
    start: "center bottom",
  },
});

tl_flashstory.from(".flashstory-heading-container .heading-container__title", {
  x: "-100%",
  opacity: 0,
  duration: 1,
});

tl_flashstory.from(
  ".flashstory-heading-container .heading-container__background",
  {
    x: "-100%",
    opacity: 0,
    duration: 1,
  },
  "-=0.8"
);
tl_flashstory.from(
  ".flashstory-heading-container .element",
  {
    y: "100%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  },
  "-=0.8"
);

// THINGS I'VE BUILT ANIMATION
let tl_projects1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".webapp-card",
    start: "top bottom",
  },
});

tl_projects1.from(".webapp-card", {
  y: "100%",
  opacity: 0,
  duration: 1,
});

gsap.from(".webapp-card .element", {
  y: "-200%",
  duration: 1,
  stagger: 0.2,
  // delay: 1,
});

let tl_projects2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".nailsandlashes",
    start: "top bottom",
  },
});

tl_projects2.from(".nailsandlashes", {
  y: "100%",
  opacity: 0,
  duration: 1,
});

gsap.from(".nailsandlashes .element", {
  y: "-200%",
  duration: 1,
  stagger: 0.2,
  // delay: 1,
});

let tl_projects3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".bose-card",
    start: "top bottom",
  },
});

tl_projects3.from(".bose-card", {
  y: "100%",
  opacity: 0,
  duration: 1,
});

gsap.from(".bose-card .element", {
  y: "-200%",
  duration: 1,
  stagger: 0.2,
  // delay: 1,
});

let tl_projects4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mobile-first-card",
    start: "top bottom",
  },
});

tl_projects4.from(".mobile-first-card", {
  y: "100%",
  opacity: 0,
  duration: 1,
});

gsap.from(".mobile-first-card.element", {
  y: "-200%",
  duration: 1,
  stagger: 0.2,
  // delay: 1,
});

let tl_projects5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".traveling-card",
    start: "top bottom",
  },
});

tl_projects5.from(".traveling-card", {
  y: "100%",
  opacity: 0,
  duration: 1,
});

gsap.from(".traveling-card .element", {
  y: "-200%",
  duration: 1,
  stagger: 0.2,
  // delay: 1,
});
