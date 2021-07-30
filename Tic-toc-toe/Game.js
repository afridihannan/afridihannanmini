 class Game{
    constructor(){
        console.log("init game");
        this.turn="X";
        this.board=new Array(9).fill(null);
        console.log(this.board);
    }
    nextTurn(){
        if(this.turn=="X"){
            this.turn="O";
        }
        else{
            this.turn="X";
        }
    }
    makeMove(i){
        if(this.endOfGame()){
            return;
        }
        if(this.board[i]){
            return;
        }
        this.board[i]=this.turn;
        let winningComb=this.findWinningComb();
        console.log("Winning combination",winningComb);
    }
    findWinningComb(){
        const winComb=[
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        for(const comb of winComb){
            const[a,b,c]=comb;
            if(this.board[a] && (this.board[a]===this.board[b])&&(this.board[a]===this.board[c])){
                return comb;
            }
        }
        return null;
    }
    endOfGame(){
        let winningComb=this.findWinningComb();
        if(winningComb){
            return true;
        }
        else{
            return false;
        }
    }
}
let game=new Game();
class GameView{
    constructor(){
        console.log("init");
    }
    upDateBoard(game){
        this.upDateTurn(game);
        const winComb=game.findWinningComb();
        for(var i=0;i<game.board.length;i++){
            const tile=document.querySelector(`.board-tiles[data-index='${i}']`);
             tile.textContent=game.board[i];

             let tileType=game.board[i];
             if(game.board[i]=='X'){
                 tileType="tile-X";
             }
             else{
                 tileType="tile-O";
             }
             tile.innerHTML=`<span class="${tileType}">${game.board[i]?game.board[i]:""}</span>`
             tile.classList.remove("winner");
             if(winComb && winComb.includes(i)){
                 tile.classList.add("winner");
             }
        }
        
    }
    winner(){
        let win=document.getElementById('win');
        let winnerComb=game.findWinningComb();
        if(winnerComb){
            
            if(game.board[winnerComb[0]]=="X"){
                win.innerHTML=`<h1>Winner:PlayerX</h1>`;
                // alert("Winner is Player-X")
            }
            else{
                // alert("Winner is PLayer_O")
                win.innerHTML=`<h1>Winner:PlayerO</h1>`;
            }
        }
    }
    no_winner(){
        let win=document.getElementById('win');
        let winnerComb=game.findWinningComb();
        // for(var i=0;i<game.board.length();i++){
        //     if(game.board[i]!=null && !winnerComb)
        // }
        if(!game.board.includes(null)&&!winnerComb){
            win.innerHTML=`<h1>No-Winner</h1>`;
        }
    }
    upDateTurn(game){
        let playerX=document.querySelector(".x");
        let playerO=document.querySelector(".O");
        playerX.classList.remove("active");
        playerO.classList.remove("active");
        if(game.turn=='X'){
            playerX.classList.add("active");
        }
        else{
            playerO.classList.add("active");
        }
    }
}
let gameView=new GameView();


//console.log(gameView.upDateBoard(game));
// console.log(game.turn);
// game.nextTurn();
// game.makeMove(8);
// console.log(game.board);
// console.log(game.turn);
// game.nextTurn();
// game.makeMove(3);
//  console.log(game.board);
//  console.log(gameView.upDateBoard(game));
gameView.upDateBoard(game);
let tiles=document.querySelectorAll(".board-tiles");
tiles.forEach(tile=>{
   tile.addEventListener("click",()=>{
      // console.log(tile.dataset.index);
      CLicked(tile.dataset.index);
   })
});


function CLicked(i) {
    game.makeMove(i);
   // gameView.upDateBoard(game);
    game.nextTurn();
    gameView.upDateBoard(game);
    gameView.winner();
    gameView.no_winner();
}
document.querySelector(".restart").addEventListener("click",()=>{
    onRestart();
});
function onRestart(){
    game=new Game();
    gameView.upDateBoard(game);
    document.getElementById('win').innerHTML=`<h1></h1>`;
}
// let wiiiiii=game.findWinningComb();
//  console.log(wiiiiii);

