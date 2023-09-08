// Descrizione:** Scrivere un programma che chieda all’utente:

// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// GUIDE

// 1. realizzare programma per calcolo prezzo biglietto
// 2. implementare il programma in due input html e un bottone con risultati riportati in console 
// 3. aggiungere form con dati richiesti e risultato finale stampato in pagina 


// ----------------------------------- 


// 1. 
// let anniPasseggero = parseInt(prompt('Quanti anni hai?'));
// let kmTotali = parseInt(prompt('quanti km dovrai effettuare?'));
// const prezzoKm = 0.21;
// const scontoMinori = 20;
// const scontoOver = 40;
// let costoBiglietto = prezzoKm * kmTotali;

// console.log(anniPasseggero);
// console.log(kmTotali);
// console.log(costoBiglietto);

// if (anniPasseggero <= 18) {
//   costoBiglietto = costoBiglietto - (costoBiglietto * 20 / 100);
//   console.log(costoBiglietto);
// } else if (anniPasseggero >= 65) {
//   costoBiglietto = costoBiglietto - (costoBiglietto * 20 / 100);
//   console.log(costoBiglietto);
// }

// 2.
const nomeUtente = document.getElementById('name').value;
const kilometriTot = document.getElementById('km').value;


const btn = document.getElementById('btn')
btn.addEventListener('click',function(){
  
})

nomeUtente.value

