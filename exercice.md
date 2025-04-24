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
