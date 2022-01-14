console.log('JS OK')
/*Palidroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma*/
    
    // Chiedo una parola all'utente
    const userWord = prompt('Inserisci una parola', 'anna');
    
    // Funzione che controlla la parola inserita
    function getinvertedWord(word){
        // Dichiarazione della variabile di concatenazione
        let invertedWord = '';
        for(let i = word.length -1; i >= 0; i--){
            invertedWord += word[i];
        }
        return invertedWord;
    }
console.log(`La parola invertita è: ${getinvertedWord(userWord)}`);

if(getinvertedWord(userWord) === userWord){
    alert('è palindorma');
} else{
    alert('non è palindorma')
};
