// ========================================
// BUTTON EVENT LISTENERS - PRICING SECTION
// ========================================

// Get Quote Buttons
const quoteButtons = document.querySelectorAll('.btn-outline');
quoteButtons.forEach((btn, index) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const planType = this.closest('.pricing-card').querySelector('.pricing-title, .pricing-title2').textContent;
        console.log(`Pricing Section: Get Quote clicked for ${planType}`);

        // Show alert with plan details
        alert(`Thank you for your interest in ${planType}!\n\nOur team will contact you shortly with a personalized quote.\n\nCall us now: +91 9901717339`);

        // Optional: Scroll to contact or open contact form
        // window.location.href = '#contact';
    });
});

console.log('Pricing section buttons initialized');
