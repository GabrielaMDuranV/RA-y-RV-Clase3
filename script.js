// variables
let counter = 0;

// DOM
document.addEventListener('DOMContentLoaded', () => {
    const animal = document.getElementById('animalModel');
    const marker = document.getElementById('marker');
    const counterDisplay = document.getElementById('counter');
    const colorBtn = document.getElementById('changeColor');
    
    
    let counter = 0;
        
    marker.addEventListener('markerFound', () => {
        counter++;
        counterDisplay.textContent = counter;
    }); 

    marker.addEventListener('markerLost', () => {
        console.log('marcador se perdió');
    }); 

    // Animacion
    colorBtn.addEventListener('click', () => {
        animal.removeAttribute('animation');
        void animal.offsetWidth;
        
        // animacion 
        animal.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            dur: 1000,       
            easing: 'linear', 
            loop: 1           
        });
    });
});

