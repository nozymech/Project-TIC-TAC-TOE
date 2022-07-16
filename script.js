let clickNumber = 0 ;

let GameBoard = (function(){
    'use strict';
    let gameBoard = document.getElementById("gameBoard");
    for (let i = 0; i < 9; i++) {
        let x = document.createElement('button');
        x.className = "square";
        x.id = i;
        x.innerText = "" ; 
        gameBoard.append(x);
    };
})();

const boardSquares = document.querySelectorAll("button.square");
boardSquares.forEach((button)=>{
    button.addEventListener('click',()=>{
        clickNumber = clickNumber +1;
        console.log(clickNumber);
        if (clickNumber==1 || clickNumber==3 || clickNumber==5 || clickNumber==7 || clickNumber==9 ){
            button.innerText= "O";
        } else if (clickNumber==2 || clickNumber==4 || clickNumber==6 || clickNumber==8) {
            button.innerText= "X";
        }
	})
})

