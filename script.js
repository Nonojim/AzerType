
function afficherResultatScore(score, nombremotmax) {
    console.log("Le score est de " + score + " sur " +nombremotmax)
}
function choisirPhraseOuMot(){
    let choixliste = prompt("Entrez (phrase) ou (mot) pour choisir la liste de jeux")
    while (choixliste !=="mot" && choixliste !== "phrase") {
        choixliste = prompt("Entrez (phrase) ou (mot) pour choisir la liste de jeux")
    }
    return choixliste
}
function lancerBoucleDeJeux(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score ++
        }
    }
    return score
}

function lancerJeux(){
    let choixliste = choisirPhraseOuMot()
    let score = 0
    let nombremotmax = 0

    if (choixliste === "mot") {
        score = lancerBoucleDeJeux(Listmot)
        nombremotmax = Listmot.length
    } else {
        score = lancerBoucleDeJeux(Listphrases)
        nombremotmax = Listphrases.length
    }

    afficherResultatScore(score, nombremotmax)
}