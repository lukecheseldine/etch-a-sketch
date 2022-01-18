const wrapper = document.getElementById('wrapper');
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);

let gridSize;
do {
    gridSize = prompt('How big of a grid?');
} while (gridSize > 100)

let tiles = createGrid(gridSize);


function createGrid(num) {
    for (let i = 0; i < num ** 2; i++) {
        let div = document.createElement('div')
        div.classList.add('tile');
        div.addEventListener('mouseover', color);
        wrapper.append(div);
    }
    
    wrapper.style['grid-template-columns'] = `repeat(${num}, 25px)`;
    wrapper.style['grid-template-rows'] = `repeat(${num}, 25px)`;

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
