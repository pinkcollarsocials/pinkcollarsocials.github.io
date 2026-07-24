document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

    }


    // Scroll animations
    const sections = document.querySelectorAll("section:not(.no-animation)");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    sections.forEach((section) => {
        section.classList.add("hidden");
        observer.observe(section);
    });

});
