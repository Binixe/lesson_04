const lionFacts = [
	"Les lions sont les seuls grands félins qui vivent habituellement en groupes sociaux stables.",
	"Le rugissement d’un lion peut porter sur plusieurs kilomètres dans des conditions favorables.",
	"Les lions se reposent souvent pendant une grande partie de la journée, surtout quand il fait chaud.",
	"Les lionceaux naissent avec des taches sur leur pelage, qui s’estompent souvent en grandissant.",
	"La crinière du lion mâle varie selon l’individu et peut être influencée par son âge et son environnement.",
	"Les femelles d’une troupe sont souvent apparentées et peuvent participer ensemble aux soins des petits.",
	"La queue du lion se termine par une touffe de poils, une caractéristique que l’on ne voit pas chez tous les félins.",
	"Les lions communiquent aussi par des odeurs et des marques, en plus des rugissements et des postures."
];

const factOutput = document.querySelector('#lion-fact');
const factButton = document.querySelector('#fact-button');
let currentFactIndex = 0;

factButton.addEventListener('click', () => {
	let nextFactIndex = currentFactIndex;

	while (nextFactIndex === currentFactIndex) {
		nextFactIndex = Math.floor(Math.random() * lionFacts.length);
	}

	currentFactIndex = nextFactIndex;
	factOutput.textContent = lionFacts[currentFactIndex];
});
