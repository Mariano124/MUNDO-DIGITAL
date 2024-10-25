tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'alfa': ['"Alfa Slab One"', 'cursive'],
                'alice': ['Alice', 'serif'],
            }
        }
    }
}

let menu_button = document.getElementById('menu_button');
let menu = document.getElementById('menu');
menu_button.addEventListener('click', abrirMenu);

function abrirMenu() {

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

let menu_links = document.querySelectorAll('.menu-link');
menu_links.forEach(link => {
    link.addEventListener('click', () => {

        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    });
});

window.addEventListener('scroll', function () {
    const menu = document.getElementById('navegador');
    if (window.scrollY > 50) {
        menu.classList.add('bg-dark');
    } else {
        menu.classList.remove('bg-dark');
    }
});

let wsp_veterinaria = document.getElementById('wsp_veterinaria');
let numero = "524351069706";
let mensaje = "Hola, me gustaria pedir un server.";
wsp_veterinaria.addEventListener('click', function () {
    window.open(urlApiWhats);
});
let urlApiWhats = "https://api.whatsapp.com/send/?phone=" + numero + "&text=" + mensaje;


