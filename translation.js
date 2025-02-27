// // ---------------- Multilingual Support ----------------

// // Translation object for different languages
// const translations = {
//     en: {
//       greeting: "Welcome to Khodiyar Travels!",
//       welcomeMessage: "Explore the world with us.",
//       learnMore: "Learn More",
//       // Add more keys as needed for additional content
//     },
//     fr: {
//       greeting: "Bienvenue chez Khodiyar Travels!",
//       welcomeMessage: "Explorez le monde avec nous.",
//       learnMore: "En savoir plus",
//       // Add more keys as needed for additional content
//     }
//   };
  
//   // Set default language to 'en'
//   let currentLang = 'en';
  
//   // Function to update content based on language
//   function updateContent(lang) {
//     document.querySelectorAll('[data-translate]').forEach(el => {
//       const key = el.getAttribute('data-translate');
//       el.textContent = translations[lang][key];
//     });
//   }
  
//   // Initialize page content with default language
//   updateContent(currentLang);
  
//   // Add event listeners for language buttons
//   const languageButtons = document.querySelectorAll('.language-selector button');
//   languageButtons.forEach(button => {
//     button.addEventListener('click', function() {
//       currentLang = this.getAttribute('data-lang');
//       updateContent(currentLang);
//       localStorage.setItem('preferredLanguage', currentLang); // Save preference
//     });
//   });
  
//   // On page load, check for preferred language
//   const savedLang = localStorage.getItem('preferredLanguage');
//   if (savedLang) {
//     currentLang = savedLang;
//     updateContent(currentLang);
//   }
  
//   // ---------------- End of Multilingual Support ----------------
  
  
//   // ---------------- Your Existing Code ----------------
  
//   // Initialize GSAP animations and Locomotive Scroll
//   function init() {
//       gsap.registerPlugin(ScrollTrigger);
  
//       const locoScroll = new LocomotiveScroll({
//           el: document.querySelector(".main"),
//           smooth: true
//       });
//       locoScroll.on("scroll", ScrollTrigger.update);
  
//       ScrollTrigger.scrollerProxy(".main", {
//           scrollTop(value) {
//               return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//           },
//           getBoundingClientRect() {
//               return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//           },
//           pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//       });
  
//       ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//       ScrollTrigger.refresh();
//   }
  
//   init();
  
//   // Your other JS logic here...
  