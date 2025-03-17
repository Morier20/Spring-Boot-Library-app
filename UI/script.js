'use strict'

const aboutButton = document.getElementById('aboutButton'); 
const modalWindow = document.querySelector('.fixed-overlay'); 
const closeButton = document.querySelector('.closeButton')
aboutButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    modalWindow.style.display = 'flex';
});
closeButton.addEventListener('click', () => {
    modalWindow.style.display = 'none'; 
});
modalWindow.addEventListener('click', (event) => {
    if (event.target === modalWindow) {
        modalWindow.style.display = 'none';
    }
});