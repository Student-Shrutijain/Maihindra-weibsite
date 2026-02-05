// ========================================
// GLIMPSE SECTION - Marquee Animation
// ========================================

// Intersection Observer for Glimpses Section Marquee
const glimpseSection = document.getElementById('glimpse');
const observerOptions = {
    root: null,
    threshold: 0.1 // Trigger when 10% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            glimpseSection.classList.add('is-in-view');
        } else {
            glimpseSection.classList.remove('is-in-view');
        }
    });
}, observerOptions);

if (glimpseSection) {
    observer.observe(glimpseSection);
}

console.log('Glimpse marquee animation initialized');
