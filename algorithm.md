# Algorithme

### Sommaire

- [Etapes](#Etapes)
- [Composition](#composition)
- [Variable](#variable)
- [Constante](#constante)
- [Types](#Types)

---

## Etapes d'un algorithme

1. Préparation au traitement des données
2. Traitement du problème pas à pas en décomposant
3. Edition du résultat

---

## Composition d'un algorithme

```
ALGORITHME NomAlgorithme
{commentaire de l'algorithme}
DEBUT
  ACTION -> afficher("Hello word!")
FIN
```

---

## Déclaration d'une variable :

```
- VARIABLE <nom de la variable> : type de la variable
```

La Variable permet de réserver de l'espace mémoire pour stocker des données

#### Déclaration de plusieurs variable de même type :

```
- VARIABLE nombreUn, nombreDeux : entier
```

#### Déclaration de plusieurs variable de type différents :

```
- VARIABLE nombreUn, nombreDeux : entier
           nom, prenom : chaîne de caractères
```

---

## Déclaration d'une constante :

Les variables qui ne cangent jamais de valeurs sont appelées CONSTANTE
Il est possible de déclarer ce type de données en écrivant :

```
- CONSTANTE <nom de la constante> : type de la constante
```

```
- CONSTANTE max : entier <- 10
            maxFoisDeux : entier <- max * 2
```

---

## Types de données

4 types de données :

- **Entier** : données numériques positive ou négative
- **Réel** : nombres à virgules
- **Booléen** : Vrai ou faux
- **Chaîne de caractères** : Données alphanumériques

---

## Règles de nommage

Règles à respecter pour le nommage des variables :

1. Commencer par une lettre ou un underscore
2. Peut contenir des chiffres, lettres, underscores, pas de tirets ou points
3. pas de mots clés (pour, tant que, etc.)
4. Sensible à la casse : maVar != mavar
5. Si plusieurs mots : majuscule sur la première lettre de chaque mot sauf premier
6. Le nom doit décrire la variable
7. Prononçable
8. Aussi court que possible, mais aussi long que nécessaire

---
