// NAVBAR responsive
const burger = document.querySelector('.burger');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
    body.classList.toggle('open')
})

// Gestion menus déroulants
document.addEventListener('DOMContentLoaded', () => {
    const menuDropdowns = document.querySelectorAll('.menuDropdown');

    menuDropdowns.forEach(menuDropdown => {
        const menuDrop = menuDropdown.querySelector('.drop');
        const content = menuDropdown.querySelector('.dropdown-content');

        // Gestion du tap sur le menu principal
        menuDrop.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeAllDropdowns();
            content.classList.toggle('show');
        }, {passive: false});
        // Gestion du tap sur les éléments du sous-menu
        content.addEventListener('touchstart', (e) => {
            e.stopPropagation();
            if (e.target.closest('.drop-details')) {
                const description=e.target.closest('.drop-details').querySelector('.description');
                if (description) {
                    e.preventDefault();
                    description.classList.toggle('show');
                }
            }
        }, {passive: false});
    });

    // Fermer tous les menus déroulants
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-content, .description').forEach(el => {
            el.classList.remove('show');
        });
    }

    // Fermer les menus si on touche en dehors
    document.addEventListener('touchstart', (e) => {
        if (!e.target.closest('.menuDropdown')) {
            closeAllDropdowns();
        }
    }, { passive: true });

    // Empêcher le scroll lorsqu'on interagit avec le menu
    document.querySelectorAll('.menuDropdown, .dropdown-content').forEach(el => {
        el.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
    });

});


// BOUTON Retour haut
// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');
    // Afficher le bouton quand l'utilisateur a défilé de 100px
    window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
    };
    // Faire défiler vers le haut quand le bouton est cliqué
    backToTopButton.addEventListener('click', function() {
        document.body.scrollTop = 0; // Pour Safari
        document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
    });
});
