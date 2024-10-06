// TO-DO: Implement game below
import Logical from './logical.js';
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
//player_1_name = prompt("Enter player 1 name");
const player_1_name = "A"
player_1.innerHTML = player_1_name;
//const player_2_name = prompt("Enter player 2 name");
const player_2_name = "B"
player_2.innerHTML = player_2_name;


const move = new Logical(player_1_name, player_2_name);
console.log(move.turn);

for(let i = 0; i < tiles.length; i++){
    tiles[i].addEventListener('click', function(){
        if(tiles[i].innerHTML === '' && move.turn){
            tiles[i].innerHTML = 'x'
            move.insertXorY(i);
            
        }
        else if (tiles[i].innerHTML === '' && !move.turn){
          tiles[i].innerHTML = 'o'  
          move.insertXorY(i);
            
        }
        console.log(move.showMatrix());
    })
    
    
}
const restart = document.getElementById('restart-btn');
restart.addEventListener('click', function(){
    for(let i = 0; i < tiles.length; i++){
        tiles[i].innerHTML = '';
    }
    move.reset();
    console.log(move.showMatrix());
});


