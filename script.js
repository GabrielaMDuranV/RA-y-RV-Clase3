// variables
let counter = 0;
const colors = ['#FF3333', '#33FF33', '#3333FF', '#FFFF33', '#FF33FF'];
let rotationInterval = null;

// DOM
document.addEventListener('DOMContentLoaded', () => {
    const arBox = document.getElementById('arBox');
    const marker = document.getElementById('marker');
    const counterDisplay = document.getElementById('counter');
    const colorBtn = document.getElementById('changeColor');
    
    // rotar el cubo
    function rotateBox() {
        let rotation = 0;
        const rotationSpeed = 2; 
        
        rotationInterval = setInterval(() => {
            rotation += rotationSpeed;
            if (rotation >= 360) rotation = 0;
            arBox.setAttribute('rotation', `0 ${rotation} 0`);
        }, 16); // ~60fps
    }

    //detener la rotación
    function stopRotation() {
        if (rotationInterval) {
            clearInterval(rotationInterval);
            rotationInterval = null;
        }
    }

    // evento 
    marker.addEventListener('markerFound', () => {
        counter++;
        counterDisplay.textContent = counter;
        
        // inicia rotacion
        if (!rotationInterval) {
            rotateBox();
        }
    });

    // evento 
    marker.addEventListener('markerLost', () => {
        console.log('Marcador perdido');
        // detener rotación cuando desaparece el cubo
        stopRotation();
    });

    // cambiar el color del cubo
    colorBtn.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        arBox.setAttribute('material', 'color', randomColor);
        
        // Pequeño efecto de escala al cambiar color
        arBox.setAttribute('animation__scale', {
            property: 'scale',
            to: '1.2 1.2 1.2',
            dur: 200,
            easing: 'easeInOutQuad',
            dir: 'alternate'
        });
    });
});
