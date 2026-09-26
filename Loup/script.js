const wolfFacts = [
    "Le hurlement aide les loups à communiquer et à faire entendre leur présence sur de longues distances.",
    "Les loups peuvent parcourir de longues distances pour explorer leur territoire ou chercher de la nourriture.",
    "Dans une meute, les adultes participent aux soins et à la protection des louveteaux.",
    "Le loup gris peut s’adapter à des milieux très différents, des forêts aux montagnes.",
    "Les loups communiquent aussi par les odeurs, les postures et les expressions du visage."
];

const factButton = document.querySelector("#fact-button");
const factText = document.querySelector("#wolf-fact");
let previousFactIndex = 0;

factButton.addEventListener("click", () => {
    let nextFactIndex;

    do {
        nextFactIndex = Math.floor(Math.random() * wolfFacts.length);
    } while (nextFactIndex === previousFactIndex);

    previousFactIndex = nextFactIndex;
    factText.textContent = wolfFacts[nextFactIndex];
});