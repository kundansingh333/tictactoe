let cells=document.querySelectorAll('.cell');
let stat=document.querySelector('#status');
let resetButton=document.querySelector('#reset');
let currentPlayer="X";
let board=Array(9).fill('');

const winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const checkWinner=()=>{
    for(let i=0;i<winningConditions.length;i++){
        const [a,b,c]=winningConditions[i];
        if(board[a]&&board[a]===board[b]&&board[a]===board[c]){
            return true;
        }
    }
    return false;
}

const checkTie=()=>{
    return board.every(cell=>cell!=='');
}

// cells.addEventListener('click',()=>{
//     console.log('click');
// });
cells.forEach((cell,index)=>{
    cell.addEventListener('click',()=>{
        if(cell.textContent==='' && !checkWinner()){
            cell.textContent=currentPlayer;
            board[index]=currentPlayer;

            //styling
            stat.style.fontWeight="bold";
            stat.style.textAlign="center";
            stat.style.fontSize="2.5em";
            stat.style.color="orange";
            stat.style.marginTop="20px";
            //
            
            if(currentPlayer==='X'){
                stat.style.color="purple";
                cell.style.color="blue";
            }else{
                stat.style.color="blue";
                cell.style.color="purple";
            }

            if(checkWinner()){
                stat.textContent=`Player ${currentPlayer} wins!`;
                stat.style.color="green";
                return;
            }

            if(checkTie()){
                stat.textContent="It's a tie!";
                stat.style.color="red";
                return;
            }
            currentPlayer=currentPlayer==="X"?"O":"X";
            stat.textContent=`Player ${currentPlayer}'s turn`;
            
        }
        
    })
})



resetButton.addEventListener('click', () => {
    board.fill('');
    cells.forEach(cell => (cell.textContent = ''));
    currentPlayer = 'X';
    stat.textContent = "Player X's turn";

    //styling
    stat.style.color = 'black';
    stat.style.fontWeight = 'bold';
    stat.style.fontSize = '2.5em';
    stat.style.textAlign = 'center';
    stat.style.marginTop = '20px';
    //
  });
