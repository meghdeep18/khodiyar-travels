var cursor = document.querySelector('.cursor');
var main = document.querySelector('.main');
var videos = document.querySelectorAll('video');
var images = document.querySelectorAll('img');
var rows = document.querySelectorAll('.page5 .row');
var navElements = document.querySelectorAll('#nav h4');
var navhover = document.querySelector('#nav-hover');
var navhoverH1 = document.querySelectorAll('#nav-hover h1');
var scrollIcon = document.querySelector('.icon-scroll');


function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
init();


document.addEventListener('mousemove', function(e){
    cursor.style.left = e.x + 'px';
    cursor.style.top = e.y + 'px';


    cursor.animate({
        left: `${e.x}px`,
        top: `${e.y}px`
    },{duration: 1500, fill: "forwards"})
});


    

//------------------ cursor effect on videos ------------------>
function cursorOnVideo(video, text1, text2){
    cursor.classList.add('cursor-active');
    if(video.muted ){
        cursor.innerHTML = text1;
    }
    else{
        cursor.innerHTML = text2;
    }
}

videos.forEach((video) => {
    video.addEventListener('mousemove', function(){
        cursorOnVideo(video, "sound on", "sound off");
    })
});

videos.forEach((video) => {
    video.addEventListener('mouseenter', function(){
        cursorOnVideo(video, "sound on", "sound off");
    })
});

videos.forEach((video) => {
    video.addEventListener('click', function(){
        video.muted = !video.muted;
    })
});

videos.forEach((video) => {
    video.addEventListener('mouseleave', function(){
        cursor.classList.remove('cursor-active');
        cursor.innerHTML = "";
    });
});


//------------------ cursor effect on images ------------------>

function cursorOnImages(text){
    cursor.classList.add('cursor-active');
    cursor.innerHTML = "view";
}

images.forEach((img, idx) => {
    if(idx==0) return;
    img.addEventListener('mouseenter', function(){
        cursorOnImages("view");
        img.style.filter = "blur(2px)";
    })
});

images.forEach((img) => {
    img.addEventListener('mouseleave', function(){
        cursor.classList.remove('cursor-active');
        cursor.innerHTML = "";
        img.style.filter = "blur(0px)"
    });
});


//------------------------cursor effect on rows--------------------->

const preloadedImages = []; // Array to store preloaded images

// Preload the images and store them in the array
rows.forEach((row) => {
    const img = new Image();
    img.onload = () => {
        preloadedImages.push(img); // Add the loaded image to the array
    };
    img.src = row.dataset.image;
});


function cursorOnRows(img){
    cursor.classList.add('cursor-blend');
    cursor.classList.add('cursor-img');
    // cursor.style.backgroundImage = `url(${img.src})`;
    cursor.appendChild(img);
}

rows.forEach((row, index) => {
    if(index == 0){
        return;
    }
    row.addEventListener('mouseenter', function(){
        cursorOnRows(preloadedImages[index - 1]); // Use the preloaded image from the array
    })  
});

rows.forEach((row) => {
    row.addEventListener('mouseleave', function(){
        cursor.classList.remove('cursor-blend');
        cursor.classList.remove('cursor-img');
        // cursor.style.backgroundImage = "";
        cursor.innerHTML = "";
    });
});


//------------------------cursor effect on nav--------------------->

navElements.forEach((element, idx) => {
    if(idx == 0) return;

    element.addEventListener('mouseenter', function(){
        navhoverH1.forEach((h1) => {
            h1.innerHTML = "&nbsp;"+element.innerHTML+"  "+element.innerHTML+"  "+element.innerHTML+"  "+element.innerHTML+"  "+element.innerHTML;
        })
        navhover.style.display = "block";
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
    })
});

document.querySelector('#nav').addEventListener('mouseleave', function(){
    navhover.style.display = "none";
    cursor.style.transform = "translate(-50%, -5    0%) scale(1)";
})


document.querySelector(".lower h1").addEventListener("mouseenter", function(){
    cursor.style.transform = "translate(-50%, -50%) scale(3)";
})
document.querySelector("#nav #circle").addEventListener("mouseenter", function(){
    cursor.style.transform = "translate(-50%, -50%) scale(3)";
})
document.querySelector(".lower h1").addEventListener("mouseleave", function(){
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
});






// -----------------Magnetic effect-------------->
// write an effect on which the element will move towards the cursor when the cursor is near it

