// NAVBAR responsive
/* développer menu burger*/
const burger = document.querySelector('.burger');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
    body.classList.toggle('open')
})
/* fermer menu burger*/
const menu = document.querySelector('.menu');

menu.addEventListener('click', function () {
    body.classList.toggle('open')
})

// EXPANSION CARDS
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('expanded');
        });
    });
});

// BOUTON Retour haut
// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');
    // Afficher le bouton quand l'utilisateur a défilé de 50px
    window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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