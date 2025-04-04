document.addEventListener("DOMContentLoaded", function(){
const scoreDisplay = document.getElementById("score");
const width = 28;
let score = 0;
const grid = document.querySelector(".grid");

// 0 mur
// 1 vacio
// 2 cova de drac
// 3 rosa
// 4 petalos

const layout = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,4,4,4,0,
    0,5,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,4,0,
    0,4,0,0,0,0,0,1,2,2,2,2,0,0,0,0,0,1,2,2,2,2,0,0,0,0,4,0,
    0,4,0,0,0,0,0,1,2,2,2,2,0,0,0,0,0,1,2,2,2,2,0,0,0,0,4,0,
    0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,4,0,
    0,4,4,4,4,3,4,4,4,4,4,4,4,4,3,4,4,4,4,3,4,4,4,4,4,4,4,0,
    0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,
    0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,
    0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,
    0,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,
    4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,4,4,4,3,4,3,4,4,4,4,5,4,
    0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,
    0,4,4,3,4,4,4,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,
    0,4,0,0,2,2,2,2,1,4,4,4,4,3,4,4,4,0,0,0,0,0,0,0,0,0,0,0,
    0,4,0,0,2,2,2,2,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,
    0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,
    0,3,0,0,0,0,0,0,3,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,
    0,4,4,4,3,4,3,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,
    0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,2,2,2,2,0,0,0,0,0,0,0,
    0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,2,2,2,2,0,0,0,0,0,0,0,
    0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,
    0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,
    0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,3,0,0,
    0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,
    0,4,4,4,5,4,4,4,3,4,4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

]

let squares = [];


//Creat board
function createBoard(){
    for(let i=0; i < layout.length; i++){
        const square = document.createElement('div')
        square.id = i
        if(layout[i]==1){           
        square.classList.add("white")
        }
        else if(layout[i]==0){           
        square.classList.add("muro")
        }
        else if(layout[i]==2){           
        square.classList.add("darkgray")
        }
        else if(layout[i]==3){           
        square.classList.add("rosa")
        }
        else if(layout[i]==4){           
        square.classList.add("petalos")}
        
        else if(layout[i]==5){           
        square.classList.add("libro")}


        grid.appendChild(square);
        squares.push(square)
    }
}
createBoard();
console.log(squares)

let posicioPrincep = 740;
squares[posicioPrincep].classList.add("princep");

function movePrincep(e){
    squares[posicioPrincep].classList.remove("princep");
    switch(e.key
    ){
        case 'ArrowLeft':
        if(!squares[posicioPrincep - 1].classList.contains('muro') && !squares[posicioPrincep - 1].classList.contains('darkgray') )  
            
        posicioPrincep -= 1
        if (squares[posicioPrincep -1] === squares[335]){
            posicioPrincep = 363
        }
            break;
        case 'ArrowRight':
        if(!squares[posicioPrincep + 1].classList.contains('muro') && !squares[posicioPrincep + 1].classList.contains('darkgray') )   
            
        posicioPrincep += 1
        if (squares[posicioPrincep +1] === squares[364]){
            posicioPrincep = 336
        }
            break; 
        case 'ArrowUp':
        if( !squares[posicioPrincep - 28].classList.contains('muro') && !squares[posicioPrincep - 28].classList.contains('darkgray')  )  
         
        posicioPrincep -= 28
             break;
        case 'ArrowDown':
        if(!squares[posicioPrincep + 28].classList.contains('muro') && !squares[posicioPrincep + 28].classList.contains('darkgray') )    
        posicioPrincep += 28
             break; 
    }
    squares[posicioPrincep].classList.add("princep");
    cogerPetalos()
    rosaCogida()
    // checkForWin()
    //checkForgameOver()
    cogerLibro()






}

document.addEventListener('keyup', movePrincep);

function cogerPetalos(){

    if (squares[posicioPrincep].classList.contains('petalos')){
        score++ 
        scoreDisplay.innerHTML=score
        squares[posicioPrincep].classList.remove('petalos')

    }
}

function rosaCogida(){
    
if (squares[posicioPrincep].classList.contains('rosa')){
    score+=10
    scoreDisplay.innerHTML=score
    squares[posicioPrincep].classList.remove('rosa')

}
}

function cogerLibro(){

    if (squares[posicioPrincep].classList.contains('libro')){
        score+=15
        scoreDisplay.innerHTML=score
        squares[posicioPrincep].classList.remove('libro')
    }

}

class Drac {
    constructor(className, startIndex, speed){
    this. className=className
    this.startIndex=startIndex
    this.speed=speed
    this.currentIndex=startIndex
    this.isScared=false
    this.timerId=NaN

    }
}

const dracs =[
    new Drac('drac-azul', 348, 250),
    new Drac('drac-taronja',376, 250),
    new Drac('drac-vermell', 348, 250),
    new Drac('drac-verd', 248, 250),
]

console.log(dracs)
})