function magneticEffect( element, distance){
    var x = element.getBoundingClientRect().x;
    var y = element.getBoundingClientRect().y;
    var width = element.getBoundingClientRect().width;
    var height = element.getBoundingClientRect().height;

    var cursorX = cursor.getBoundingClientRect().x;
    var cursorY = cursor.getBoundingClientRect().y;

    var distanceX = cursorX - (x + width/2);
    var distanceY = cursorY - (y + height/2);

    if(distanceX < 0){
        distanceX = -distanceX;
    }
    if(distanceY < 0){
        distanceY = -distanceY;
    }

    var x = cursorX - x - width/2;
    var y = cursorY - y - height/2;

    if(distanceX < distance && distanceY < distance){
        element.style.transform = `translate(${x/2}px, ${y/2}px)`;
        element.children[0].style.transform = `translate(${x/11}px, ${y/11}px)`;
        element.classList.add('focus');
        cursor.style.opacity = "0";
    }
    else if(element.classList.contains('focus')){
        //make it bounce a little and then return to its original state
        element.children[0].style.transform = `translate(0px, 0px)`;
        cursor.style.opacity = "1";
        element.classList.remove('focus');

        //bouncing animation
        var bounce = gsap.timeline();
        bounce.to(element, {
            x: -x/3,
            y: -y/3,
            linear: true,
            duration: 0.2,
        })
        bounce.to(element, {
            x: x/4,
            y: y/4,
            linear: true,
            duration: 0.2,
        })
        bounce.to(element, {
            x: 0,
            y: 0,
            linear: true,
            duration: 0.1,
        })

        //--------------also move text---------------
        var bounceText = gsap.timeline();
        let text = element.children[0];

        bounceText.to(text, {
            x: -x/14,
            y: -y/14,
            linear: true,
            duration: 0.2,
        })
        bounceText.to(text, {
            x: x/20,
            y: y/20,
            linear: true,
            duration: 0.2,
        })
        bounceText.to(text, {
            x: 0,
            y: 0,
            linear: true,
            duration: 0.1,
        })

    }
}

document.addEventListener('mousemove', function(e){
    magneticEffect(document.querySelector('.footer .circle'), 100);
})


//------------------Animations------------------>
function anim(){

    gsap.to(scrollIcon, {
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "top -2%",
            end: "top -5%",
            scrub: 2,
        },
        opacity: 0,
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            start: "top 33%",
            end: "top -30%",
            scrub: 3,
        }
    })


    tl.to(".page1 h1", {
        x:-170,
        filter: "blur(4px)"
        
    }, "start")
    

    tl.to(".page1 h2", {
        x:170,
        filter: "blur(4px)"
    }, "start")

    tl.to(".page1 video", {
        width: "99%",
    }, "start")


    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            start: "top -120%",
            end: "top -135%",
            scrub: 3,
        }
    })

    tl2.to(".main", {
        backgroundColor: "#fff",
        color: "#0000",
    })



    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3 h1",
            scroller: ".main",
            start: "top -25%",
            end: "top -35%",
            scrub: 3,
        }
    })

    tl3.from(".img1", {
        x: -100,
    }, "start")

    tl3.from(".img2", {
        x: 100,
    }, "start")


    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4",
            scroller: ".main",
            start: "top 50%",
            end: "top 45%",
            scrub: 3,
        }
    })

    tl4.to(".main", {
        backgroundColor: "#111",
        color:"#fff",
    })


    // <--------------------Animations at start_------------------>

    var atStart = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "top 0%",
            end: "top 1%",
        }
    })

    gsap.from([".page1 h1", ".page1 h2"], {
        rotate: "4deg",
        y: 20,
        duration: 1,
    })

}

anim();



function magneticEffect( element, distance){
    var x = element.getBoundingClientRect().x;
    var y = element.getBoundingClientRect().y;
    var width = element.getBoundingClientRect().width;
    var height = element.getBoundingClientRect().height;

    var cursorX = cursor.getBoundingClientRect().x;
    var cursorY = cursor.getBoundingClientRect().y;

    var distanceX = cursorX - (x + width/2);
    var distanceY = cursorY - (y + height/2);

    if(distanceX < 0){
        distanceX = -distanceX;
    }
    if(distanceY < 0){
        distanceY = -distanceY;
    }

    var x = cursorX - x - width/2;
    var y = cursorY - y - height/2;

    if(distanceX < distance && distanceY < distance){
        element.style.transform = `translate(${x/2}px, ${y/2}px)`;
        element.children[0].style.transform = `translate(${x/11}px, ${y/11}px)`;
        element.classList.add('focus');
        cursor.style.opacity = "0";
    }
    else if(element.classList.contains('focus')){
        //make it bounce a little and then return to its original state
        element.children[0].style.transform = `translate(0px, 0px)`;
        cursor.style.opacity = "1";
        element.classList.remove('focus');

        //bouncing animation
        var bounce = gsap.timeline();
        bounce.to(element, {
            x: -x/3,
            y: -y/3,
            linear: true,
            duration: 0.2,
        })
        bounce.to(element, {
            x: x/4,
            y: y/4,
            linear: true,
            duration: 0.2,
        })
        bounce.to(element, {
            x: 0,
            y: 0,
            linear: true,
            duration: 0.1,
        })

        //--------------also move text---------------
        var bounceText = gsap.timeline();
        let text = element.children[0];

        bounceText.to(text, {
            x: -x/14,
            y: -y/14,
            linear: true,
            duration: 0.2,
        })
        bounceText.to(text, {
            x: x/20,
            y: y/20,
            linear: true,
            duration: 0.2,
        })
        bounceText.to(text, {
            x: 0,
            y: 0,
            linear: true,
            duration: 0.1,
        })

    }
}

