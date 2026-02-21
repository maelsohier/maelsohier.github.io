document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    // On cible bien les sections + le header
    const sections = document.querySelectorAll('section, .header-container');

    const observerOptions = {
        threshold: 0.55 // On change à 55% pour être sûr que ça switch bien au milieu de l'écran
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si la section est majoritairement visible
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('header-container')) {
                    // Vert (Accueil)
                    root.style.setProperty('--primary', 'oklch(0.877 0.223 135.445)');
                } 
                else if (entry.target.classList.contains('skills-section')) {
                    // Bleu Cyan (Compétences)
                    root.style.setProperty('--primary', 'oklch(0.7 0.15 230)');
                } 
                else if (entry.target.classList.contains('timeline-section')) {
                    // Orange (Parcours)
                    root.style.setProperty('--primary', 'oklch(0.75 0.18 55)');
                } 
                else if (entry.target.classList.contains('projects-section')) {
                    // Violet (Projets)
                    root.style.setProperty('--primary', 'oklch(0.65 0.22 300)');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});