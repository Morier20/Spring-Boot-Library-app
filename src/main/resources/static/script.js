'use strict';

import { modalManipulation } from "./menuModal.js";
import { signInModal } from "./signIn.js";
import { dataFromDb } from "./dataFromDb.js";
import { categoryPanels } from "./categoryPanels.js";
const popUpWindow = document.querySelector('.popUpWindow');
const modalWindow = document.querySelector('.fixed-overlay'); 

// Menu bar buttons opens modal window 
const aboutButton = document.getElementById('aboutButton');
aboutButton.addEventListener('click', (event) => {
    if(modalWindow.style.display==='flex'){
        popUpWindow.innerHTML=" ";
    }
    event.preventDefault();
    const closeButton = document.createElement('input');
    closeButton.type='button';
    closeButton.value='X';
    closeButton.classList.add('closeButton');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const span = document.createElement('span');
    h1.textContent = 'City Library';
    h2.textContent = 'Welcome to City Library,';
    span.textContent = `Your community hub for knowledge, discovery, and connection. 
                        Established in 1987, we've been serving our community for over
                        35 years with a commitment to providing accessible information
                        and resources for all. Our Mission At City Library, we believe
                        that access to information is
                        a fundamental right. Our mission is to inspire lifelong
                        learning, advance knowledge, and strengthen our community
                        by providing free access to information, resources, 
                        and experiences.`;

    popUpWindow.append(closeButton,h1, h2, span);
    modalManipulation(popUpWindow,modalWindow);
});
const servicesButton = document.getElementById('servicesButton');
servicesButton.addEventListener('click', (event) => {
    if(modalWindow.style.display==='flex'){
        popUpWindow.innerHTML=" ";
    }
    event.preventDefault();
    const closeButton = document.createElement('input');
    closeButton.type='button';
    closeButton.value='X';
    closeButton.classList.add('closeButton');
    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    h1.textContent = 'Services';
    span.textContent = 'comming soon';

    popUpWindow.append(closeButton,h1,span);
    modalManipulation(popUpWindow,modalWindow);
});
const eventsButton = document.getElementById('eventsButton');
eventsButton.addEventListener('click', (event) => {
    if(modalWindow.style.display==='flex'){
        popUpWindow.innerHTML=" ";
    }
    event.preventDefault();
    const closeButton = document.createElement('input');
    closeButton.type='button';
    closeButton.value='X';
    closeButton.classList.add('closeButton');
    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    const separator = document.createElement('div');
    separator.classList.add('separator');
    h1.textContent = 'Events';
    span.textContent = 'comming soon';

    popUpWindow.append(closeButton,h1,separator,span);
    modalManipulation(popUpWindow,modalWindow);
});

const signInWindow = document.querySelector('.fixed-overlaySingIn');
const openAccountMenu = document.getElementById('myAccount');
signInModal(signInWindow,openAccountMenu);

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', (event) =>{
    if(modalWindow.style.display==='flex'){
        popUpWindow.innerHTML=" ";
    }
    modalWindow.style.display='none';
    signInWindow.style.display = 'none';
    event.preventDefault();
});
document.addEventListener("DOMContentLoaded", () => {
    const arrivalsContainer = document.querySelector("#bookPanelsArrivals");
    if (arrivalsContainer) {
        dataFromDb(arrivalsContainer, 4);
    }

    const recommendedContainer = document.querySelector("#bookPanelsRecommended");
    if (recommendedContainer) {
        dataFromDb(recommendedContainer, 20);  
    }

    const browseCategories = document.getElementsByClassName('browseCategories')[0];
    if(browseCategories) {
        categoryPanels(browseCategories);
    }

});
fetch("http://localhost:8080/arrivals")
        .then(response => response.json())
        .then(data => console.log(data))


