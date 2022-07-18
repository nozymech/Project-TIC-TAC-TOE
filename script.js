let board = ["","","","","","","","",""];
let gameBoard = document.getElementById("gameBoard");
let status = document.getElementById("status");
let square = document.querySelectorAll("button.square")
let reset = document.getElementById("reset");
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
            console.log(button.id);
            
            status.innerText= "X turn"
        } else if (clickNumber==2 || clickNumber==4 || clickNumber==6 || clickNumber==8) {
            button.innerText= "X";
            console.log(button.id);
            status.innerText= "O turn"
        }
	})
})