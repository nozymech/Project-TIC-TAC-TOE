let GameBoard = (function(){
    'use strict';
    let board = ["X","O","O","O","O","X","X","X","O"];
    let gameBoard = document.getElementById("gameBoard");
    for (let i = 0; i < board.length; i++) {
        let x = document.createElement('div');
        x.className = "square";
        x.id = i;
        x.innerText = board[i];
        gameBoard.append(x);
    };
})();

