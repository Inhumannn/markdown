# 📘 Exercice

## 🧾 Code de l'algorithme

```pseudo
ALGORITHME maSequence
// Instructions séquentielles simples

CONSTANTE SEUIL : réel <- 13.25

VARIABLE valA, valB : réel
         compteur   : entier
         mot, tom   : chaîne

DEBUT
  valA <- 0.56
  valB <- valA
  valA <- valA * (10.5 + SEUIL)
  compteur <- 1
  compteur <- compteur + 10
  mot <- "Bonjour"
  tom <- "Au revoir!"
FIN
```

---

## 🔎 Raisonnement étape par étape

```pseudo
DEBUT
  SEUIL = 13.25
  valA = 0.56
  valB = valA = 0.56
  valA = 0.56 * (10.5 + 13.25) = 0.56 * 23.75 = 13.3
  compteur = 1
  compteur = 1 + 10 = 11
  mot = "Bonjour"
  tom = "Au revoir!"
FIN
```

---

## 🔢 Nombres pairs de 0 jusqu'à 100

```pseudo
ALGORITHME nombrePair
// Affiche les nombres pairs de 0 jusqu'à 100

VARIABLE number : réel <- 0

DEBUT
  POUR number À 100 PAR PAS DE 2 FAIRE
    afficher(number)
  FIN POUR
FIN
```

---

## 🧩 Devinette

```pseudo
ALGORITHME devineLeNombre
{Jeu où l'utilisateur doit deviner un nombre secret}

CONSTANTE nombreSecret : entier <- 52

VARIABLE nombreJoueur, i : entier
         isVictoire : booléen

DEBUT
    isVictoire <- false

    POUR i <- 1 À 10 PAR PAS DE 1 FAIRE

        SI isVictoire = false ALORS
            afficher("Quel est le nombre secret de 1 à 100 ?")
            afficher("Nombre de tentatives : ", i, "/10")
            saisir(nombreJoueur)

            SI nombreJoueur = nombreSecret ALORS
                afficher("C'est gagné en ", i, " tentatives !")
                isVictoire <- true
            FIN SI

            SI nombreJoueur < nombreSecret ALORS
                afficher("C'est plus grand, attention il vous reste ", 10 - i, " essais")
            FIN SI

            SI nombreJoueur > nombreSecret ALORS
                afficher("C'est plus petit, attention il vous reste ", 10 - i, " essais")
            FIN SI
        FIN SI
    FIN POUR

    SI isVictoire = false ALORS
        afficher("Perdu, le nombre secret était ", nombreSecret)
    FIN SI
FIN
```
