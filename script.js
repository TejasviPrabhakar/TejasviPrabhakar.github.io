document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        // Basic validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission
        console.log(`New Enquiry:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        alert(`Thank you, ${name}! Your request has been sent. We will get back to you shortly.`);
        
        // Clear the form
        form.reset();
    });
});
