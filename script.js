const motApplication = ["Cachalot", "Requin", "Dauphin"]
const Listphrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]
let score =0
let choixliste = prompt("Entrez (phrase) ou (mot) pour choisir la liste de jeux")
while (choixliste !=="mot" && choixliste !== "phrase") {
    choixliste = prompt("Entrez (phrase) ou (mot) pour choisir la liste de jeux")
}
if (choixliste === "mot") {
    for (let i = 0; i < motApplication.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + motApplication[i])
        if (motUtilisateur === motApplication[i]) {
            console.log("Bravo !")
            score ++
        } else {
            console.log("Vous avez fait une erreur de frappe.")
        }
    }
    console.log("Votre score est de " + score + " sur " +motApplication.length)
}
if (choixliste === "phrase") {
    for (let i = 0; i < Listphrases.length; i++) {
        let motUtilisateur = prompt("Entrez la phrase : " + Listphrases[i])
        if (motUtilisateur === Listphrases[i]) {
            console.log("Bravo !")
            score ++
        } else {
            console.log("Vous avez fait une erreur de frappe.")
        }
    }
    console.log("Votre score est de " + score + " sur " +motApplication.length)
}