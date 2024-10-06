export default class Logical {
    //matriz de 4x4
    
      
    
      constructor(){
        this.player1 = player1;
        this.player2 = player2;
        //turn x
        this.turn = true;
        this.matrix =[ 
        ['', '', '',''],
        ['', '', '',''],
        ['', '', '',''],
        ['', '', '','']
        ];
      }
      insertXorY(cell){
        if(this.turn){
           this.matrix[Math.trunc((cell)/ 4)][(cell)% 4] = 'X';
           this.verify(Math.trunc((cell)/ 4),(cell)% 4,0,'X');
        }else{
           this.matrix[Math.trunc((cell)/ 4)][(cell)% 4] = 'O';
           this.verify(Math.trunc((cell)/ 4),(cell)% 4,0,'O');
        }
        this.turn = !this.turn;
      }

      verify(x,y,cont,player){
  
        console.log("horizontal ", this.horizontal(x,cont,player));

        let fin = false;
        if(this.horizontal(x,cont,player)){
          console.log("horizontal");
          fin = true;
        }else if(this.vertical(y,cont,player)){
          console.log("vertical");
          fin = true;
        }else if(this.diagonal1(cont,player)){
          console.log("diagonal1");
          fin = true;
        }else if(this.diagonal2(cont,player)){
          console.log("diagonal2");
          fin = true;
        }
        if(fin){
          console.log("Ganador: ", player);
        }
         
       
           
            
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
        diagonal1(cont,player){
            const limitRight = 3;
            const limitDown = 3;
            for(let i = 0; i <= limitRight; i++){
            if(this.matrix[i][i] === player){
                cont++;
            }
            
            }
            return cont===4;
        }
        diagonal2(cont,player){
            const limitRight = 3;
            const limitDown = 3;
            for(let i = 0; i <= limitRight; i++){
            if(this.matrix[i][limitRight-i] === player){
                cont++;
            }
            
            }
            return cont===4;
        }
            
      showMatrix(){
        console.log(this.matrix);
      }
      
      reset(){
        this.matrix =[ 
        ['', '', '',''],
        ['', '', '',''],
        ['', '', '',''],
        ['', '', '','']
        ];
      }
    
    }
