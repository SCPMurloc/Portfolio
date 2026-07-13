//////////////////////////////////////////////////////////////
// Gameplay Programmer Portfolio
// script.js
//////////////////////////////////////////////////////////////


/* =========================
   CUSTOM CURSOR
   ========================= */

const cursor = document.getElementById("cursor");

if(cursor){

    document.addEventListener("mousemove",(e)=>{

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });


    const hoverElements =
        document.querySelectorAll(
            "a, button, .project, .skill, .timeline-item"
        );


    hoverElements.forEach(element=>{

        element.addEventListener(
            "mouseenter",
            ()=>{

                cursor.classList.add(
                    "cursor-hover"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            ()=>{

                cursor.classList.remove(
                    "cursor-hover"
                );

            }
        );

    });

}



/* =========================
   HERO PARTICLE CANVAS
   ========================= */

const canvas =
    document.getElementById(
        "hero-canvas"
    );


if(canvas){

    const ctx =
        canvas.getContext("2d");


    let width;
    let height;


    let particles=[];


    function resize(){

        width =
            canvas.width =
            window.innerWidth;


        height =
            canvas.height =
            window.innerHeight;

    }


    window.addEventListener(
        "resize",
        resize
    );


    resize();



    class Particle{

        constructor(){

            this.x =
                Math.random()*width;


            this.y =
                Math.random()*height;


            this.size =
                Math.random()*2+0.5;


            this.speedX =
                (Math.random()-.5)*0.4;


            this.speedY =
                (Math.random()-.5)*0.4;


            this.alpha =
                Math.random()*.5+.1;

        }


        update(){

            this.x += this.speedX;

            this.y += this.speedY;


            if(this.x < 0)
                this.x = width;


            if(this.x > width)
                this.x = 0;


            if(this.y < 0)
                this.y = height;


            if(this.y > height)
                this.y = 0;

        }


        draw(){

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI*2
            );


            ctx.fillStyle =
                `rgba(67,229,255,${this.alpha})`;


            ctx.fill();

        }

    }



    function createParticles(){

        particles=[];


        const amount =
            Math.min(
                120,
                window.innerWidth/8
            );


        for(
            let i=0;
            i<amount;
            i++
        ){

            particles.push(
                new Particle()
            );

        }

    }


    createParticles();


    function connectParticles(){

        for(
            let a=0;
            a<particles.length;
            a++
        ){

            for(
                let b=a;
                b<particles.length;
                b++
            ){

                const dx =
                    particles[a].x -
                    particles[b].x;


                const dy =
                    particles[a].y -
                    particles[b].y;


                const distance =
                    Math.sqrt(
                        dx*dx+
                        dy*dy
                    );


                if(distance < 120){

                    ctx.beginPath();


                    ctx.strokeStyle =
                    `rgba(
                        67,
                        229,
                        255,
                        ${0.08-distance/1500}
                    )`;


                    ctx.lineWidth=.5;


                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );


                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );


                    ctx.stroke();

                }

            }

        }

    }



    function animate(){

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        particles.forEach(
            particle=>{

                particle.update();

                particle.draw();

            }
        );


        connectParticles();


        requestAnimationFrame(
            animate
        );

    }


    animate();

}



/* =========================
   SCROLL REVEAL
   ========================= */


const revealElements =
    document.querySelectorAll(
        "section, .project, .skill, .timeline-item"
    );


revealElements.forEach(
    element=>{

        element.classList.add(
            "reveal"
        );

    }
);



const observer =
    new IntersectionObserver(
        entries=>{

            entries.forEach(
                entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add(
                            "active"
                        );

                    }

                }
            );

        },
        {
            threshold:.15
        }
    );



revealElements.forEach(
    element=>{

        observer.observe(
            element
        );

    }
);




/* =========================
   TERMINAL TEXT EFFECT
   ========================= */


const terminal =
    document.querySelector(
        ".terminal pre"
    );


if(terminal){

    const original =
        terminal.innerHTML;


    terminal.innerHTML="";


    let index=0;


    function type(){

        if(index <
            original.length
        ){

            terminal.innerHTML +=
                original[index];


            index++;


            setTimeout(
                type,
                18
            );

        }

    }


    setTimeout(
        type,
        800
    );

}



/* =========================
   ACTIVE NAVIGATION
   ========================= */


const sections =
    document.querySelectorAll(
        "section"
    );


const navLinks =
    document.querySelectorAll(
        "nav a"
    );



window.addEventListener(
    "scroll",
    ()=>{


        let current="";


        sections.forEach(
            section=>{


                const top =
                    section.offsetTop - 200;


                if(
                    scrollY >= top
                ){

                    current =
                    section.id;

                }


            }
        );



        navLinks.forEach(
            link=>{

                link.style.color =
                    "";


                if(
                    link.getAttribute("href")
                    === "#"+current
                ){

                    link.style.color =
                        "#43E5FF";

                }

            }
        );


    }
);



/* =========================
   PAGE LOAD EFFECT
   ========================= */


window.addEventListener(
    "load",
    ()=>{

        document.body.classList.add(
            "loaded"
        );

    }
);