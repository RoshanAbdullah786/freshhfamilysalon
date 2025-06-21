document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for anchor links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Appointment Form Submission
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission for this demo

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('form-message');

            // Basic Validation (can be expanded)
            if (!name || !phone || !email || !service || !date || !time) {
                formMessage.textContent = 'Please fill in all required fields.';
                formMessage.style.color = 'red';
                return;
            }

            // Validate email format (simple check)
            if (!email.includes('@') || !email.includes('.')) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = 'red';
                return;
            }

            // Validate date is not in the past
            const today = new Date();
            const selectedDate = new Date(date + 'T00:00:00'); // Ensure timezone consistency
            today.setHours(0, 0, 0, 0); // Compare dates only

            if (selectedDate < today) {
                formMessage.textContent = 'Please select a date in the future.';
                formMessage.style.color = 'red';
                return;
            }

            // Simulate form submission (in a real scenario, this would send data to a server)
            formMessage.textContent = 'Sending your request...'; // Feedback during "submission"
            formMessage.style.color = 'var(--link-color)';

            // Simulate a short delay for "sending"
            setTimeout(() => {
                console.log('Form Submitted:');
                console.log('Name:', name);
                console.log('Phone:', phone);
                console.log('Email:', email);
                console.log('Service:', service);
                console.log('Date:', date);
                console.log('Time:', time);
                console.log('Message:', message);

                formMessage.textContent = 'Thank you! Your appointment request has been sent. We will contact you shortly to confirm.';
                formMessage.style.color = 'green';
                appointmentForm.reset(); // Clear the form
            }, 1000); // 1 second delay
        });
    }
            console.log('Name:', name);
            console.log('Phone:', phone);
            console.log('Email:', email);
            console.log('Service:', service);
            console.log('Date:', date);
            console.log('Time:', time);
            console.log('Message:', message);

            formMessage.textContent = 'Thank you! Your appointment request has been sent. We will contact you shortly to confirm.';
            formMessage.style.color = 'green';
            appointmentForm.reset(); // Clear the form
        });
    }

    // Simple fade-in effect for sections on scroll (optional, for "premium" feel)
    const sections = document.querySelectorAll('main section');
    const fadeInScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.85) { // Trigger when 85% of the section is visible
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styling for fade-in
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Call fadeInScroll on load and scroll
    fadeInScroll(); // Initial check
    window.addEventListener('scroll', fadeInScroll);

    // Mobile navigation toggle (if a burger menu is added later)
    // For now, the navigation is simple and adapts with flexbox.
    // If a more complex mobile nav is needed, this is where the JS would go.

    // Active Navigation Link Highlighting
    const navLinks = document.querySelectorAll('header nav ul li a');
    const currentPagePath = window.location.pathname.split("/").pop() || 'index.html'; // Get current page filename

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPagePath) {
            link.classList.add('active-nav-link');
        }
    });

});
