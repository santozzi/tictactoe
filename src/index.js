// TO-DO: Implement game below
class Logical {
    //matriz de 4x4
      matrix = 
        ['', '', '','',
        '', '', '','',
        '', '', '','',
        '', '', '','']
      
    
      constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        //turn x
        this.turn = true;
      }
      insertXorY(cell){
        if(this.turn){
          this.matrix[cell] = 'X';
        }else{
          this.matrix[cell] = 'O';
        }
        this.turn = !this.turn;
      }
      tictacktoe(cell){

      }

      showMatrix(){
        console.log(this.matrix);
      }
      
    
    
    }

function getTiles(){
    return document.getElementsByClassName('tile')
}
const tiles = getTiles()


function getPlayers(){
    return document.getElementsByClassName('player')
}
const players = getPlayers()
const player_1 = players[0];
const player_2 = players[1];
//pedir el nombre del player desde un input box
const player_1_name = prompt("Enter player 1 name");
player_1.innerHTML = player_1_name;
const player_2_name = prompt("Enter player 2 name");
player_2.innerHTML = player_2_name;


const move = new Logical(player_1_name, player_2_name);
console.log(move.turn);

for(let i = 0; i < tiles.length; i++){
    tiles[i].addEventListener('click', function(){
        if(tiles[i].innerHTML === '' && move.turn){
            move.insertXorY(i);
            tiles[i].innerHTML = 'X'
        }
        else if (tiles[i].innerHTML === '' && !move.turn){
            move.insertXorY(i);
            tiles[i].innerHTML = 'O'
        }
        console.log(move.showMatrix());
    })
    
    
}


