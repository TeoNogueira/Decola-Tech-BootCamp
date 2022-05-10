var play1 = 0;
var play2 = 1;


var placar;

if(play1 != -1) {

    
    if(play1 > 0 && play2 == 0) {
    
        console.log('Jogador 1 marcou ponto.')
        placar = play1 > play2
        } else if(play2 > 0 && play1 == 0){
        
            console.log('Jogador 2 marcou ponto.')
            placar = play2 > play1
    
        } else {
        
            console.log('Placar Zerado!')
        }
    
    }
    

switch (placar) {


case placar = play1 > play2: 
console.log('Jogador 1 venceu!')
break;

case placar = play2 > play1: 
console.log('Jogador 2 venceu!');
break;

default:
console.log('Draw Game!')
}

