let observer;
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}
function setupObserver() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    observer = new IntersectionObserver(handleIntersection, options);
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
}
setupObserver();