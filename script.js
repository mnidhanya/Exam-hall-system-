
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});


new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounter('meals-saved', 12500);
        animateCounter('waste-reduced', 8560);
        animateCounter('communities-served', 42);
        animateCounter('active-partners', 28);
    }
}).observe(document.getElementById('impact'));

function animateCounter(id, target) {
    let count = 0;
    const element = document.getElementById(id);
    const increment = target / 50;
    
    const timer = setInterval(() => {
        count += increment;
        element.textContent = Math.round(count).toLocaleString();
        if (count >= target) clearInterval(timer);
    }, 40);
}


document.querySelectorAll('.cta-button.secondary').forEach(btn => {
    btn.addEventListener('click', () => alert(`Thanks for interest as ${btn.textContent}!`));
});
