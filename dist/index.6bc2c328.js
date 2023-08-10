let container = document.querySelector(".container");
let cells = document.querySelectorAll(".cell");
let restart = document.querySelector("button");
let cont = document.querySelectorAll(".btn-container");
let audio = new Audio("sound.mp3");
let currentPlayer = "O";
let turn = "X";
function main() {
    createCell();
    makeContainer();
}
function createCell() {
    for(let i = 0; i < 9; i++)makeCell(i);
}
cont.forEach((con)=>{
    con.addEventListener("click", ()=>{
        audio.play();
    });
});
restart?.addEventListener("click", ()=>{
    cells.forEach((cell)=>{
        cell.innerHTML = "";
    });
});
function makeCell(i) {
    cells.forEach((cell)=>{
        cell.addEventListener("click", ()=>{
            // cell.innerHTML = currentPlayer = currentPlayer == "X" ? "O" : "X"
            cell.innerHTML = turn;
            changeTurn();
        });
    });
// box.id = `box - ${i}`
// container?.append(box);
}
function changeTurn() {
    if (turn === "X") turn = "O";
    else turn = "X";
}
function makeContainer() {
    container?.addEventListener("click", runGame);
}
function runGame(e) {
    let cellsId = e.target.id; //html eementan event bogan bosgan div id sini olad
    console.log(cellsId);
    if (cellsId === null) return;
}
main();

//# sourceMappingURL=index.6bc2c328.js.map
