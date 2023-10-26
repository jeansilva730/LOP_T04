let saida = "";
let ave1 = 0;
let ave2 = 0;

for (let i = 0; i < 2; i++){
    let voltas = parseInt(prompt());
    let media = 0;
    for (let j = 0; j < voltas; j++){
        let km = parseInt(prompt());
        media += km;
    }
    
    media /= voltas;
    
    if (i === 0){
        ave1 = media;
    } else {
        ave2 = media;
    }
}

if ( ave1 > ave2 ) {
    saida = "O primeiro Avestruz é mais rápido";
} else if ( ave2 > ave1 ) {
    saida = "O segundo Avestruz é mais rápido";
} else {
    saida = "Empate";
}

alert(saida);
