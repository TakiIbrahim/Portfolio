document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('languageToggle');
    const elements = document.querySelectorAll('[data-en], [data-de]');

    let isEnglish = true;

    languageToggle.addEventListener('click', () => {
        isEnglish = !isEnglish;
        elements.forEach(element => {
            element.textContent = isEnglish 
                ? element.getAttribute('data-en') 
                : element.getAttribute('data-de');
        });
        languageToggle.textContent = isEnglish ? 'DE' : 'EN';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active navigation link
    document.addEventListener('scroll', () => {
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    });
    // Intersection Observer to animate sections when they appear on the screen
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
  
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5  // When 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);  // Stop observing once the element is visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

    // Smooth scroll for initial navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Header effect on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.style.backgroundPosition = `0 ${window.scrollY * 0.5}px`;
    });

    // Intersection Observer for fade-in effects
    const observeOptions = {
        threshold: [0.25]
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observeOptions);

    document.querySelectorAll('.skill-item, .exp-item, .timeline-item, .project-item').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});