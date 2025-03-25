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
const signInWindow = document.querySelector('.fixed-overlaySingIn');
const openAccountMenu = document.getElementById('myAccount');
openAccountMenu.addEventListener('click', (event) => {
    event.preventDefault();
    signInWindow.style.display = 'flex';
    signInWindow.style.pointerEvents = 'auto';
    console.log('click event');
});
signInWindow.addEventListener('click', (event) => {
    if (event.target === signInWindow) {
        signInWindow.style.display = 'none';
        // Reset pointer-events when closing
        signInWindow.style.pointerEvents = 'none';
    }
});