// Form handling and page functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Character counter for textarea
    const textarea = document.getElementById('notes');
    const charCount = document.querySelector('.char-count');
    
    if (textarea && charCount) {
        textarea.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count + ' /';
        });
    }
    
    // VIN number formatting and validation
    const vinInput = document.getElementById('vin');
    if (vinInput) {
        vinInput.addEventListener('input', function() {
            // Convert to uppercase and remove invalid characters
            this.value = this.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
            
            // Validate VIN format
            if (this.value.length > 0 && this.value.length < 17) {
                this.style.borderColor = '#ffc107';
                this.style.borderWidth = '2px';
            } else if (this.value.length === 17) {
                this.style.borderColor = '#28a745';
                this.style.borderWidth = '2px';
            } else {
                this.style.borderColor = '';
                this.style.borderWidth = '';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Let all Formspree forms submit naturally without JavaScript interference
    
    // Go to top button functionality
    const goToTopBtn = document.querySelector('.go-to-top');
    if (goToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                goToTopBtn.style.display = 'block';
            } else {
                goToTopBtn.style.display = 'none';
            }
        });
    }

    // Navbar scroll behavior - hide on scroll down, show on scroll up
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Don't hide navbar if we're at the very top
            if (currentScrollTop <= 0) {
                navbar.classList.remove('navbar-hidden');
                return;
            }
            
            // If scrolling down and we've scrolled more than 100px, hide navbar
            if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                navbar.classList.add('navbar-hidden');
            } 
            // If scrolling up, show navbar only if scrolled up by at least 50px
            else if (currentScrollTop < lastScrollTop && (lastScrollTop - currentScrollTop) > 50) {
                navbar.classList.remove('navbar-hidden');
            }
            
            lastScrollTop = currentScrollTop;
        });
    }

    // Add navigation highlighting for current page
    highlightCurrentPage();

    // Hamburger menu toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu-active');
            navToggle.classList.toggle('open');
        });
    }
});

// Old form submission handler removed - Formspree handles all form processing

// Form validation removed - Formspree handles validation

// Form validation removed - let Formspree handle validation and submission

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Go to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mobile menu toggle (for future mobile menu implementation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Success message functions removed - Formspree handles success pages automatically

// All form submission handlers removed - Formspree handles everything

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 