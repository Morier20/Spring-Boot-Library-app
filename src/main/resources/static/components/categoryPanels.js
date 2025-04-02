"use strict";

class Category {
  constructor(textContent, symbol) {
    this.textContent = textContent;
    this.symbol = symbol;
  }

  createNewCategoryPane() {
    const categoryPanel = document.createElement("div");
    categoryPanel.classList.add("categoryPanel");

    const sectionInformation = document.createElement("a");
    sectionInformation.classList.add("sectionInformation");

    const section = document.createElement("div");
    section.classList.add("section");

    const symbol = document.createElement("span");
    const text = document.createElement("span");
    symbol.classList.add("symbol");
    text.classList.add("text");

    text.textContent = this.textContent;
    symbol.textContent = this.symbol;

    section.appendChild(symbol);
    section.appendChild(text);

    sectionInformation.appendChild(section);

    categoryPanel.appendChild(sectionInformation);

    return categoryPanel;
  }
}

const categories = {
  "Fiction": "📚",
  "Mystery": "🔍",
  "Sci-Fi": "🚀",
  "Romance": "❤️",
  "Non-Fiction": "🧠",
  "Fantasy": "🧙",
};

export function categoryPanels(browseCategories) {
  const allCategoryPanels = document.createElement("div");
  allCategoryPanels.classList.add("allCategoryPanels");

  for (let key in categories) {
    const category = new Category(key, categories[key]);
    const categoryPanel = category.createNewCategoryPane();
    allCategoryPanels.appendChild(categoryPanel);
  }
  browseCategories.appendChild(allCategoryPanels);
}
