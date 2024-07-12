# Js Biglietto Treno

# Obiettivo

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

# Cosa Fare
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

# Ragionamento

- Devo comprare un biglietto:
1. Chiedere all'utente dove deve andare (i chilometri da fare)
2. Chiedere l'età del passeggero
3. Calcolo il prezzo base del biglietto
4. Calcolo Sconti
4.1. SE il passeggero è minorenne applicare sconto del 20%, ALTRIMENTI prezzo intero
4.2. SE il passeggero è Over 65 applicare sconto del 40%, altrimenti prezzo intero

