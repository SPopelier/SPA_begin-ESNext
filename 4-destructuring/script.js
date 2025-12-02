//4.1 Découverte

const [a, b, c, d] = [1, 2, 3, 4];
console.log(a, b, c, d);

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};
console.log(first, last, c, age);

//4.2 Application
Object.values(data).forEach(perturbation => {
    console.log(perturbation.texte, perturbation.dateDebut, perturbation.dateFin);
})

const perturbation = {
    "id": 108939,
    "dateDebut": "07/01/2019 05:20",
    "dateFin": "31/12/2050 23:59",
    "heureDebut": "00:00:00",
    "heureFin": "00:00:00",
    "latitude": -1,
    "longitude": -1,
    "weekEnd": "2",
    "listeLigneArret": "SEM_C1",
    "texte": "C1 : Travaux en Centre-ville |L'itinéraire de la ligne est dévié en direction de Cité Jean Macé par la rue Lesdiguières et le boulevard Gambetta entre les arrêts Chavant et Docteur Mazet. L'arrêt Victor Hugo, en direction de Cité Jean Macé, n'est pas desservi. Vous pouvez vous reporter à l'arrêt Gambetta, situé boulevard Gambetta. L'arrêt Docteur Martin, en direction de Cité Jean Macé, est transféré rue Lesdiguières. ",
    "plan": "https://www.tag.fr/include/downloadInfoCompPerturbation.php?f=RESTEZ_En_ligne_031218.pdf",
    "visibleTC": true,
    "visibleVoiture": false,
    "visibleVelo": false,
    "visibleVenteTitres": false,
    "visibleBandeauSite": false,
    "visibleBandeauAppli": false
}

function ajouterPerturbation({
    type= "restriction_ltc",
    heureDebut = "00:00:00",
    heureFin = "00:00:00",
    latitude = -1,
    ...rest
    }) {
data["tete"]={type, heureDebut, heureFin, latitude, ...rest}
}

ajouterPerturbation(perturbation);
console.log(data);