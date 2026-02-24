document.addEventListener('DOMContentLoaded', () => {
    // Scroll-triggered animations via IntersectionObserver
    const animatedCards = document.querySelectorAll('.animated-card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        animatedCards.forEach(card => observer.observe(card));
    } else {
        // Fallback for older browsers
        animatedCards.forEach(card => card.classList.add('is-visible'));
    }

    // Active nav link highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && currentPath.includes(href.split('#')[0])) {
            link.classList.add('active-link');
        }
    });
});
