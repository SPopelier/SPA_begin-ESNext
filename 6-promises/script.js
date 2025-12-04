// Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
function first() {
  return sleep(100).then(() => {console.log('message 1');});
}

function second() {
  return sleep(200).then(() => {console.log('message 2');});
}

function third() {
  return sleep(300).then(() => {console.log('message 3');});
}

function secondWithError() {
  return sleep(100).then(() => {throw new Error("catch me if you can");})
}

first().then(secondWithError);
third();

async function retrieveCharacteristic() {
const response = await fetch("https://swapi.dev/api/species/1");
const species = await response.json();
return species;
}

async function main() {
let species = await retrieveCharacteristic();
const response = await fetch(species.people[0]);
const people = await response.json();
console.log(people);
species.people[0];
console.log(species);
const allPeople = species.people.map(url => fetch(url));
const promisePeople = await Promise.all(allPeople);
const toto = promisePeople.map(response => response.json());
const allPeoples = await Promise.all(toto);
console.log(allPeoples);
}
main();

const maPromesse = new Promise((resolve, reject) => {
   document.getElementById("buttonOk").addEventListener("click", function (event) {
     resolve();
   });
      document.getElementById("buttonCancel").addEventListener("click", function (event) {
        reject();
        });
});

maPromesse
  .then(() => console.log("Ok Clicked"))
  .catch(() => console.log("Cancel Clicked"));




/*
console.log(buttonOk instanceof Promise);
buttonOk.then( function (buttonOk) {
console.log("Ok clicked");
},
function (buttonOk) {
throw new TypeError("Not clicked !");
},
);
buttonOk();

let buttonCancel = Promise.resolve("Ok clicked").then(function (button) {
document.getElementById("buttonCancel").addEventListener();
}
);
console.log(buttonCancel instanceof Promise);
buttonCancel.then( function (buttonCancel) {
console.log("Cancel clicked");
},
function (buttonCancel) {
throw new TypeError("Not clicked !");
},
);

buttonCancel();
/*
const users = [
    { name: "Sarah", age: 2 },
    { name: "Alban" }
]
const sarahUser = species.people.find(function(user) {
    return user.name ==="Sarah"
})
//const sarahUser = species.people.find(user => user.name ==="Sarah")
//["Sarah","Alban"]
//[4,4]
//const sarahUser = species.people.map(user => user.name)
/*
[
    fetch("https://swapi.dev/api/people/66/"),
    "https://swapi.dev/api/people/67/",
    "https://swapi.dev/api/people/68/",
    "https://swapi.dev/api/people/74/"
]*/



