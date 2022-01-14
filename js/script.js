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

buttonWord.addEventListener('click',function (){
    userWord = (userWordField.value).trim();
    console.log(userWord);
    if(userWord === getinvertedWord(userWord)){
        answer.innerHTML = "La parola è palindroma";
        answerContainer.classList.remove('d-none');
    } else{
        answer.innerHTML = "La parola non è palindroma";
        answerContainer.classList.remove('d-none');
    };
});



// Funzione che controlla la parola inserita
    function getinvertedWord(word){
        // Dichiarazione della variabile di concatenazione
        let invertedWord = '';
        for(let i = word.length -1; i >= 0; i--){
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

