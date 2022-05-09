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