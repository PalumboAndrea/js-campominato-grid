
/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

let button = document.querySelector('.btn');

// PARTE MAIN CON LI SQUARES (MAIN SQUARE E MINI SQUARES)

let main = document.getElementById('main-square-container');

function getMiniSquareColored(a, b){
    a.addEventListener('click', function(){
        a.classList.toggle('light-blue')
        confirm("Hai selezionato la cella " + b);
    })
}

let num = 0;

button.addEventListener('click', function(){
    let mainSquare = document.createElement('div');
    mainSquare.classList.add('main-square', 'd-flex', 'flex-wrap');
    main.append(mainSquare);

    for (let i=0; i<100; i++){
        let miniSquares;
        miniSquares = document.createElement('div');
        miniSquares.classList.add('mini-square', 'd-flex', 'justify-content-center', 'align-items-center');   
        mainSquare.append(miniSquares);
        num = num +1
        miniSquares.append(num);
        getMiniSquareColored(miniSquares, i+1);
    }
    
})






















