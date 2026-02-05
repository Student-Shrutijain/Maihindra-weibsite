// ========================================
// BUTTON EVENT LISTENERS - HEADER & FOOTER
// ========================================

// HEADER SECTION - Phone Button
const headerPhoneBtn = document.querySelector('.header-btn');
if (headerPhoneBtn) {
    headerPhoneBtn.addEventListener('click', function (e) {
        console.log('Header: Call button clicked');
        // Phone call will be handled by href="tel:"
    });
}

// FOOTER SECTION - Book Site Visit
const siteVisitBtn = document.querySelector('.footer-btn-item.btn-item-red[href="#site-visit"]');
if (siteVisitBtn) {
    siteVisitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Footer: Book Site Visit clicked');

        const visitDate = prompt('When would you like to visit Mahindra Blossom?\n\nEnter preferred date (e.g., Tomorrow, This Weekend, Next Monday):');
        if (visitDate) {
            alert(`Site Visit Request Received!\n\nPreferred Date: ${visitDate}\n\nOur team will call you at +91 9901717339 to confirm your visit.\n\nThank you!`);
        }
    });
}

// FOOTER SECTION - Phone Button
const footerPhoneBtn = document.querySelector('.footer-btn-item.btn-item-white[href="tel:+919901717339"]');
if (footerPhoneBtn) {
    footerPhoneBtn.addEventListener('click', function (e) {
        console.log('Footer: Call button clicked');
        // Phone call will be handled by href="tel:"
    });
}

// FOOTER SECTION - Download Brochure
const brochureBtn = document.querySelector('.footer-btn-item.btn-item-red[href="#brochure"]');
if (brochureBtn) {
    brochureBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Footer: Download Brochure clicked');

        const email = prompt('Enter your email to receive the Mahindra Blossom brochure:');
        if (email && email.includes('@')) {
            alert(`Thank you!\n\nThe brochure will be sent to: ${email}\n\nYou will also receive a call from our team at +91 9901717339 for any queries.`);
            // In production, this would trigger an actual email/download
        } else if (email) {
            alert('Please enter a valid email address.');
        }
    });
}

console.log('Header and footer buttons initialized');
