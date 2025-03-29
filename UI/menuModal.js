'use strict';

export function modalManipulation(popUpWindow,modalWindow) {
    const closeButton = document.querySelector('.closeButton');
    modalWindow.style.display = 'flex';
    closeButton.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        popUpWindow.innerHTML=" ";
    });

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow) {
            modalWindow.style.display = 'none';
            popUpWindow.innerHTML=" ";
        }
    });
    
}
