// ======================================
// Smooth Scrolling
// ======================================

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ======================================
// Reveal Animation
// ======================================

const revealElements = document.querySelectorAll(

    ".glass, .project-card, section h2"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});

// ======================================
// Navbar Background
// ======================================

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("nav-scrolled");

    }

    else{

        navbar.classList.remove("nav-scrolled");

    }

});

// ======================================
// Hero Parallax
// ======================================

const hero = document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    if(window.innerWidth < 900) return;

    const x = (e.clientX/window.innerWidth-.5)*20;

    const y = (e.clientY/window.innerHeight-.5)*20;

    hero.style.transform =

        `translate(${x}px,${y}px)`;

});

// ======================================
// Active Navigation
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href") == "#" + current

        ){

            link.classList.add("active");

        }

    });

});

// ======================================
// Button Hover Glow
// ======================================

document.querySelectorAll(".primary,.secondary,.project-button")

.forEach(button=>{

    button.addEventListener("mousemove",e=>{

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        button.style.setProperty("--x",x+"px");

        button.style.setProperty("--y",y+"px");

    });

});