  // Particle animation
  function createParticle() {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '-10px';
    document.getElementById('particles').appendChild(particle);

    const animation = particle.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 2000 + 3000,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    });

    animation.onfinish = () => {
        particle.remove();
    };
}

setInterval(createParticle, 100);

// Section animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px) scale(0.9)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Skill hover effect
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.animation = 'pulse 0.5s infinite alternate';
    });
})

