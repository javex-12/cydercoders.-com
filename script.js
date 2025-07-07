const biologyDictionary = {
    "absorption": "(physiology) A process in which one substance permeates another. A fluid permeates or is dissolved by a liquid or solid. Skin absorption is a route by which substances can enter the body through the skin.",
    "acclimatization": "(physiology) Adaptation to a new climate, as with a new temperature or altitude or environment.",
    "acetyl-CoA": "(biochemistry) Acetyl coenzyme A is a molecule participating in many biochemical reactions in carbohydrate, protein and lipid metabolism. Its main function is to deliver the acetyl group to the citric acid cycle (Krebs cycle) to be oxidized for energy production.",
    "acoelomate": "(zoology) A type of animal, such as a flatworm, with a body plan that lacks a fluid-filled cavity between the body wall and the digestive tract. Rather, semi-solid mesodermal tissues between the gut and body wall hold the animal's organs in place. Contrast coelomate and pseudocoelomate.",
    "adaptation": "(evolutionary biology, population biology) Term can apply to an individual organism's adaptation to its environment, the adaptation of organisms to an environment through evolutionary processes, or the population dynamics intrisic to the evolutionary process.",
    "adenine": "(biochemistry) A purine-derived organic compound which is one of the four canonical nucleobases used in the nucleic acids DNA and RNA. Its derivatives are involved in a wide variety of biochemical reactions, including cellular respiration.",
    "aerobic": "Capable of surviving and growing in the presence of oxygen.",
    "amino acid": "(biochemistry) A class of organic compounds containing an amine group and a carboxylic acid group which function as the fundamental building blocks of proteins and play important roles in many other biochemical processes.",
    "anaerobic": "Any organism that does not require molecular oxygen for growth.",
    "animal": "Any member of a clade of multicellular eukaryotic organisms belonging to the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, reproduce sexually, and grow from a blastula during embryonic development. An estimated 7 million distinct animal species currently exist.",
    "antibiotic": "Also called an antibacterial. A type of antimicrobial drug used in the treatment and prevention of bacterial infections.",
    "Archaea": "One of the three recognized domains of organisms, the other two being Bacteria and Eukaryota.",
    "artificial selection": "Also called selective breeding. The process by which humans use animal breeding and plant breeding to selectively control the development of particular phenotypic traits in organisms by choosing which individual organisms will reproduce and create offspring. While the deliberate exploitation of knowledge about genetics and reproductive biology in the hope of producing desirable characteristics is widely practiced in agriculture and experimental biology, artificial selection may also be unintentional and may produce unintended (desirable or undesirable) results.",
    "asexual reproduction": "A type of reproduction involving a single parent that results in offspring that are genetically identical to the parent.",
    "astrobiology": "The branch of biology concerned with the effects of outer space on living organisms and the search for extraterrestrial life.",
    "autoimmunity": "The system of immune responses of an organism directed against its own healthy cells and tissues.",
    "autotroph": "Sometimes used interchangeably with primary producer. An organism capable of producing complex organic compounds from simple substances present in its surroundings, generally by using energy from sunlight (as in photosynthesis) or from inorganic chemical reactions (as in chemosynthesis). Autotrophs do not need to consume another living organism in order to obtain energy or organic carbon, as opposed to heterotrophs."
    // Add more terms here as needed
};

const searchInput = document.getElementById('searchInput');
const definitionArea = document.getElementById('definitionArea');

searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();

    if (searchTerm === "") {
        definitionArea.innerHTML = '<p>Enter a term above to see its definition.</p>';
        return;
    }

    // Basic exact match search
    if (biologyDictionary.hasOwnProperty(searchTerm)) {
        const definition = biologyDictionary[searchTerm];
        definitionArea.innerHTML = `<p><strong>${searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}:</strong> ${definition}</p>`;
    } else {
        // Suggest terms if no exact match is found
        let suggestions = [];
        for (const term in biologyDictionary) {
            if (term.toLowerCase().includes(searchTerm)) {
                suggestions.push(term);
            }
        }

        if (suggestions.length > 0) {
            let suggestionHTML = '<p>Definition not found. Did you mean:</p><ul>';
            suggestions.forEach(suggestedTerm => {
                suggestionHTML += `<li><a href="#" class="suggestion-link">${suggestedTerm}</a></li>`;
            });
            suggestionHTML += '</ul>';
            definitionArea.innerHTML = suggestionHTML;

            // Add event listeners to suggestion links
            document.querySelectorAll('.suggestion-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    searchInput.value = e.target.textContent;
                    // Trigger the search for the clicked suggestion
                    searchInput.dispatchEvent(new Event('keyup', { 'bubbles': true }));
                });
            });

        } else {
            definitionArea.innerHTML = '<p>Definition not found. No suggestions available.</p>';
        }
    }
});
