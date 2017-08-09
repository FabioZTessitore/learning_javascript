// index.js

// node index.js

// stampa su console
console.log('Hello, World!');
console.log('Ciao Mondo!\n');

// concatenazione di stringhe
const msg = "Hello, " + "World!"
console.log('Concatenazione di stringhe:');
console.log(msg);

// lunghezza di una stringa
console.log('\nLa stringa \"' + msg + '\"');
console.log("e' lunga " + msg.length + " caratteri.");

// estrazione di un carattere
console.log('\nCarattere alla posizione di indice 4:');
console.log(msg.charAt(4));

// estrazione di una sottostringa
console.log('\nSottostringa da indice 7 a 12:');
console.log(msg.substring(7, 12));

// ricerca di una carattere
console.log('\nIl carattere W si trova alla posizione:');
console.log(msg.indexOf('W'));
