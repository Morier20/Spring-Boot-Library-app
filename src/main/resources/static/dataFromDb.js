'use strict'

export function dataFromDb(position, length = 4) {
    fetch("http://localhost:8080/books")
        .then(response => response.json())
        .then(data => {
            position.innerHTML = '';

            if (!position) {
                console.error("Error: Element not found!");
                return;
            }

            const booksToDisplay = Math.min(length, data.length);

            for (let i = 0; i < booksToDisplay; i++) {
                const newPanel = document.createElement("div");
                newPanel.classList.add("panel");

                const textPart = document.createElement("div");
                textPart.classList.add("lowerPart");

                const textContainer = document.createElement("h3");
                textContainer.classList.add("bookInformation");

                const bookName = document.createElement("a");
                bookName.classList.add("bookTitle");
                bookName.textContent = data[i].name;

                const bookAuthor = document.createElement("span");
                bookAuthor.classList.add("bookAuthor");
                bookAuthor.textContent = data[i].author;


                textContainer.appendChild(bookName);
                textContainer.appendChild(document.createElement("br"));
                textContainer.appendChild(bookAuthor);
                textPart.appendChild(textContainer);

                const image = document.createElement("div");
                image.classList.add("upperPart");

                const imageContent = document.createElement("img");
                imageContent.src = "src/empty-image.svg";
                imageContent.alt = "Book Image";

                image.appendChild(imageContent);
                newPanel.appendChild(image);
                newPanel.appendChild(textPart);
                position.appendChild(newPanel);
            }
        })
        .catch(error => console.error("Error: ", error));
}
