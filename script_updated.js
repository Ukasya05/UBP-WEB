// WhatsApp form submission
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = '6287839307738'; // WhatsApp number without + or spaces
    const name = encodeURIComponent(this.querySelector('input[type="text"]').value);
    const email = encodeURIComponent(this.querySelector('input[type="email"]').value);
    const message = encodeURIComponent(this.querySelector('textarea').value);
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
    this.reset(); // Reset the form after submission
});

// Smooth scroll only for internal anchor links (href starting with "#")
document.querySelectorAll('.menu a, .cta-button').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Else: allow normal navigation
    });
});

// Navbar shrink on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.toggle('shrink', window.scrollY > 0);
    }

    // Toggle visibility of back-to-top button
    const backHomeWrapper = document.querySelector('.back-home-wrapper');
    const heroSection = document.getElementById('hero');
    if (backHomeWrapper && heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        backHomeWrapper.style.display = heroBottom < 0 ? 'block' : 'none';
    }
});

// Initial visibility check on page load
window.addEventListener('load', function() {
    const backHomeWrapper = document.querySelector('.back-home-wrapper');
    const heroSection = document.getElementById('hero');
    if (backHomeWrapper && heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        backHomeWrapper.style.display = heroBottom < 0 ? 'block' : 'none';
    }
});
