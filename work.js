
// navElements.forEach((element, idx) => {
//     if(idx == 0) return;

//     element.addEventListener('mouseenter', function(){
//         navhoverH1.forEach((h1) => {
//             h1.innerHTML = "&nbsp;"+element.innerHTML+"  "+element.innerHTML+"  "+element.innerHTML+"  "+element.innerHTML+"  "+element.innerHTML;
//         })
//         navhover.style.display = "block";
//         cursor.style.transform = "translate(-50%, -50%) scale(2)";
//     })
// });

// document.querySelector('#nav').addEventListener('mouseleave', function(){
//     navhover.style.display = "none";
//     cursor.style.transform = "translate(-50%, -50%) scale(1)";
// })


// document.querySelector(".lower h1").addEventListener("mouseenter", function(){
//     cursor.style.transform = "translate(-50%, -50%) scale(3)";
// })
// document.querySelector("#nav #circle").addEventListener("mouseenter", function(){
//     cursor.style.transform = "translate(-50%, -50%) scale(3)";
// })
// document.querySelector(".lower h1").addEventListener("mouseleave", function(){
//     cursor.style.transform = "translate(-50%, -50%) scale(1)";
// });

// const preloadedImages = []; // Array to store preloaded images

// // Preload the images and store them in the array
// rows.forEach((row) => {
//     const img = new Image();
//     img.onload = () => {
//         preloadedImages.push(img); // Add the loaded image to the array
//     };
//     img.src = row.dataset.image;
// });


// function cursorOnRows(img){
//     cursor.classList.add('cursor-blend');
//     cursor.classList.add('cursor-img');
//     // cursor.style.backgroundImage = `url(${img.src})`;
//     cursor.appendChild(img);
// }

// rows.forEach((row, index) => {
//     if(index == 0){
//         return;
//     }
//     row.addEventListener('mouseenter', function(){
//         cursorOnRows(preloadedImages[index - 1]); // Use the preloaded image from the array
//     })  
// });

// rows.forEach((row) => {
//     row.addEventListener('mouseleave', function(){
//         cursor.classList.remove('cursor-blend');
//         cursor.classList.remove('cursor-img');
//         // cursor.style.backgroundImage = "";
//         cursor.innerHTML = "";
//     });
// });
// function init() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, 
//     getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });


//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();
// }
// init();


// document.addEventListener('mousemove', function(e){
//     cursor.style.left = e.x + 'px';
//     cursor.style.top = e.y + 'px';


//     cursor.animate({
//         left: `${e.x}px`,
//         top: `${e.y}px`
//     },{duration: 1500, fill: "forwards"})
// });


    

// //------------------ cursor effect on videos ------------------>
// function cursorOnVideo(video, text1, text2){
//     cursor.classList.add('cursor-active');
//     if(video.muted ){
//         cursor.innerHTML = text1;
//     }
//     else{
//         cursor.innerHTML = text2;
//     }
// }

// videos.forEach((video) => {
//     video.addEventListener('mousemove', function(){
//         cursorOnVideo(video, "sound on", "sound off");
//     })
// });

// videos.forEach((video) => {
//     video.addEventListener('mouseenter', function(){
//         cursorOnVideo(video, "sound on", "sound off");
//     })
// });

// videos.forEach((video) => {
//     video.addEventListener('click', function(){
//         video.muted = !video.muted;
//     })
// });

// videos.forEach((video) => {
//     video.addEventListener('mouseleave', function(){
//         cursor.classList.remove('cursor-active');
//         cursor.innerHTML = "";
//     });
// });


// //------------------ cursor effect on images ------------------>

// function cursorOnImages(text){
//     cursor.classList.add('cursor-active');
//     cursor.innerHTML = "view";
// }

// images.forEach((img, idx) => {
//     if(idx==0) return;
//     img.addEventListener('mouseenter', function(){
//         cursorOnImages("view");
//         img.style.filter = "blur(2px)";
//     })
// });

// images.forEach((img) => {
//     img.addEventListener('mouseleave', function(){
//         cursor.classList.remove('cursor-active');
//         cursor.innerHTML = "";
//         img.style.filter = "blur(0px)"
//     });
// });
// 
gsap.from(".hero-text h1", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".hero-text p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.3
});

gsap.from(".cta-btn", {
    opacity: 0,
    scale: 0.9,
    duration: 1.5,
    ease: "back.out(1.7)",
    delay: 0.6
});

gsap.from(".hero-image img", {
    opacity: 0,
    scale: 1.2,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.9
});


gsap.from(".elem h1", {
    scrollTrigger: ".elem",
    duration: 1.2,
    opacity: 0,
    y: 100,
    stagger: 0.3,
    ease: "power2.out"
});

gsap.from(".job", {
    scrollTrigger: ".job-listing",
    duration: 1.5,
    opacity: 0,
    y: 100,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".job", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#current-openings",
        start: "top 80%",
    }
});


gsap.from(".reason", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#why-work-with-us",
        start: "top 80%",
    }
});

// Select the neon cursor element
// GSAP Neon Cursor with Hover Effects
document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector('.custom-cursor');

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - cursor.offsetWidth / 2,
            y: e.clientY - cursor.offsetHeight / 2,
            ease: "power3.out",
            duration: 0.3
        });
    });

    // Hide cursor when not moving
    document.addEventListener('mouseleave', () => {
        cursor.classList.add('hidden');
    });
    document.addEventListener('mouseenter', () => {
        cursor.classList.remove('hidden');
    });

    // Hover effects on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .cta-btn');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-effect');
            gsap.to(cursor, { scale: 2, duration: 0.3 });
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-effect');
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    const sections = document.querySelectorAll("section");
  
    sections.forEach(section => {
      gsap.fromTo(section.querySelector(".content"), 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Starts the animation when the top of the section hits 80% of the viewport height
          end: "top 30%", // Ends the animation when the top of the section hits 30% of the viewport height
          toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
        }
      });
    });
  });
  gsap.fromTo(section.querySelectorAll(".content > *"), 
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "top 30%",
      toggleActions: "play none none reverse",
    }
  });

  

