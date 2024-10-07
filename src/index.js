// TO-DO: Implement game below
const statusBar = document.querySelector('#status');
statusBar.innerHTML = "Game in progress...";
const resetGame = document.querySelector('#restart-btn');
resetGame.style.display = 'none';

function getTiles(){
    return document.getElementsByClassName('tile')
}
const tiles = getTiles()


function getPlayers(){
    return document.getElementsByClassName('player')
}
 


class Logical {
  //matriz de 4x4
  
    
  
    constructor(player1= "Player 1", player2= "Player 2"){
      this.player1 = player1;
      this.player2 = player2;
      this.count=0;
      //turn x
      this.turn = true;
      this.fin = false;
      this.resultado="";
      this.matrix =[ 
      ['', '', '',''],
      ['', '', '',''],
      ['', '', '',''],
      ['', '', '','']
      ];
    }
    insertXorY(cell){
      let fin = false;
      this.count++;
      if(this.turn){
         this.matrix[Math.trunc((cell)/ 4)][(cell)% 4] = 'X';
         fin = this.verify(Math.trunc((cell)/ 4),(cell)% 4,0,'X');
      }else{
         this.matrix[Math.trunc((cell)/ 4)][(cell)% 4] = 'O';
         fin = this.verify(Math.trunc((cell)/ 4),(cell)% 4,0,'O');
      }
      
      if(this.count===16 && !fin){
        this.fin = true;
        this.resultado= "Draw!";
      }else if(fin){
        
        this.resultado = this.turn? `${this.player1} won!`: `${this.player2} won!`;
        this.fin = true;
      }
      this.turn = !this.turn;
    }

    verify(x,y,cont,player){

      

      let fin = false;
      if(this.horizontal(x,cont,player)){
        console.log("horizontal");
        fin = true;
      }else if(this.vertical(y,cont,player)){
        console.log("vertical");
        fin = true;
      }
      
     return fin;
       
     
         
          
    }
    vertical(y,cont,player){
       const limitDown = 3;

      for(let i = 0; i <= limitDown; i++){
        if(this.matrix[i][y] === player){
          cont++;
        }
      }
      return cont===4;
 
    }

    horizontal(x,cont,player){
      const limitRight = 3;
      for(let i = 0; i <= limitRight; i++){
        if(this.matrix[x][i] === player){
          cont++;
        }
      }
      return cont===4;
    }
    
    reset(){
      this.matrix =[ 
      ['', '', '',''],
      ['', '', '',''],
      ['', '', '',''],
      ['', '', '','']
      ];
    }
    showMatrix(){
      console.log(this.matrix);
    }
  }

  const move = new Logical();

  document.querySelector('#player1').classList.add('active');

 
  for(let i = 0; i < tiles.length; i++){
    tiles[i].addEventListener('click', function(){
      if(!move.fin){  
      if(tiles[i].innerHTML === '' && move.turn){
            tiles[i].innerHTML = 'x'
            
            document.querySelector('#player2').classList.add('active');
            document.querySelector('#player1').classList.remove('active');
            move.insertXorY(i);
                       
      
          }
        else if (tiles[i].innerHTML === '' && !move.turn){
          tiles[i].innerHTML = 'o'  
          
          document.querySelector('#player2').classList.remove('active');  
          document.querySelector('#player1').classList.add('active');
          move.insertXorY(i);
          console.log("estado del juego ",move.fin );
        
        }
        if(move.fin){
          document.querySelector('#status').innerHTML = move.resultado;
          document.querySelector('#restart-btn').style.display = 'block';
          
          
        }
      }
        
  
    })

 
}


resetGame.addEventListener('click', function(){
  for(let i = 0; i < tiles.length; i++){
      tiles[i].innerHTML = '';
  }
  move.reset();
  statusBar.innerHTML = "Game in progress...";
  resetGame.style.display = 'none';
  console.log(move.showMatrix());
});

