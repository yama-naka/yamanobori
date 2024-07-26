// NAVBAR responsive
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open')
})


document.addEventListener('DOMContentLoaded', () => {
    const menudropdowns = document.querySelectorAll('.menuDropdown');

    menudropdowns.forEach(menuDropdown => {
        const menudrop = menuDropdown.querySelector('.drop');
        const content = menuDropdown.querySelector('.dropdown-content');

        menudrop.addEventListener('touchstart', (e) => {
            e.preventDefault();
            toggleDropdown(content);
        });

        // Fermer le menu si on touche en dehors
        document.addEventListener('touchstart', (e) => {
            if (!menuDropdown.contains(e.target)) {
                content.classList.remove('show');
            }
        });

        // Gérer les sélections dans le menu
        content.addEventListener('touchstart', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                console.log('Option sélectionnée:', e.target.textContent);
                content.classList.remove('show');
            }
        });
    });
});

function toggleDropdown(content) {
    document.querySelectorAll('.dropdown-content').forEach(dc => {
        if (dc !== content) {
            dc.classList.remove('show');
        }
    });
    content.classList.toggle('show');
}