// Initialize Lucide Icons
lucide.createIcons();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Hero Animations
const heroTl = gsap.timeline();

heroTl.from('.fade-in', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

heroTl.from('.shape', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    stagger: 0.1,
    ease: 'elastic.out(1, 0.5)'
}, '-=1');

// Scroll Animations
gsap.utils.toArray('.fade-up').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});

gsap.from('.feature-visual', {
    scrollTrigger: {
        trigger: '.features',
        start: 'top 60%',
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
});

// CTA Scale Effect
gsap.from('.fade-scale', {
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 70%',
    },
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

// Image Fallback Logic
document.querySelectorAll('.img-placeholder').forEach(div => {
    const imgUrl = div.getAttribute('data-img');
    const initial = div.getAttribute('data-initial');
    
    // Create a new image object to test loading
    const img = new Image();
    img.src = imgUrl;
    
    img.onload = () => {
        // If image loads successfully, set it as background
        div.style.backgroundImage = `url('${imgUrl}')`;
        div.innerHTML = ''; // Remove initial
    };
    
    img.onerror = () => {
        // If fails, keep the background color and show initial
        div.innerText = initial;
    };
});

// Mobile Menu Toggle (Simple implementation)
const mobileBtn = document.querySelector('.mobile-menu-btn');
// We'd add a mobile menu container in HTML and toggle it here
// keeping it simple for this demo script
mobileBtn.addEventListener('click', () => {
    alert('Mobile menu would open here!');
});

