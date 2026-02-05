// ========================================
// BUTTON EVENT LISTENERS - FLOOR PLANS SECTION
// ========================================

// View Plan Buttons
const viewPlanButtons = document.querySelectorAll('.btn-view-plan-new');
viewPlanButtons.forEach((btn, index) => {
    btn.addEventListener('click', function (e) {
        const card = this.closest('.floor-plan-card-new');
        const planLabel = card.querySelector('.plan-label').textContent;
        const isSoldOut = card.classList.contains('sold-out');
        const planImage = card.querySelector('.plan-image');

        console.log(`Floor Plans: View Plan clicked for ${planLabel}`);

        if (isSoldOut) {
            alert(`${planLabel} is currently SOLD OUT.\n\nPlease check our other available plans or contact us for future availability.\n\nCall: +91 9901717339`);
        } else {
            // Open plan image in a new window/modal
            const imageUrl = planImage.src;
            const newWindow = window.open('', '_blank', 'width=800,height=600');
            newWindow.document.write(`
                <html>
                    <head>
                        <title>${planLabel} - Mahindra Blossom</title>
                        <style>
                            body { margin: 0; padding: 20px; background: #f5f5f5; font-family: Arial, sans-serif; }
                            img { max-width: 100%; height: auto; display: block; margin: 0 auto; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
                            h2 { text-align: center; color: #333; }
                            .info { text-align: center; margin-top: 20px; }
                            .btn { background: #ED3237; color: white; padding: 12px 24px; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; display: inline-block; margin-top: 10px; }
                        </style>
                    </head>
                    <body>
                        <h2>${planLabel} - Floor Plan</h2>
                        <img src="${imageUrl}" alt="${planLabel}">
                        <div class="info">
                            <p>For more details, call us at <strong>+91 9901717339</strong></p>
                            <a href="tel:+919901717339" class="btn">Call Now</a>
                        </div>
                    </body>
                </html>
            `);
        }
    });
});

console.log('Floor plans section buttons initialized');
