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
    // --- SYSTÈME DE FILTRAGE DES PROJETS ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. On enlève la classe "active" de tous les boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            // 2. On l'ajoute au bouton cliqué
            btn.classList.add('active');

            // 3. On récupère le texte du bouton (en minuscules pour éviter les bugs)
            const filterValue = btn.textContent.trim().toLowerCase();

            // 4. On trie les cartes
            projectCards.forEach(card => {
                // On récupère le tag du projet
                const tag = card.querySelector('.tag').textContent.trim().toLowerCase();
                
                // Si on clique sur "Tous" ou que le tag correspond au bouton
                if (filterValue === 'tous' || tag === filterValue) {
                    card.style.display = 'block'; // On affiche
                } else {
                    card.style.display = 'none'; // On cache
                }
            });
        });
    });
});