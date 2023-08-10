let container = document.querySelector('.container');
let cells = document.querySelectorAll('.cell');
let restart = document.querySelector('button');
let cont = document.querySelectorAll(".btn-container");
let audio = new Audio("sound.mp3");
let currentPlayer = "O";
type Turn = "X" | "O" | "";
let turn: Turn = "X"
function main(): void{ // bunga nma qymat qaytarwn yozamz
    createCell();
    makeContainer();
}

function createCell(): void{ 
    for(let i = 0; i < 9;i++){ 
        makeCell(i);
    }
}

cont.forEach((con)=>{ 
    con.addEventListener("click",()=>{ 
        audio.play();
    });
});

restart?.addEventListener("click", ()=>{ 
    cells.forEach((cell)=>{ 
        cell.innerHTML = ""; 
    })
});

function makeCell(i: Number): void{ 
    cells.forEach((cell)=>{ 
        cell.addEventListener("click",()=>{ 
            // cell.innerHTML = currentPlayer = currentPlayer == "X" ? "O" : "X"
            cell.innerHTML = turn
            changeTurn();
            
        });
    })
    // box.id = `box - ${i}`
    // container?.append(box);
}

function changeTurn(): void{ 
    if(turn === "X"){ 
        turn = "O"
    }
    else{ 
        turn = "X"
    }
}

function makeContainer(): void{
    container?.addEventListener("click", runGame)
    
}

function runGame(e: Event): void{ 
    let cellsId: string = (<HTMLElement>e.target).id;//html eementan event bogan bosgan div id sini olad
    console.log(cellsId);
    if(cellsId === null)return;
    
}

main();