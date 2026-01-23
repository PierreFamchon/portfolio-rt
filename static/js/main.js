/* ==========================================================================
   1. GESTION DE LA MODALE CYBER (SÉCURITÉ)
   ========================================================================== */
let destinationURL = ""; // Pour se souvenir où aller

function verifierAcces(urlCible) {
    destinationURL = urlCible;
    const modal = document.getElementById('cyber-modal');
    const input = document.getElementById('cyber-pass');
    
    if (modal && input) {
        modal.style.display = 'flex';
        setTimeout(() => input.focus(), 100);
    } else {
        console.error("Erreur : La modale ou l'input n'existe pas dans le HTML.");
    }
}

function fermerModal() {
    const modal = document.getElementById('cyber-modal');
    if (modal) modal.style.display = 'none';
    
    // Reset des champs
    const passInput = document.getElementById('cyber-pass');
    const msgBox = document.getElementById('access-msg');
    if (passInput) passInput.value = '';
    if (msgBox) msgBox.innerHTML = '';
}

function validerCode() {
    const passInput = document.getElementById('cyber-pass');
    const msgBox = document.getElementById('access-msg');
    
    if (!passInput || !msgBox) return;

    const pass = passInput.value;
    
    msgBox.style.color = "#fff";
    msgBox.innerHTML = "VÉRIFICATION EN COURS..."; // (Correction orthographe)
    
    setTimeout(() => {
        // --- MOT DE PASSE (Modifie-le ici si besoin) ---
        if (pass === "26Q5mMTWHJ#") {
            msgBox.style.color = "#27c93f"; // Vert
            msgBox.innerHTML = "ACCÈS AUTORISÉ. REDIRECTION.";
            
            setTimeout(() => {
                window.location.href = destinationURL;
            }, 800);
        } else {
            msgBox.style.color = "#ff5555"; // Rouge
            msgBox.innerHTML = "ERREUR : ACCÈS REFUSÉ.";
            passInput.value = ''; 
        }
    }, 600); 
}

// CORRECTION : Gestion robuste de la touche "Entrée"
document.addEventListener("DOMContentLoaded", function() {
    const passInput = document.getElementById('cyber-pass');
    if (passInput) {
        passInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                validerCode();
            }
        });
    }
});

/* ==========================================================================
   2. MENU MOBILE & SIDEBAR
   ========================================================================== */
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const mainWrapper = document.querySelector('.main-wrapper');
    
    if (sidebar) sidebar.classList.toggle('active');
    if (mainWrapper) mainWrapper.classList.toggle('sidebar-active');
}

document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const button = document.querySelector('.menu-toggle');
    const mainWrapper = document.querySelector('.main-wrapper');
    
    if (sidebar && button && !sidebar.contains(event.target) && !button.contains(event.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        if (mainWrapper) mainWrapper.classList.remove('sidebar-active');
    }
});

/* ==========================================================================
   3. MENU DÉROULANT (Avec mémoire localStorage)
   ========================================================================== */
function toggleDropdown() {
    const compMenu = document.getElementById("compMenu");
    if (!compMenu) return;

    if (compMenu.style.display === "none" || compMenu.style.display === "") {
        compMenu.style.display = "block";
        localStorage.setItem("menuCompetencesState", "open");
    } else {
        compMenu.style.display = "none";
        localStorage.setItem("menuCompetencesState", "closed");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const compMenu = document.getElementById("compMenu");
    if (!compMenu) return;

    const isActivePageInMenu = compMenu.querySelector(".active");
    const savedState = localStorage.getItem("menuCompetencesState");

    if (isActivePageInMenu) {
        compMenu.style.display = "block"; 
    } else if (savedState === "open") {
        compMenu.style.display = "block"; 
    } else {
        compMenu.style.display = "none";  
    }
});

/* ==========================================================================
   4. ACCORDÉON (Labs/Archives)
   ========================================================================== */
