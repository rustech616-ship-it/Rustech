document.addEventListener("DOMContentLoaded", () => {
    
    // Mobile Navigation Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        // Simple hamburger animation toggle
        mobileMenu.classList.toggle("is-active");
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Stop standard page refresh

        // Grab form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulate an API Form submission
        if (name && email && message) {
            formResponse.textContent = `Thank you, ${name}! Your message has been sent successfully. We will get back to you shortly.`;
            formResponse.classList.remove("hidden");
            formResponse.classList.add("success");

            // Reset form inputs
            contactForm.reset();

            // Hide the message automatically after 5 seconds
            setTimeout(() => {
                formResponse.classList.add("hidden");
                formResponse.classList.remove("success");
            }, 5000);
        }
    });
});