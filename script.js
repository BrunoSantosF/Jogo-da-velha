
let tabuleiro;// = [0,1,2,3,4,5,6,7,8];
let player1 = 'X';
let player = document.getElementById('resp');

let home = document.querySelectorAll('.home');
startGame();

function startGame () {
    tabuleiro = Array.from(Array(9).keys());
    document.querySelector('#gameOver').style.display = "none";
    
    for (let i = 0;i < home.length;i++){
        home[i].innerHTML = ''; 
        home[i].addEventListener('click',confirmShift);   
    }
    
}

function changeShift(value){
    player1 = value;
    player.innerHTML = player1;
}

function confirmShift(x){
    
    if (typeof tabuleiro[x.target.id] == 'number'){

        if (player1 === 'O') {
            player1 = 'X';
            
        } else {
            player1 = 'O';
        }
        changeShift(player1);
        Shift(x.target.id,player1);
    }  
}

function Shift(ID,player){
    
    tabuleiro[ID] = player;
    document.getElementById(ID).innerText = player;
    PrintChampions();
}

function PrintChampions(){
    
    if (Boardvictory() === 'X'){
        player.innerHTML = ''
        document.getElementById('player1').innerText = 'Vitoria do Jogador X'; 
        document.querySelector('#gameOver').style.display = "";
       
    }
    else if (Boardvictory() === 'O'){
        player.innerHTML = ''
        document.getElementById('player1').innerText = 'Vitoria do Jogador O';
        document.querySelector('#gameOver').style.display = "";
        
    }
    else if (Boardvictory() === '-'){
        player.innerHTML = ''
        document.getElementById('player1').innerText = 'EMPATE';
        document.querySelector('#gameOver').style.display = "";
        
    };
    
    
}
function Resetar(){
    for(let i =0;i < home.length;i++){
        home[i].innerHTML = '';
        tabuleiro[i] = i;
    }
    document.getElementById('player1').innerText = 'Jogador: ';
    player.innerHTML = 'O'

    startGame();
      
}

function Boardvictory(){
    const play = ['X','O'];
  
    for (let i = 0;i < play.length;i++){
        
        if (tabuleiro[0] === play[i] && tabuleiro[1] === play[i] && tabuleiro[2] === play[i] ){
            return play[i];
        }
        else if (tabuleiro[3] === play[i] && tabuleiro[4] === play[i] && tabuleiro[5] === play[i] ){
            return play[i];
        }
        else if (tabuleiro[6] === play[i] && tabuleiro[7] === play[i] && tabuleiro[8] === play[i] ){
            return play[i];
        }
        else if (tabuleiro[0] === play[i] && tabuleiro[3] === play[i] && tabuleiro[6] === play[i] ){
            return play[i];
        }
        else if (tabuleiro[1] === play[i] && tabuleiro[4] === play[i] && tabuleiro[7] === play[i] ){
            return play[i];
        }
        else if (tabuleiro[2] === play[i] && tabuleiro[5] === play[i] && tabuleiro[8] === play[i]){
            return play[i];
        }
        else if (tabuleiro[0] === play[i] && tabuleiro[4] === play[i] && tabuleiro[8] === play[i]){
            return play[i];
        }
        else if (tabuleiro[2] === play[i] && tabuleiro[4] === play[i] && tabuleiro[6] === play[i]){
            return play[i];
        }

        //console.log(play[i]);
    };

    let sum = 0;
    for (let x =0;x < home.length;x++){
        if(typeof tabuleiro[x] == 'string' ){
            if (sum == 8){
                return '-';
            }
            sum++;
 
        }
    }
}







