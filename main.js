const etch = document.getElementById('etch');
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);

let gridSize;
do {
    gridSize = prompt('Dimensions? (1-100)');
} while (gridSize > 100 || gridSize < 1)

let tiles = createGrid(gridSize);


function createGrid(num) {
    for (let i = 0; i < num ** 2; i++) {
        let div = document.createElement('div')
        div.classList.add('tile');
        div.addEventListener('mouseover', color);
        etch.append(div);
    }
    
    etch.style['grid-template-columns'] = `repeat(${num}, ${100 * (1/num)}%)`;
    etch.style['grid-template-rows'] = `repeat(${num}, ${100 * (1/num)}%)`;

    return document.getElementsByClassName('tile');
}

function color(e) {
    e.target.style['background-color'] = 'black';
}

function reset () {
    for (const tile of tiles) {
        tile.style['background-color'] = 'white';
    }
}
