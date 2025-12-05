
async function main() {
  console.log("- 1 - START of main function");
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

  // il n'est pas possible d'utiliser await en dehors d'une fonction async
  // vous devez donc appeler les fonctions que vous allez écrire ci dessous

  // wait 100 ms
  console.log("- 2 - BEFORE await");
  await new Promise( resolve => setTimeout(resolve, 10));
  console.log("- 3 - AFTER await");

  console.log("- 4 - END of main function");
}

async function retrieveCharacteristic() {
const response = await fetch("https://swapi.dev/api/species/1");
const species = await response.json();
return species;
}

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

async function awaitFunction() {
  retrieveCharacteristic();
  console.log("= a = BEFORE main call");
  await main();
  console.log("= b = AFTER main call");
}

awaitFunction();

