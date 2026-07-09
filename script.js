/* ==========================================================
   PORTFOLIO JAVASCRIPT
   Nava Neetha Prabhu Portfolio
========================================================== */

/* ===========================
   TYPING ANIMATION
=========================== */

const texts = [
    "Front-End Developer",
    "UI Designer",
    "JavaScript Developer",
    "Programmer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.getElementById("typed-text");

function typeEffect() {

    if (!typedText) return;

    const currentText = texts[textIndex];

    if (!isDeleting) {

        typedText.textContent = currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typedText.textContent = currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            textIndex = (textIndex + 1) % texts.length;
        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

window.addEventListener("load", typeEffect);

/* ===========================
   MOBILE MENU
=========================== */

const menu = document.querySelector(".navbar ul");

const openBtn = document.querySelector(".fa-bars");

const closeBtn = document.querySelector(".fa-times");

if (openBtn) {

    openBtn.addEventListener("click", () => {

        menu.classList.add("active");

    });

}

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        menu.classList.remove("active");

    });

}

document.querySelectorAll(".navbar ul li a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

/* ===========================
   STICKY NAVBAR
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(17,24,39,.92)";

        navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background = "rgba(17,24,39,.55)";

        navbar.style.boxShadow = "none";

    }

});

/* ===========================
   BACK TO TOP
=========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(

".fade-up"

);

function revealOnScroll() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ===========================
   GOOGLE SHEET FORM
=========================== */

const scriptURL =
'https://script.google.com/macros/s/AKfycby6Tpqig2sWpx6O1aYzLDTig9RyodP-A-OfDoXu9YhxCWI3oze104NWe7XmTSoh1ufF/exec';



const form = document.forms['submit-to-google-sheet'];

const msg = document.getElementById("msg");

if (form) {

form.addEventListener('submit', e => {

e.preventDefault();

fetch(scriptURL, {

method: 'POST',

body: new FormData(form)

})

.then(() => {

msg.innerHTML = "Message Sent Successfully ✔";

setTimeout(() => {

msg.innerHTML = "";

}, 4000);

form.reset();

})

.catch(() => {

msg.innerHTML = "Something went wrong.";

});

});

}

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

console.log("Portfolio Loaded Successfully 🚀");