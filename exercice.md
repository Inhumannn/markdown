# 📘 Exercise

## 🧾 Algorithm Code

```pseudo
ALGORITHM mySequence
// Simple sequential instructions

CONSTANT THRESHOLD : real <- 13.25

VARIABLE valA, valB : real
         counter     : integer
         word, goodbye : string

BEGIN
  valA <- 0.56
  valB <- valA
  valA <- valA * (10.5 + THRESHOLD)
  counter <- 1
  counter <- counter + 10
  word <- "Hello"
  goodbye <- "Goodbye!"
END
```

---

## 🔎 Step-by-step reasoning

BEGIN
THRESHOLD = 13.25
valA = 0.56
valB = valA = 0.56
valA = 0.56 _ (10.5 + 13.25) = 0.56 _ 23.75 = 13.3
counter = 1
counter = 1 + 10 = 11
word = "Hello"
goodbye = "Goodbye!"
END

````

---

## 🔢  Even numbers from 0 to 100

```pseudo
ALGORITHM evenNumbers
// Display even numbers from 0 to 100

VARIABLE number : integer

BEGIN
  FOR number <- 0 TO 100 STEP 2 DO
    print(number)
  END FOR
END
````

---

## 🧩 Guessing game with FOR loop

```pseudo
ALGORITHM guessTheNumber
// Game where the user must guess the secret number

CONSTANT secretNumber : integer <- 52

VARIABLE playerGuess, i : integer
         hasWon : boolean

BEGIN
  hasWon <- FALSE

  FOR i <- 1 TO 10 DO
    IF hasWon = FALSE THEN
      print("What is the secret number between 1 and 100?")
      print("Attempt number: ", i, "/10")
      input(playerGuess)

      IF playerGuess = secretNumber THEN
        print("You win in ", i, " tries!")
        hasWon <- TRUE
      ELSE IF playerGuess < secretNumber THEN
        print("It's higher! You have ", 10 - i, " tries left.")
      ELSE
        print("It's lower! You have ", 10 - i, " tries left.")
      END IF
    END IF
  END FOR

  IF hasWon = FALSE THEN
    print("Game over! The secret number was ", secretNumber)
  END IF
END
```

---

## 🧩 Guessing game with WHILE loop

```pseudo
ALGORITHM guessTheNumber
// Game where the user must guess the secret number

CONSTANT secretNumber : integer <- 52

VARIABLE playerGuess, i, maxTries : integer
         hasWon : boolean

BEGIN
  hasWon <- FALSE
  i <- 1
  maxTries <- 10

  WHILE i <= maxTries AND hasWon = FALSE DO
    print("What is the secret number between 1 and 100?")
    print("Attempt number: ", i, "/10")
    input(playerGuess)

    IF playerGuess = secretNumber THEN
      print("You win in ", i, " tries!")
      hasWon <- TRUE
    ELSE IF playerGuess < secretNumber THEN
      print("It's higher! You have ", 10 - i, " tries left.")
    ELSE
      print("It's lower! You have ", 10 - i, " tries left.")
    END IF

    i <- i + 1
  END WHILE

  IF hasWon = FALSE THEN
    print("Game over! The secret number was ", secretNumber)
  END IF
END

```

---
