// ========================================
// UTILITY BUTTONS - Scroll to Top & WhatsApp
// ========================================

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    // Remove inline onclick and use event listener instead
    scrollTopBtn.removeAttribute('onclick');
    scrollTopBtn.addEventListener('click', function (e) {
        console.log('Scroll to Top clicked');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// WhatsApp Floating Button
const whatsappBtn = document.querySelector('.fab-whatsapp');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function (e) {
        console.log('WhatsApp button clicked');
        // WhatsApp link will be handled by href
    });
}

console.log('Utility buttons initialized');
