
document.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.card');

    cards.forEach( card => {
        card.addEventListener('click', () => { imagenOverlay(card) });
    });
});

function imagenOverlay(card) {
    const img = card.querySelector('img');
    const imagen = document.createElement('picture');

    const src = img.getAttribute("src")
    const nombreImagen = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'));

    imagen.innerHTML = `
        <source srcset="img/proyecto_compati/webp/${nombreImagen}.webp" type="image/webp">
        <source srcset="img/proyecto_compati/avif/${nombreImagen}.avif" type="image/avif">
        <img loading="lazy" width="800" src="img/proyecto_compati/${nombreImagen}.jpg" alt="imagen ampliada">
        `;   
    console.log(imagen);
    
    //Crear el Overlay con la imagen.
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Evento para cerrar la imagen al hacer click en cualquier parte del body.
    /*
    overlay.onclick = function() {
    const body = document.querySelector('body');
    body.classList.remove('fijar-body'); //Quita la clase que impide el scroll.
    overlay.remove(); //Quita el elemento que contiene la imagen.
    };
    */

    //Boton para cerrar el Modal.
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');

    //Evento para cerrar la imagen.
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body'); //Quita la clase que impide el scroll.
        overlay.remove(); //Quita el elemento que contiene la imagen.
    };

    overlay.appendChild(cerrarModal);

    //Añadirlo al HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

} 