document.addEventListener('mousemove', function(e){
    magneticEffect(document.querySelector('#nav #circle'), 100);
})

var initialPath =`M 10 100 Q 500 100 1200 100` 

var finalPath = `M 10 100 Q 500 100 1200 100`

var string=document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path =`M 10 100 Q ${dets.x} ${dets.y} 1200 100`
    gsap.to("svg path",{
        attr: { d : path },
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    // path =`M 10 100 Q 500 ${dets.y} 999 100`
    gsap.to("svg path",{
        attr: {d:finalPath},
        duration:1,
        ease:"bounce.out"
    })
})
// 

const afkTime = 20000; // 5 seconds of inactivity
let timer = null;
let isAfk = false;

const scribbleEffect = document.querySelector('.scribble-effect');
const canvas = document.getElementById('scribbleCanvas');
const ctx = canvas.getContext('2d');

// Adjust canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Scribble animation
function startScribbleEffect() {
  isAfk = true;
  scribbleEffect.style.display = 'block';

  const elements = [];
  const emojis = ['😀', '✨', '🔥', '🌟', '🎉', '💖'];

  function drawRandomElement() {
    const elementType = Math.random();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 50 + 20;
    const lineWidth = Math.random() * 1.5 + 0.3;
    const color = `hsl(${Math.random() * 360}, 70%, 60%)`;

    if (elementType > 0.5) {
      // Scribble shape with random lines
      const numPoints = Math.floor(Math.random() * 15) + 5;
      const path = [];
      for (let i = 0; i < numPoints; i++) {
        const pointX = x + (Math.random() * size - size / 2);
        const pointY = y + (Math.random() * size - size / 2);
        path.push({ x: pointX, y: pointY });
      }
      elements.push({ type: 'scribble', path, lineWidth, color });
    } else {
      // Random emoji
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      elements.push({ type: 'emoji', emoji, x, y, size });
    }
  }

  function renderElements() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    elements.forEach((element) => {
      ctx.strokeStyle = element.color;
      ctx.fillStyle = element.color;
      ctx.lineWidth = element.lineWidth;

      if (element.type === 'scribble') {
        ctx.beginPath();
        ctx.moveTo(element.path[0].x, element.path[0].y);
        for (let i = 1; i < element.path.length; i++) {
          ctx.lineTo(element.path[i].x, element.path[i].y);
        }
        ctx.stroke();
      } else if (element.type === 'emoji') {
        ctx.font = `${element.size}px Arial`;
        ctx.fillText(element.emoji, element.x, element.y);
      }
    });
  }

  function clearWithDissolveEffect() {
    const dissolveInterval = setInterval(() => {
      elements.forEach((element) => {
        if (Math.random() < 0.1) {
          const index = elements.indexOf(element);
          if (index > -1) elements.splice(index, 1);
        }
      });
      renderElements();
      if (elements.length === 0) {
        clearInterval(dissolveInterval);
        scribbleEffect.style.display = 'none';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }, 50);
  }

  function animateScribble() {
    if (isAfk) {
      drawRandomElement();
      renderElements();
      requestAnimationFrame(animateScribble);
    }
  }

  animateScribble();

  // Stop effect on user activity
  function stopScribbleEffect() {
    isAfk = false;
    clearWithDissolveEffect();
    resetAfkTimer();
  }

  document.addEventListener('mousemove', stopScribbleEffect, { once: true });
  document.addEventListener('keydown', stopScribbleEffect, { once: true });
  document.addEventListener('touchstart', stopScribbleEffect, { once: true });
}

// AFK detection
function resetAfkTimer() {
  clearTimeout(timer);
  if (!isAfk) {
    timer = setTimeout(startScribbleEffect, afkTime);
  }
}

document.addEventListener('mousemove', resetAfkTimer);
document.addEventListener('keydown', resetAfkTimer);
document.addEventListener('touchstart', resetAfkTimer);

resetAfkTimer();
