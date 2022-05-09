var play1 = 0;
var play2 = 0;


var placar;


const empty = play1 != -1 && play2 != -1 ? 'Os Jogadores são válidos' : 'Jogadores inválidos'

console.log(empty)



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



/// IF Ternário

// const socket = play1 > 0 || play2 > 0 ? 'Jogador marcou ponto.' : 'Placar Zerado!'


// console.log(socket)