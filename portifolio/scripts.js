// Toggle mobile menu
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.createElement('div');
menuIcon.className = 'menu-icon';
menuIcon.innerHTML = '&#9776;'; // Menu icon (three horizontal lines)
document.querySelector('header').appendChild(menuIcon);

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the menu if it's open on mobile
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});

// Toggle login form visibility
const loginForm = document.querySelector('.login-form');
const loginButton = document.querySelector('.join-btn');

loginButton.addEventListener('click', () => {
    loginForm.classList.toggle('visible');
    loginForm.scrollIntoView({ behavior: 'smooth' });
});

// Add responsive behavior on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
});
