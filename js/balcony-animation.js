// ========================================
// BALCONY SCROLL ANIMATION
// ========================================

const balconyImg = document.getElementById('balcony-animated');
const aboutSection = document.getElementById('about-features-new');

let ticking = false;

function updateBalconyPosition() {
    if (!aboutSection || !balconyImg) {
        console.log('Balcony animation: Elements not found');
        return;
    }

    const aboutRect = aboutSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Define the scroll range for animation
    // Start earlier to make animation more visible
    const scrollStart = aboutRect.top + window.scrollY - viewportHeight * 1.2;
    const scrollEnd = aboutRect.bottom + window.scrollY - viewportHeight * 0.5;
    const scrollCurrent = window.scrollY;

    // Calculate progress (0 to 1)
    let progress = (scrollCurrent - scrollStart) / (scrollEnd - scrollStart);
    progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1

    // Debug logging
    if (progress > 0 && progress < 1) {
        console.log(`Balcony animation progress: ${(progress * 100).toFixed(1)}%`);
    }

    if (progress > 0 && progress < 1) {
        // Show image during transition
        balconyImg.style.opacity = '1';

        // Calculate positions
        // Start: right side of viewport (matching About section background position)
        // End: left side (matching Features section position)
        const startX = window.innerWidth * 0.7; // Right side
        const endX = window.innerWidth * 0.1;   // Left side
        const startY = viewportHeight * 0.2;
        const endY = viewportHeight * 0.3;

        const currentX = startX + (endX - startX) * progress;
        const currentY = startY + (endY - startY) * progress;

        // Rotation: 360 degrees over the journey
        const rotation = progress * 360;

        balconyImg.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;
    } else if (progress >= 1) {
        // Hide after animation completes
        balconyImg.style.opacity = '0';
    } else {
        // Hide before animation starts
        balconyImg.style.opacity = '0';
    }

    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateBalconyPosition);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);
window.addEventListener('resize', updateBalconyPosition);

// Initial position
updateBalconyPosition();

// Debug: Log initial state
console.log('Balcony animation initialized', {
    balconyImg: !!balconyImg,
    aboutSection: !!aboutSection
});
