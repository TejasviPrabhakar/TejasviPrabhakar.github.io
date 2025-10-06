document.addEventListener('DOMContentLoaded', function() {
    
    // --- Form Submission Handler ---
    const form = document.getElementById('booking-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = form.querySelector('input[name="name"]').value;
        formStatus.textContent = `Thank you, ${name}! Your request has been sent.`;
        formStatus.style.color = '#3D405B';

        setTimeout(() => {
            form.reset();
            formStatus.textContent = '';
        }, 4000);
    });

    // --- Fade-in on Scroll Animation ---
    const fadeInSections = document.querySelectorAll('.fade-in');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });
});
