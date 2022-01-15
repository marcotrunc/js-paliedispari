//  ! Esercizio 1
/*Palidroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma*/

// Recupero elementi in pagina
const userWordField = document.getElementById('user-word');
const buttonWord = document.getElementById('button-word');

const answerContainer = document.getElementById('answer-container');
const answer = document.getElementById('answer');
// Recuper Elementi al click

buttonWord.addEventListener('click', function () {
    userWord = (userWordField.value).trim();
    console.log(userWord);
    if (userWord === getinvertedWord(userWord)) {
        answer.innerHTML = "La parola è palindroma";
        answerContainer.classList.remove('d-none');
    } else {
        answer.innerHTML = "La parola non è palindroma";
        answerContainer.classList.remove('d-none');
    };
});



// Funzione che controlla la parola inserita
function getinvertedWord(word) {
    // Dichiarazione della variabile di concatenazione
    let invertedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        invertedWord += word[i];
    }
    return invertedWord;
};

// ! Esercizio 2
/*Pari e Dispari
   L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
   Generiamo un numero random (sempre da 1 a 5) per il computer
   (usando una funzione).
   Sommiamo i due numeri
   Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
   Dichiariamo chi ha vinto. */

// Ricavo elementi in pagina
const selectionField = document.getElementById('selection');
const userNumberField = document.getElementById('user-number');
const button = document.getElementById('button');
const result = document.getElementById('result');


// Raccolgo i dati al click
button.addEventListener('click', function () {
    // Acquisizione valori
    const selectionValue = selectionField.value;
    const userNumber = parseInt(userNumberField.value);
    // Somma
    const sum = userNumber + getCpuNumber(1, 5);
    console.log(`La somma è ${sum}`);
    // verifica se la somma è pari o dispari
    if (selectionValue === pod(sum)) {
        result.innerText = 'Hai Vinto!';
        console.log("hai vinto");
    } else {
        result.innerText = 'Hai Perso!';
        console.log("hai perso");
    }
    // Rimozione classe per visibilità
    result.classList.remove('d-none');
});

// Funzione che mi genera un numero random
function getCpuNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Funzione che determina se un numero è positivo o negativo
function pod(num) {
    if (num % 2) return "dispari";
    else return "pari";
}