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


// if (anniPasseggero <= 18) {
//   costoBiglietto = costoBiglietto - (costoBiglietto * 20 / 100);
//   console.log(costoBiglietto);
// } else if (anniPasseggero >= 65) {
//   costoBiglietto = costoBiglietto - (costoBiglietto * 20 / 100);
//   console.log(costoBiglietto);
// }


// 1. 
// let anniPasseggero = parseInt('Quanti anni hai?');
// let kmTotali = parseInt('quanti km dovrai effettuare?');
// const scontoMinori = 20;
// const scontoOver = 40;


// 2.

// prendo il pulsante da html a js e gli dico le funzioni al suo interno
const btn = document.getElementById('#generate_price')
btn.addEventListener('click', function(){
  // prendo i valori dai campi in html
  let nomeUtente = document.getElementById('#name').value;
  let kmTotali = document.getElementById('#km').value;
  // fascia età per applicare sconti
  let fasciaEta = document.getElementById('#age').value
  // faccio dei log di verifca
  console.log(nomeUtente);
  console.log(kmTotali);
  console.log(fasciaEta);

  const prezzoKm = 0.21;
  let costoBiglietto = prezzoKm * kmTotali;

  //imposto il prezzo in base all'età
   if (fasciaEta == 2) {
     costoBiglietto = costoBiglietto - (costoBiglietto * 20 / 100);
     console.log(costoBiglietto);
   } else if (fasciaEta == 3) {
     costoBiglietto = costoBiglietto - (costoBiglietto * 40 / 100);
     console.log(costoBiglietto);
   } else if (fasciaEta == 1) {
    costoBiglietto = costoBiglietto;
    console.log(costoBiglietto);
   }
  })


