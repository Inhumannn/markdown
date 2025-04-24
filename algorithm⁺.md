# 🧠 Algorithme⁺

## 📌 Sommaire

- [🧩 Les conditions](#-les-conditions)
- [✅ Exemple de condition simple](#-exemple-de-condition-simple)

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
// Cet algorithme demande une valeur entière et affiche son
double si elle est inférieure à un seuil

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
