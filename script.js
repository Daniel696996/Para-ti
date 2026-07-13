// 1. Efecto Sorpresa al botón
const magicBtn = document.getElementById('magicBtn');
if (magicBtn) {
    magicBtn.addEventListener('click', () => {
        alert('¡Te amo muchísimo! Gracias por ser la mejor novia del mundo. 💜');
    });
}

// 2. Contador de Tiempo Juntos
const fechaInicio = new Date(2025, 0, 1); 

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    const contenedor = document.getElementById('countdown');
    if (contenedor) {
        contenedor.innerHTML = `
<div class="time-box"><span>∞</span>Días</div>
        <div class="time-box"><span>${horas}</span>Horas</div>
        <div class="time-box"><span>${minutos}</span>Min</div>
        <div class="time-box"><span>${segundos}</span>Seg</div>
        `;
    }
}
setInterval(actualizarContador, 1000);
actualizarContador();

// 3. Generación del Cielo Estrellado
function crearCieloEstrellado() {
    const contenedor = document.getElementById('stars-container');
    if (!contenedor) return;
    
    contenedor.innerHTML = ''; 
    const numeroEstrellas = 100; 

    for (let i = 0; i < numeroEstrellas; i++) {
        const estrella = document.createElement('div');
        estrella.classList.add('star');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        estrella.style.left = `${x}vw`;
        estrella.style.top = `${y}vh`;

        const tamano = Math.random() * 2.5 + 1; 
        estrella.style.width = `${tamano}px`;
        estrella.style.height = `${tamano}px`;

        const duracion = Math.random() * 3 + 2;
        const retraso = Math.random() * 5;
        estrella.style.animationDuration = `${duracion}s`;
        estrella.style.animationDelay = `${retraso}s`;

        if (Math.random() > 0.6) {
            estrella.style.backgroundColor = '#DCD0FF'; 
        }

        contenedor.appendChild(estrella);
    }
}

// Ejecutar inmediatamente al cargar el documento
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', crearCieloEstrellado);
} else {
    crearCieloEstrellado();
}