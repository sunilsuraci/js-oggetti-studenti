
//creare un oggetto che descriva uno studente

const student = {
    nome: 'Sunil',
    cognome: 'Suraci',
    eta:'21',
};

//stampare in console attraverso un ciclo for-in

for(let key in student) {
    console.log(key);
    console.log(student[key]);
};

//creare un array di oggetti di studenti

let students =[
    {
        nome: 'Mario',
        cognome: 'rossi',
        eta: '20',
    },
    {
        nome: 'Giuseppe',
        cognome: 'Verdi',
        eta: '23',
    },
    {
        nome: 'Marco',
        cognome: 'bianchi',
        eta: '22',
    },

];

//ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.

for(let i = 0; i < students.length; i++ ) {
    let studentCurrent = students[i];
    console.log('Nome: ' + studentCurrent.nome);
    console.log('Cognome: ' + studentCurrent.cognome);
};

//dare la possibilità all'utente, attraverso 3 promt(), di aggiungere
// un nuovo oggetto studente con : nome, cognome,eta

let nomeStudent = prompt('inserisci nome studente: ');
let cognomeStudent = prompt('inserisci cognome studente: ');
let etaStudent = prompt('insrisci età studente: ');

//aggiungi nuovo studente all'array di studenti

students.push({
    nome: nomeStudent,
    cognome: cognomeStudent,
    eta: etaStudent,
});

//ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà

for(let  i= 0; i < student.length; i++){
    let studentCurrent = students[i];
    console.log('Nome: ' + studentCurrent.nome);
    console.log('Cognome: ' + studentCurrent.cognome);
    console.log('Età: ' + studentCurrent.eta);
};
