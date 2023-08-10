"use strict";
let container = document.querySelector('.container');
let turn = "X";
function main() {
    createCell();
}
function createCell() {
    for (let i = 0; i < 9; i++) {
        makeCell(i);
    }
}
function makeCell(i) {
    const box = document.createElement("div");
    box.classList.add("cell");
    box.id = `box - ${i}`;
    container === null || container === void 0 ? void 0 : container.append(box);
    makeContainer();
}
function changeTurn(turn) {
    if (turn === 'X') {
        turn = 'O';
    }
    else {
        turn = 'X';
    }
}
function makeContainer() {
    container === null || container === void 0 ? void 0 : container.addEventListener("click", runGame);
}
function runGame(e) {
    let cellsId = e.target.id; //html elementan event bogan bosgan div id sini olad
    console.log(cellsId);
    if (cellsId === null)
        return;
}
main();
