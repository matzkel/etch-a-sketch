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
    parentElement.appendChild(gridContainer);
}

function addGridPainting(event) {
    const gridElement = event.target;

    if (gridElement.classList.contains("grid-element")) {
        if (gridElement.classList.contains("painted")) {
            gridElement.classList.remove("painted");
            return;
        }

        gridElement.classList.add("painted");
    }
}

const container = document.querySelector(".container");
createGrid(container);

const gridButton = document.querySelector(".navigation-bar > button");
gridButton.addEventListener("click", () => {
    const LIMIT = 64;
    
    let rows;
    do {
        rows = prompt("How many rows:");
    } while (!rows || isNaN(rows) || rows <= 0 || rows >= LIMIT);

    let columns;
    do {
        columns = prompt("How many columns:");
    } while (!columns || isNaN(columns) || columns <= 0 || rows >= LIMIT);

    const gridContainer = document.querySelector(".grid-container");
    gridContainer.removeEventListener("click", addGridPainting);
    gridContainer.remove();

    createGrid(container, rows, columns);
});
