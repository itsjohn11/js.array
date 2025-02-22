const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
for (let i = 0; i < teachers.length; i++) {
    const listTeacher = teachers[i];
    console.log(i + 1, listTeacher); 
}
// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = [4];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick"
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"];
let lastTeachers = teachers.at(6)

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"];
let teacher = teachers.at(1)
console.log(teacher);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.push("Sarah")
teachers[0] = "Sarah"
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"];
let position = isFabioPresent.lastIndexOf("fabio") +1;
// console.log(teachers);

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = null;

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;