function toggleAccordion(element) {
    element.classList.toggle("active");
    var content = element.nextElementSibling;
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

/* ==========================================================================
   5. LIGHTBOX (Zoom Images)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.project-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if(lightbox) {
        images.forEach(img => {
            img.addEventListener('click', e => {
                e.stopPropagation(); 
                lightboxImg.src = img.src;
                
                const figcaption = img.parentElement.querySelector('figcaption');
                if (figcaption) {
                    lightboxCaption.innerText = figcaption.innerText;
                } else {
                    lightboxCaption.innerText = img.alt || "";
                }
                
                lightbox.classList.add('active');
            });
        });
    }
});

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if(lightbox) lightbox.classList.remove('active');
}

/* ==========================================================================
   6. SCROLL SPY & BACK TO TOP
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. SÉLECTION DES ÉLÉMENTS
    const backToTopButton = document.getElementById("backToTop");
    const footer = document.querySelector(".site-footer"); // Nécessaire pour le calcul

    // 2. GESTION DU CLIC (Ton code d'origine)
    if (backToTopButton) {
        backToTopButton.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. GESTION DU SCROLL (Fusion : Affichage + Collision + Liens Actifs)
    window.addEventListener("scroll", function() {
        
        // --- PARTIE A : GESTION DU BOUTON RETOUR HAUT ---
        if (backToTopButton) {
            const scrollPos = window.scrollY || document.documentElement.scrollTop; // Compatible tous navigateurs

            // A1. Afficher / Masquer (Ton code amélioré pour gérer la classe CSS d'animation)
            if (scrollPos > 300) {
                backToTopButton.style.display = "flex"; // Force le flex pour centrer l'icône
                backToTopButton.classList.add("show"); // Active l'animation CSS
            } else {
                backToTopButton.style.display = "none";
                backToTopButton.classList.remove("show");
            }

            // A2. ANTI-COLLISION FOOTER (Le nouveau calcul)
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Si le haut du footer est visible à l'écran
                if (footerRect.top < windowHeight) {
                    // On calcule la nouvelle position : Hauteur fenêtre - Position Footer + 20px de marge
                    const newBottom = (windowHeight - footerRect.top) + 20;
                    backToTopButton.style.bottom = `${newBottom}px`;
                } else {
                    // Sinon, on le remet à sa place d'origine (30px du bas)
                    backToTopButton.style.bottom = "30px";
                }
            }
        }

        // --- PARTIE B : SCROLL SPY (Ton code d'origine pour le menu) ---
        let current = '';
        const sections = document.querySelectorAll('#competences, #projet, #rapport, #acceuil, #cv, #rt1, #rt2, #rt3, #archives'); 
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // J'utilise window.scrollY qui est l'équivalent moderne de pageYOffset
            if (window.scrollY >= (sectionTop - 230)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.page-nav-link').forEach(a => {
            a.classList.remove('active-link');
            // Petite sécurité ajoutée : on vérifie que le lien a bien un href avant de tester
            if (current !== "" && a.getAttribute('href') && a.getAttribute('href').includes(current)) {
                a.classList.add('active-link');
            }
        });
    });
});

/* ==========================================================================
   7. ANIMATION EN CASCADE (STAGGERED REVEAL)
   ========================================================================== */
const observerOptions = {
    root: null,
    threshold: 0.1, // Déclenche dès que 10% de l'objet est visible
    rootMargin: "0px 0px -50px 0px" // Marge de sécurité en bas
};

const observer = new IntersectionObserver((entries) => {
    let delayCounter = 0; // Compteur pour gérer la file d'attente

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Si on scrolle vite, plusieurs éléments arrivent ici en même temps.
            // On multiplie le délai par le nombre d'éléments dans la file.
            
            // 150ms de délai entre chaque élément (ajuste ce chiffre pour la vitesse de la cascade)
            const delay = delayCounter * 150; 
            
            // On applique le délai directement sur l'élément HTML
            entry.target.style.transitionDelay = `${delay}ms`;
            
            // On lance l'animation
            entry.target.classList.add('visible');
            
            // On arrête d'observer cet élément (pour ne pas le rejouer)
            observer.unobserve(entry.target);
            
            // On incrémente le compteur pour le prochain élément du "lot"
            delayCounter++;
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    // On cible tous les éléments à animer
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(el => observer.observe(el));
});

/* ==========================================================================
   8. EFFET MACHINE À ÉCRIRE (NEW!)
   ========================================================================== */
function typeWriter(elementId, text, speed) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let i = 0;
    element.innerHTML = ""; 
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialisation du typewriter DYNAMIQUE
document.addEventListener("DOMContentLoaded", () => {
    // 1. On cible l'élément
    const titleElement = document.getElementById("typewriter-text");

    // 2. On vérifie si l'élément existe sur la page actuelle avant de lancer le script
    if (titleElement) {
        // 3. On récupère le texte contenu dans l'attribut "data-text"
        // Si data-text est vide, on prend le texte par défaut à l'intérieur de la balise
        const textToType = titleElement.getAttribute("data-text") || titleElement.innerText;
        
        // 4. On lance la fonction
        // J'ai passé la vitesse de 50 à 150 (plus le chiffre est grand, plus c'est lent)
        typeWriter("typewriter-text", textToType, 50);
    }
});

/* ==========================================================================
   9. EFFET TILT 3D SUR LES CARTES (NEW!)
   ========================================================================== */
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calcul de l'inclinaison
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        card.style.transition = 'transform 0.5s ease';
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});

