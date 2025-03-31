'use strict';

export function signInModal(signInWindow,openAccountMenu) {
    openAccountMenu.addEventListener('click', (event) => {
        event.preventDefault();
        signInWindow.style.display = 'flex';
        signInWindow.style.pointerEvents = 'auto';
        console.log('Sign-in modal opened');
    });

    signInWindow.addEventListener('click', (event) => {
        if (event.target === signInWindow) {
            signInWindow.style.display = 'none';
            signInWindow.style.pointerEvents = 'none';
        }
    });
}
