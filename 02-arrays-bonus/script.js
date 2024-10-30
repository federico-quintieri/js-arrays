const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
for (let i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(checkCharacters);
function checkCharacters(varIngresso) {
  return varIngresso.length >= 5;
}
for (let i = 0; i < longNames.length; i++) {
  console.log(`${longNames[i]} contiene 5 o più caratteri.`);
}
// 3. Rimuovi 'Ed' dall'array teachers

// Ciclo l'array per controllare gli elementi prima di rimouverne uno
for (let i = 0; i < teachers.length; i++) {
  console.log(`PRIMA => All'indice: ${i} c'è ${teachers[i]}`);
}

let indexElemento = teachers.indexOf("Ed");

// Ciclo l'array per controllare gli elementi dopo aver rimosso 'Ed'
teachers.splice(indexElemento, 1);
for (let i = 0; i < teachers.length; i++) {
  console.log(`DOPO => All'indice: ${i} c'è ${teachers[i]}`);
}

const indexEd = teachers.includes('Ed');
console.log("Is Ed in the array ? " + indexEd);