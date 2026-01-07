/* ==========================================================================
   GESTION DE L'ACCÈS SÉCURISÉ
   ========================================================================== */
function verifierAcces(pageDestination) {
    var motDePasse = prompt("🔒 Zone Restreinte. Veuillez vous identifier :");
    // Mot de passe défini (A modifier si besoin)
    if (motDePasse === "26Q5mMTWHJ#") {
        alert("✅ Accès autorisé. Bienvenue.");
        window.location.href = pageDestination;
    } else if (motDePasse !== null && motDePasse !== "") {
        alert("❌ Accès refusé. Mot de passe incorrect.");
    }
}

/* ==========================================================================
   MENU MOBILE & NAVIGATION
   ========================================================================== */
function toggleDropdown() {
    const menu = document.getElementById("compMenu");
    // Bascule entre display block et none
    if (menu) {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const mainWrapper = document.querySelector('.main-wrapper');
    
    if (sidebar) sidebar.classList.toggle('active');
    if (mainWrapper) mainWrapper.classList.toggle('sidebar-active');
}

// Fermer le menu si on clique ailleurs sur l'écran
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const button = document.querySelector('.menu-toggle');
    const mainWrapper = document.querySelector('.main-wrapper');
    
    // Si les éléments existent et qu'on clique dehors
    if (sidebar && button && !sidebar.contains(event.target) && !button.contains(event.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        if (mainWrapper) mainWrapper.classList.remove('sidebar-active');
    }
});

/* ==========================================================================
   ACCORDÉON (Pour la page Labs/Archives)
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
   LIGHTBOX (Zoom Images)
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
                    lightboxCaption.innerText = img.alt;
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
   SCROLL SPY & BACK TO TOP
   ========================================================================== */
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    // 1. Gestion du bouton Retour en Haut
    if (backToTopButton) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    // 2. Gestion du Menu Actif (Scroll Spy)
    let current = '';
    const sections = document.querySelectorAll('#competences, #projet, #rapport'); 
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // On déclenche l'effet un peu avant d'arriver (marge de 180px)
        if (pageYOffset >= (sectionTop - 180)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.page-nav-link').forEach(a => {
        a.classList.remove('active-link');
        if (a.getAttribute('href').includes(current) && current !== "") {
            a.classList.add('active-link');
        }
    });
});

if (backToTopButton) {
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const compMenu = document.getElementById("compMenu");
    
    // 1. Vérifier si une des pages du menu est la page active
    // On regarde si un lien À L'INTÉRIEUR du menu possède la classe "active"
    const isActivePageInMenu = compMenu.querySelector(".active");

    // 2. Récupérer l'état mémorisé par l'utilisateur (ouvert ou fermé)
    const savedState = localStorage.getItem("menuCompetencesState");

    // LOGIQUE D'OUVERTURE :
    // Si on est sur une page du menu (ex: administrer.html) -> On force l'ouverture
    if (isActivePageInMenu) {
        compMenu.style.display = "block";
    } 
    // Sinon, si l'utilisateur l'avait laissé ouvert précédemment -> On le rouvre
    else if (savedState === "open") {
        compMenu.style.display = "block";
    } 
    // Sinon, on le laisse fermé
    else {
        compMenu.style.display = "none";
    }
});

function toggleDropdown() {
    const compMenu = document.getElementById("compMenu");
    
    if (compMenu.style.display === "none" || compMenu.style.display === "") {
        // Ouvrir
        compMenu.style.display = "block";
        // On sauvegarde "open" dans la mémoire du navigateur
        localStorage.setItem("menuCompetencesState", "open");
    } else {
        // Fermer
        compMenu.style.display = "none";
        // On sauvegarde "closed" dans la mémoire du navigateur
        localStorage.setItem("menuCompetencesState", "closed");
    }
}