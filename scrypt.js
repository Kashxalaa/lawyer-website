// JavaScript for responsive navigation menu toggle
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.getElementById('main-menu');

        menuToggle.addEventListener('click', function() {
            // Toggle the 'active' class on both the button and the menu
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');

            // Accessibility update
            const isExpanded = menuToggle.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when a link is clicked (useful for single-page scrolling)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    });
