# 🧠 Algorithme⁺

## 📌 Sommaire

- [🧩 Les conditions](#-les-conditions)
- [✅ Exemple de condition simple](#-exemple-de-condition-simple)
- [🔄 Sélection à choix multiples](#-selection-à-choix-multiples)
- [🔁 La boucle POUR (for)](#-la-boucle-pour-for)

---

## 🧩 Les conditions

Les structures conditionnelles permettent de prendre des décisions dans un programme.  
Voici les deux formes principales :

- `SI ... ALORS ... FIN SI`
- `SI ... ALORS ... SINON ... FIN SI`

---

### ✅ Exemple de condition simple

```pseudo
ALGORITHME conditionSimple
// Cet algorithme demande une valeur entière et affiche son double si elle est inférieure à un seuil

CONSTANTE seuil : entier <- 10

VARIABLE val : entier

DEBUT
  afficher("Entrez un nombre entier")
  saisir(val)

  SI val < seuil ALORS
    afficher("Voici son double : ", val * 2)
  SINON
    afficher("Voici la valeur de base : ", val)
  FIN SI
FIN
```

---

## 🔄 Sélection à choix multiples

Voici deux approches pour gérer des choix multiples dans un programme :

### 📜 Première méthode : `SELON`

```pseudo
ALGORITHME afficheGenre
// Affiche un texte en fonction du genre d'une personne

VARIABLE genre : chaîne

DEBUT
  SELON genre
    "M" : afficher("Monsieur")
    "Mme" : afficher("Madame")
    "Mlle" : afficher("Mademoiselle")
    "autre" : afficher("Non genré")
  FIN SELON
FIN
```

### 📜 Deuxième méthode : `SI ... SINON SI ... SINON`

```pseudo
ALGORITHME afficheGenre
// Affiche un texte en fonction du genre d'une personne

VARIABLE genre : chaîne

DEBUT
  SI genre = "M" ALORS
    afficher("Monsieur")
  SINON SI genre = "Mme" ALORS
    afficher("Madame")
  SINON SI genre = "Mlle" ALORS
    afficher("Mademoiselle")
  SINON
    afficher("Non genré")
  FIN SI
FIN
```

---

## 🔁 La boucle POUR (for)

La boucle **POUR** est utilisée lorsque vous avez besoin de répéter une action plusieurs fois, avec un nombre d'itérations connu à l'avance. Elle permet d'éviter l'utilisation répétée de conditions `SI` et de simplifier le code.

### Exemple de la boucle POUR

```pseudo
ALGORITHME faitLeTotal
// Effectue la somme des valeurs saisies

VARIABLE nbVal, count : entiers
          valeur, totalValeurs : réels

DEBUT
  afficher("Combien de valeurs voulez-vous saisir ?")
  saisir(nbVal)

  totalValeurs <- 0

  POUR count <- 1 À nbVal FAIRE
    afficher("Donnez une valeur : ")
    saisir(valeur)
    totalValeurs <- totalValeurs + valeur
  FIN POUR

  afficher("Le total des ", nbVal, " valeurs est : ", totalValeurs)
FIN
```

> **Résumé** : La boucle **POUR** permet de répéter un bloc d'instructions un nombre déterminé de fois, ce qui est utile lorsque le nombre d'itérations est connu à l'avance. Elle remplace efficacement une série de conditions `SI` et simplifie le programme.
