const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    classe: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    classe: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    classe: "5B",
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// ** Prima applico map per eliminare i dati non necessari (id & age)

const studentsFormatted = students.map((student) => {
  const { name, classe } = student;
  newObjs = {
    name,
    classe,
  };

  return newObjs;
});

console.table(studentsFormatted);

// ** Ora uso find per recuperare la classe

const findClass = studentsFormatted.find((student) => {
  const { classe, name } = student;
  if (name === "Marco Lanci") return classe;
});

console.log(findClass);
