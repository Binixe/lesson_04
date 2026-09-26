const catFacts = [
    "Le ronronnement peut aussi être un moyen pour le chat de se rassurer.",
    "Le nez de chaque chat possède un dessin unique, un peu comme une empreinte digitale.",
    "Les moustaches aident le chat à percevoir son environnement et à évaluer les passages étroits.",
    "Les chats communiquent beaucoup avec leur posture, leurs oreilles et les mouvements de leur queue.",
    "Un chat qui frotte sa tête contre vous dépose aussi des odeurs familières pour marquer son environnement.",
    "Les chats sont souvent plus actifs à l’aube et au crépuscule, des moments propices à l’exploration.",
    "Le jeu permet au chat d’exprimer ses comportements naturels de poursuite et de capture.",
    "Boire dans une fontaine peut intriguer certains chats, mais chaque félin a ses préférences."
];

const factElement = document.querySelector('#cat-fact');
const surpriseButton = document.querySelector('#surprise-button');
let currentFactIndex = 0;

surpriseButton.addEventListener('click', () => {
    let nextFactIndex = currentFactIndex;

    while (nextFactIndex === currentFactIndex) {
        nextFactIndex = Math.floor(Math.random() * catFacts.length);
    }

    currentFactIndex = nextFactIndex;
    factElement.textContent = catFacts[currentFactIndex];
});
