// GSAP Animations for Office Page
gsap.from(".hero-section h1", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".hero-section p", { opacity: 0, y: 50, duration: 1, delay: 1 });

gsap.from(".office-description", { opacity: 0, x: -100, duration: 1.5, delay: 0.5 });
gsap.from(".office-image", { opacity: 0, x: 100, duration: 1.5, delay: 0.5 });

gsap.from(".team-member", { opacity: 0, y: 50, stagger: 0.3, duration: 1, delay: 0.5 });
// GSAP Animations

// Hero Section Animation
gsap.from('.hero-section h1', {
    opacity: 0,
    y: -50,
    duration: 1.2,
    ease: 'power3.out'
  });
  
  gsap.from('.hero-section p', {
    opacity: 0,
    y: 50,
    delay: 0.3,
    duration: 1.2,
    ease: 'power3.out'
  });
  
  // About Section Animation
  gsap.from('.office-description', {
    scrollTrigger: {
      trigger: '.about-office',
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: 'power3.out'
  });
  
  gsap.from('.office-image img', {
    scrollTrigger: {
      trigger: '.about-office',
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
    opacity: 0,
    x: 100,
    duration: 1.5,
    ease: 'power3.out'
  });
  
  // Gallery Section Animation
  gsap.from('.gallery-container img', {
    scrollTrigger: {
      trigger: '.gallery-section',
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 1.5,
    ease: 'power3.out'
  });
  
  // Team Section Animation
  gsap.from('.team-member', {
    scrollTrigger: {
      trigger: '.team-section',
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
    opacity: 0,
    y: 100,
    stagger: 0.3,
    duration: 1.2,
    ease: 'power3.out'
  });
  
  // FAQ Toggle Animation
  document.querySelectorAll('.faq-item').forEach((faqItem) => {
    faqItem.querySelector('.faq-toggle').addEventListener('click', function() {
      const answer = faqItem.querySelector('.faq-answer');
      const isVisible = answer.style.display === 'block';
      answer.style.display = isVisible ? 'none' : 'block';
      this.textContent = isVisible ? '+' : '-';
      gsap.to(answer, {
        height: isVisible ? 0 : 'auto',
        duration: 0.5,
        ease: 'power3.out'
      });
    });
  });
  