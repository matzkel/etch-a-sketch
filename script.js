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