/* ==========================================================================
   10. NETWORK BACKGROUND (CYBER STYLE)
   ========================================================================== */
const canvas = document.getElementById('network-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray;

    // Définition de la souris pour l'interaction
    let mouse = {
        x: null,
        y: null,
        radius: 150 // Rayon de connexion autour de la souris
    }

    // Gestion de la position de la souris
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    // Ajuster la taille du canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Gestion du redimensionnement
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    // Création des particules
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5; // Particules un peu plus fines
            this.speedX = (Math.random() * 1.5 - 0.75); // Vitesse un peu plus variée
            this.speedY = (Math.random() * 1.5 - 0.75);
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Rebondir sur les bords
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

            // Interaction Souris : Les particules fuient ou sont attirées (optionnel, ici connexion simple)
            // Si tu veux qu'elles s'écartent, décommente les lignes suivantes :
            /*
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            if (distance < mouse.radius) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 2;
                if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 2;
                if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
            }
            */
        }
        draw() {
            // COULEUR : Ton Bleu Néon (#00bcd4 => RGB: 0, 188, 212)
            ctx.fillStyle = 'rgba(0, 188, 212, 0.8)'; 
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        // Densité ajustée (moins de particules sur mobile pour la perf)
        const densityDivisor = (window.innerWidth < 768) ? 20000 : 12000;
        const numberOfParticles = (canvas.width * canvas.height) / densityDivisor;
        
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            connect(i);
        }
        requestAnimationFrame(animate);
    }

    // Dessiner les lignes
    function connect(index) {
        let opacityValue = 1;
        for (let j = index; j < particlesArray.length; j++) {
            const dx = particlesArray[index].x - particlesArray[j].x;
            const dy = particlesArray[index].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Distance de connexion entre particules
            if (distance < 110) { 
                opacityValue = 1 - (distance / 110);
                // COULEUR LIGNES : Bleu Néon (#00bcd4)
                ctx.strokeStyle = `rgba(0, 188, 212, ${opacityValue * 0.4})`; // 0.4 pour rester discret
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(particlesArray[index].x, particlesArray[index].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }

        // Connexion avec la souris (Effet Cyber)
        const dxMouse = particlesArray[index].x - mouse.x;
        const dyMouse = particlesArray[index].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < mouse.radius) {
            opacityValue = 1 - (distanceMouse / mouse.radius);
            // Connexion Souris un peu plus brillante
            ctx.strokeStyle = `rgba(0, 188, 212, ${opacityValue * 0.6})`; 
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[index].x, particlesArray[index].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    }

    // Lancement
    init();
    animate();

    // Reset position souris quand elle quitte la fenêtre
    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });
}

/* ==========================================================================
   11. CUSTOM CURSOR (AVEC CIBLAGE PRÉCIS FORMULAIRE)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.getElementById("cursor-crosshair");
    
    if (cursor) {
        // 1. Mouvement du curseur (Suivi de la souris sans latence)
        window.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });

        // 2. CIBLAGE DES ÉLÉMENTS INTERACTIFS
        // J'ai ajouté les classes spécifiques de ton HTML (.cyber-btn, #cyber-pass)
        const selectors = [
            "a", 
            "button", 
            "input", 
            "textarea", 
            ".card", 
            ".nav-item", 
            ".menu-toggle",
            ".cyber-btn",  // <--- Cible tes boutons ABORT et EXECUTE
            "#cyber-pass", // <--- Cible ton champ mot de passe
            ".lock-icon"   // <--- Cible l'icône cadenas
        ];

        // On transforme le tableau en une seule chaîne de caractères pour le querySelector
        const selectorString = selectors.join(", ");
        const interactiveElements = document.querySelectorAll(selectorString);

        // 3. Application des écouteurs d'événements
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('hovering');
            });
            
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovering');
            });
            
            // Sécurité supplémentaire : on force le retrait au clic
            el.addEventListener('click', () => {
                document.body.classList.remove('hovering'); // Reset après clic
                // Petite astuce : on le remet tout de suite après si la souris est encore dessus
                setTimeout(() => {
                    if(el.matches(':hover')) document.body.classList.add('hovering');
                }, 100);
            });
        });
    }
});