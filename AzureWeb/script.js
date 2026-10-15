document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic copyright year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Navbar scroll background transition
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Interactive contact form handling with validation feedback
    const contactForm = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name-input').value.trim();
            const email = document.getElementById('email-input').value.trim();
            const message = document.getElementById('message-input').value.trim();

            if (name && email && message) {
                feedbackDiv.textContent = 'Thank you! Your message has been successfully sent.';
                feedbackDiv.className = 'mt-4 text-sm font-medium text-violet-400';
                feedbackDiv.classList.remove('hidden');
                
                contactForm.reset();

                setTimeout(() => {
                    feedbackDiv.classList.add('hidden');
                }, 5000);
            } else {
                feedbackDiv.textContent = 'Please fill out all fields before submitting.';
                feedbackDiv.className = 'mt-4 text-sm font-medium text-red-400';
                feedbackDiv.classList.remove('hidden');
            }
        });
    }
});