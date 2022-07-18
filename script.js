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
  const refresh = () => {
    for (let i = 0; i < board.length; i++) {
         let x = document.createElement('button');
         x.className = "square";
         x.id = i;
         x.innerText = board[i] ; 
         gameBoard.append(x);
     };
    
  }
  return {refresh};
})();

displayController.refresh();

const boardSquares = document.querySelectorAll("button.square");
boardSquares.forEach((button)=>{
    button.addEventListener('click',()=>{
        clickNumber = clickNumber +1;
        if (clickNumber==1 || clickNumber==3 || clickNumber==5 || clickNumber==7 || clickNumber==9 ){
            button.innerText= "O";
            clickButton = Number(button.id);
            board.splice(clickButton,1,"O");
            check();
            console.log(clickButton);
            console.log(board);

            status.innerText= "X turn"
        } else if (clickNumber==2 || clickNumber==4 || clickNumber==6 || clickNumber==8) {
            button.innerText= "X";
            clickButton = Number(button.id);
            board.splice(clickButton,1,"X")
            check();
            console.log(clickButton);
            console.log(board);
            status.innerText= "O turn"
        }
	})
})

let check = () => {
    if (board[0] != "" && board[0] == board[1] && board[1] == board[2]){
        board[0] == "O" ? console.log("O win") : console.log("X win")
    }else if (board[3] != "" && board[3] == board[4] && board[4] == board[5]){
        board[3] == "O" ? console.log("O win") : console.log("X win")
    }else if (board[6]!= ""&& board[8] != "" && board[6] == board[7] && board[7] == board[8]){
        board[6] == "O" ? console.log("O win") : console.log("X win")
    }else if (board[0] != ""&& board[0] == board[3] && board[3] == board[6]){
        board[0] == "O" ? console.log("O win") : console.log("X win")
    }else if (board[1] != ""&& board[1] == board[4] && board[4] == board[7]){
        board[1] == "O" ? console.log("O win") : console.log("X win")
    }else if (board[2] != ""&& board[2] == board[5] && board[5] == board[8]){
        board[2] == "O" ? console.log("O win") : console.log("X win")
    }else if (board[0] != ""&& board[0] == board[4] && board[4] == board[8]){
        board[0] == "O" ? console.log("O win") : console.log("X win")
    }else if (board[2] != ""&& board[2] == board[4] && board[4] == board[6]){
        board[2] == "O" ? console.log("O win") : console.log("X win")
    }
};
