'use strict'

import { getAllDataFromDb } from "../api/dataFromDB.js";
import { newArrivals } from "../api/dataFromDB.js";
class bookPanel{
    constructor(bookTitle,author,imageLink){
        this.bookTitle = bookTitle;
        this.author = author;
        this.imageLink = imageLink;
    }
    createNewBookPanel(){
        //Created main container of panel
        const newPanel = document.createElement("div");
        newPanel.classList.add("panel");
        //Created container for image 
        const image = document.createElement("div");
        image.classList.add("upperPart");

        const imageContent = document.createElement("img");
        imageContent.src = this.imageLink;
        imageContent.alt = "error while loading image";
        image.appendChild(imageContent);

        newPanel.appendChild(image); //Adding upper part of container
        //Created container for text part Title,author,etc...
        const textPart = document.createElement("div");
        textPart.classList.add("lowerPart");

        const bookName = document.createElement("a");
        bookName.classList.add("bookTitle");
        bookName.textContent = this.bookTitle;

        const textContainer = document.createElement("h3");
        textContainer.classList.add("bookInformation");

        const bookAuthorContainer = document.createElement('small')
        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("bookAuthor");
        bookAuthor.textContent = this.author;

        bookAuthorContainer.appendChild(bookAuthor);
        textContainer.appendChild(bookName);
        textContainer.appendChild(document.createElement("br"));
        textContainer.appendChild(bookAuthorContainer);
        textPart.appendChild(textContainer);

        newPanel.appendChild(textPart); //Adding lower part of container
        return newPanel;
    }
}
export async function displayingBooksPanels() {
    const data = await getAllDataFromDb();
    const length = 10;
    const recommendedContainer = document.querySelector("#bookPanelsRecommended");
    const booksToDisplay = Math.min(length, data.length);
    if(data){
        for (let i = 0; i < booksToDisplay; i++) {
            const newBookPanel = new bookPanel(data[i].name, data[i].author, "src/empty-image.svg");
            recommendedContainer.appendChild(newBookPanel.createNewBookPanel());
        }
    }
    else{
        console.error('Error while displaying data');
    }
}
export async function displayNewArrivals() {
    const data = await getAllDataFromDb();
    const arrivals = await newArrivals();
    console.log(data);
    console.log(arrivals);
    
    if (data && arrivals) {
        const arrivalsContainer = document.querySelector("#bookPanelsArrivals");
            let bookCounter = 0;
            Object.entries(arrivals).forEach(([key, arrival]) => {
            const date = new Date(arrival.arrival_date); 
            const currentDateString = new Date().toISOString().split('T')[0];
            const currentDate = new Date(currentDateString); 
            const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));

            
            if (Math.abs(diffInDays) <= 5) {
                const bookId = arrival.book_id; 
                console.log(bookId);
                const found = Object.values(data).find(item => item.id === bookId);
                if (found && bookCounter<4){
                    const bookData = found; 
                    const newBookPanel = new bookPanel(bookData.name, bookData.author, "src/empty-image.svg");
                    arrivalsContainer.appendChild(newBookPanel.createNewBookPanel()); 
                    bookCounter+=1;
                } 
                else{
                    console.error(`Book with id ${bookId} not found in data`);
                }
            }
            
        });
        
    } else {
        console.error('arrivals or data is not an object or is null');
    }
}

