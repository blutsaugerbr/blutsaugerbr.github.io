// Smooth scroll to section
function scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Lazy load videos
const videos = document.querySelectorAll('.lazy-video');

const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const iframe = entry.target;
            const src = iframe.getAttribute('data-src');
            
            if (src) {
                iframe.setAttribute('src', src);
                iframe.removeAttribute('data-src');
                observer.unobserve(iframe);
            }
        }
    });
}, {
    rootMargin: '50px'
});

videos.forEach(video => {
    videoObserver.observe(video);
});

// Fade in sections on scroll
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = '0';
    sectionObserver.observe(section);
});

// Add scroll effect to navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Mobile menu toggle (if needed in future)
document.addEventListener('DOMContentLoaded', () => {
    // Preload showreel video
    const showreelIframe = document.querySelector('.showreel-video');
    if (showreelIframe && !showreelIframe.src) {
        showreelIframe.src = 'https://www.youtube.com/embed/H0IriFBB-GY?rel=0';
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any modals if added in future
    }
});

// Smooth click handlers for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const onclick = button.getAttribute('onclick');
        if (onclick) {
            eval(onclick);
        }
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-background');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Performance: Reduce motion for users who prefer it
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.body.style.setProperty('--scroll-behavior', 'auto');
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Analytics tracking (optional - add your own tracking ID)
console.log('Portfolio loaded successfully');
