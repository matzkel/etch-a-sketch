let rgbColors;
let currentElement;

function createGrid(parentElement, rows = 16, columns = 16) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    for (let i = 0; i < columns; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        for (let j = 0; j < rows; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");

            gridColumn.appendChild(gridElement);
        }
        gridContainer.appendChild(gridColumn);
    }

    gridContainer.addEventListener("click", addGridPainting);
    gridContainer.addEventListener("mouseover", addHoverEffect);
    gridContainer.addEventListener("mouseout", removeHoverEffect);
    parentElement.appendChild(gridContainer);
}

function addGridPainting(event) {
    const gridElement = event.target;

    if (!gridElement.classList.contains("grid-element")) return;

    if (gridElement.classList.contains("painted")) {
        gridElement.style.backgroundColor = "";
        gridElement.classList.remove("painted");
        return;
    }
    gridElement.style.backgroundColor = `rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]})`;
    currentElement.classList.add("painted");
}

function addHoverEffect(event) {
    const gridElement = event.target;

    if (currentElement === gridElement || gridElement.classList.contains("painted")) return;
    currentElement = gridElement;

    rgbColors = getRandomColor();
    currentElement.style.backgroundColor = `rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]})`;
}

function removeHoverEffect() {
    if (currentElement.classList.contains("painted")) return;
    currentElement.style.backgroundColor = "";
}

function getRandomColor() {
    return [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
    ];
}

const container = document.querySelector(".container");
createGrid(container);

const gridButton = document.querySelector(".navigation-bar > button");
gridButton.addEventListener("click", () => {
    const LIMIT = 64;
    
    let rows;
    do {
        rows = prompt("How many rows:");
    } while (!rows || isNaN(rows) || rows <= 0 || rows > LIMIT);

    let columns;
    do {
        columns = prompt("How many columns:");
    } while (!columns || isNaN(columns) || columns <= 0 || rows > LIMIT);

    const gridContainer = document.querySelector(".grid-container");
    gridContainer.removeEventListener("click", addGridPainting);
    gridContainer.removeEventListener("mouseover", addHoverEffect);
    gridContainer.removeEventListener("mouseout", removeHoverEffect);
    gridContainer.remove();

    createGrid(container, rows, columns);
});
