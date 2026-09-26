const elephantFacts = [
    "La trompe d’un éléphant lui sert à respirer, sentir, communiquer et saisir des objets.",
    "Les éléphants peuvent utiliser des sons très graves pour communiquer sur de longues distances.",
    "La peau des éléphants est sensible : ils prennent souvent des bains de poussière ou de boue pour se protéger du soleil et des insectes.",
    "Les éléphants sont herbivores et passent une grande partie de leur journée à chercher et manger des végétaux.",
    "Les éléphants d’Afrique et d’Asie se distinguent notamment par la forme de leurs oreilles.",
    "Un éléphanteau peut se tenir debout peu après sa naissance, même s’il lui faudra du temps pour maîtriser sa trompe.",
    "Les éléphants contribuent à la vie de leur habitat en dispersant des graines lorsqu’ils se déplacent.",
    "Les éléphants sont des animaux sociaux : ils entretiennent des liens étroits au sein de leur groupe familial."
];

const factOutput = document.querySelector('#elephant-fact');
const factButton = document.querySelector('#fact-button');
let displayedFactIndex = 0;

factButton.addEventListener('click', () => {
    let newFactIndex = displayedFactIndex;

    while (newFactIndex === displayedFactIndex) {
        newFactIndex = Math.floor(Math.random() * elephantFacts.length);
    }

    displayedFactIndex = newFactIndex;
    factOutput.textContent = elephantFacts[displayedFactIndex];
});
