function createGrid(parentElement, rows = 16, columns = 16) {
    const grid = document.createElement("div");
    grid.classList.add("grid-container");

    for (let i = 0; i < columns; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        for (let j = 0; j < rows; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");

            gridColumn.appendChild(gridElement);
        }
        grid.appendChild(gridColumn);
    }

    parentElement.appendChild(grid);
}

const container = document.querySelector(".container");
createGrid(container);

const gridButton = document.querySelector(".navigation-bar > button");
gridButton.addEventListener("click", () => {
    let rows;
    do {
        rows = prompt("How many rows:");
    } while (!rows || isNaN(rows) || rows <= 0);

    let columns;
    do {
        columns = prompt("How many columns:");
    } while (!columns && isNaN(columns) && columns <= 0);

    const gridContainer = document.querySelector(".grid-container");
    gridContainer.remove();

    createGrid(container, rows, columns);
});
