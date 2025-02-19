document.addEventListener('DOMContentLoaded', () => {
    // GSAP animation for the container
    gsap.from('.container', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // GSAP animations for left section elements
    gsap.from('.left-section > *', {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5
    });

    // GSAP animations for form elements
    gsap.from('.form-group', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5
    });

    gsap.from('.submit-btn', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.3
    });
})
    // // Floating label effect
    // const inputs = document.querySelectorAll('input, textarea');
    // inputs.forEach(input => {
    //     input.addEventListener('focus', () => {
    //         input.parentNode.classList.add('focused');
    //     });
    //     input.addEventListener('blur', () => {
    //         if (input