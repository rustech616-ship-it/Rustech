document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Mobile Navigation Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenu.classList.toggle("is-active");
    });

    // Close mobile menu gracefully upon selecting targets
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            mobileMenu.classList.remove("is-active");
        });
    });

    // Contact Form Intake Processing
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const serviceType = document.getElementById("service-type").options[document.getElementById("service-type").selectedIndex].text;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            // Confirmation tailored back to the client's objective
            formResponse.textContent = `Thank you, ${name}. Your request regarding "${serviceType}" has been registered. Our enterprise team will email you at ${email} shortly.`;
            formResponse.classList.remove("hidden");
            formResponse.classList.add("success");

            contactForm.reset();

            setTimeout(() => {
                formResponse.classList.add("hidden");
                formResponse.classList.remove("success");
            }, 7000);
        }
    });
});