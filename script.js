let board = ["","","","","","","","",""];
let gameBoard = document.getElementById("gameBoard");
let status = document.getElementById("status");
let square = document.querySelectorAll("button.square")
let reset = document.getElementById("reset");
let clickButton = "";
let clickNumber = 0 ;

const player = (name,mark,score) => {
  return { name, mark, score };
};

const player1 = player('jeff', "O" , 0);
const player2 = player('peter', "X" , 0);

const displayController = (()=> {
  // game board is composed of nine button
  const create = () => {
    for (let i = 0; i < board.length; i++) {
         let x = document.createElement('button');
         x.className = "square";
         x.id = i;
         x.innerText = board[i] ; 
         gameBoard.append(x);
        };
    };

    // remove all element
  const removeAllChildNodes = (parent) =>  {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    // remove all element & create new game board according to board array 
  const refresh = () => {
        removeAllChildNodes(gameBoard);
        create();
    };

    //in tic tac toe game have three marks in rows wii be win. 3 horizontal rows, 3 vertical rows , 2 oblique rows.
  const check = () => {
      if (board[0] != "" && board[0] == board[1] && board[1] == board[2]){
          board[0] == "O" ? alert("O win") : alert("X win")
          refresh();
      }else if (board[3] != "" && board[3] == board[4] && board[4] == board[5]){
          board[3] == "O" ? alert("O win") : alert("X win")
          refresh();
      }else if (board[6]!= ""&& board[8] != "" && board[6] == board[7] && board[7] == board[8]){
          board[6] == "O" ? alert("O win") : alert("X win")
          refresh();
      }else if (board[0] != ""&& board[0] == board[3] && board[3] == board[6]){
          board[0] == "O" ? alert("O win") : alert("X win")
          refresh();
      }else if (board[1] != ""&& board[1] == board[4] && board[4] == board[7]){
          board[1] == "O" ? alert("O win") : alert("X win")
          refresh();
      }else if (board[2] != ""&& board[2] == board[5] && board[5] == board[8]){
          board[2] == "O" ? alert("O win") : alert("X win")
          refresh();
      }else if (board[0] != ""&& board[0] == board[4] && board[4] == board[8]){
          board[0] == "O" ? alert("O win") : alert("X win")
          refresh();
      }else if (board[2] != ""&& board[2] == board[4] && board[4] == board[6]){
          board[2] == "O" ? alert("O win") : alert("X win")
          refresh();
      }
  };

  return {create,check};
})();

// make a function call to create game board
displayController.create();

// add event listeners to game board after create it
const boardSquares = document.querySelectorAll("button.square");
boardSquares.forEach((button)=>{
    button.addEventListener('click',()=>{
        clickNumber = clickNumber +1; // alter marks according to click Number. Odd: "O" , Even: "X"
        if (clickNumber==1 || clickNumber==3 || clickNumber==5 || clickNumber==7 || clickNumber==9 ){
            button.innerText= "O";
            clickButton = Number(button.id);
            board.splice(clickButton,1,"O");
            console.log(clickButton);
            console.log(board);
            status.innerText= "X turn"
            displayController.check();
        } else if (clickNumber==2 || clickNumber==4 || clickNumber==6 || clickNumber==8) {
            button.innerText= "X";
            clickButton = Number(button.id);
            board.splice(clickButton,1,"X")
            console.log(clickButton);
            console.log(board);
            status.innerText= "O turn"
            displayController.check();
        }
    }, {once : true})
    });
    

