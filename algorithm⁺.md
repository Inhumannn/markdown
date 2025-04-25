
# 🧠 Algorithm⁺

## 📌 Table of Contents

- [🧩 Conditions](#-conditions)
- [✅ Simple IF Example](#-simple-if-example)
- [🔄 Multiple Choice Conditions](#-multiple-choice-conditions)
- [🔁 FOR Loop](#-for-loop)
- [🔁 WHILE Loop](#-while-loop)
- [🔄 FOR vs WHILE](#-for-vs-while)
- [🔁 REPEAT WHILE](#-repeat-while)
- [🔄 Loop Types Recap](#-loop-types-recap)
- [⚙️ Functions](#-functions)
- [🚀 Procedures](#-procedures)
- [📦 Arrays](#-arrays)
- [📦 Multidimensional Arrays](#-multidimensional-arrays)
- [🔁 Recursion](#-recursion)
- [📊 Sorting Algorithms](#-sorting-algorithms)

## 🧩 Conditions

Conditional structures let your algorithm **make decisions** and choose a path based on the data.

Common formats:

- `IF ... THEN ... END IF`
- `IF ... THEN ... ELSE ... END IF`

### ✅ Simple IF Example

```pseudo
ALGORITHM simpleCondition
// Ask for a number and show its double if it's below a threshold

CONSTANT threshold : integer <- 10
VARIABLE val : integer

BEGIN
  print("Enter a number:")
  input(val)

  IF val < threshold THEN
    print("Double: ", val * 2)
  ELSE
    print("Original value: ", val)
  END IF
END
```

## 🔄 Multiple Choice Conditions

### 🌀 1. `SWITCH` statement

```pseudo
ALGORITHM displayGender

VARIABLE gender : string

BEGIN
  SWITCH gender
    CASE "M" :
      print("Mister")
    CASE "Mme" :
      print("Madam")
    CASE "Mlle" :
      print("Miss")
    CASE "other" :
      print("Non-binary")
  END SWITCH
END
```

### 🌀 2. `IF ... ELSE IF ...`

```pseudo
ALGORITHM displayGender

VARIABLE gender : string

BEGIN
  IF gender = "M" THEN
    print("Mister")
  ELSE IF gender = "Mme" THEN
    print("Madam")
  ELSE IF gender = "Mlle" THEN
    print("Miss")
  ELSE
    print("Non-binary")
  END IF
END
```

## 🔁 FOR Loop

Use it when the number of repetitions is 🔒 **known**.

```pseudo
ALGORITHM sumValues

VARIABLE nbVal, count : integer
VARIABLE value, total : real

BEGIN
  print("How many values?")
  input(nbVal)

  total <- 0

  FOR count <- 1 TO nbVal DO
    print("Enter a value:")
    input(value)
    total <- total + value
  END FOR

  print("Total is: ", total)
END
```

## 🔁 WHILE Loop

Use it when the number of repetitions is 🌀 **unknown**.

```pseudo
ALGORITHM displayEvenNumbers

VARIABLE count : integer

BEGIN
  count <- 0

  WHILE count <= 100 DO
    print("Even number: ", count)
    count <- count + 2
  END WHILE
END
```

## 🔄 FOR vs WHILE

| Feature         | **FOR**               | **WHILE**                        |
|----------------|-----------------------|----------------------------------|
| When to use    | Fixed number of loops | Unknown number of loops          |
| Init/Update    | Built-in              | Manual                           |
| Condition      | Included              | Separate                         |

## 🔁 REPEAT WHILE

Executes at least **once** before checking the condition.

```pseudo
ALGORITHM positiveValue

VARIABLE value : integer

BEGIN
  REPEAT
    print("Enter a positive value:")
    input(value)
  WHILE value <= 0

  print("You entered: ", value)
END
```

## 🔄 Loop Types Recap

| Loop Type        | Condition Checked | Runs at least once? | Best for...                  |
|------------------|-------------------|----------------------|------------------------------|
| WHILE            | Before            | ❌                   | User input, checks first     |
| REPEAT WHILE     | After             | ✅                   | Guaranteed execution         |
| FOR              | Known count       | ❌                   | Counting, lists              |

## ⚙️ Functions

> Reusable algorithm that **returns a value**. You pass parameters and it gives you one result back.

```pseudo
FUNCTION calculateSum(num1 : integer, num2 : integer)

VARIABLE sum : integer

BEGIN
  sum <- num1 + num2
  RETURN sum
END
```

```pseudo
ALGORITHM main

VARIABLE result : integer

BEGIN
  result <- calculateSum(10, 8)
  print("Result is: ", result)
END
```

## 🚀 Procedures

> Similar to a function, but it **does not return** anything — just executes tasks.

```pseudo
PROCEDURE calculateAndDisplaySum(num1 : integer, num2 : integer)

VARIABLE sum : integer

BEGIN
  sum <- num1 + num2
  print("Sum is: ", sum)
END

ALGORITHM main

BEGIN
  calculateAndDisplaySum(10, 5)
  calculateAndDisplaySum(7, 8)
END
```

## 📦 Arrays

> Store **multiple values** under one variable. Index starts at **0**.

```pseudo
ALGORITHM arrayExample

VARIABLE monTableau[6] : string
VARIABLE i : integer

BEGIN
  FOR i <- 0 TO 5 DO
    monTableau[i] <- i * 3
  END FOR
END
```

### 📘 Real-world Example

```pseudo
ALGORITHM studentScores

VARIABLE notes[6] : real
VARIABLE i, size : integer
VARIABLE text : string

BEGIN
  notes <- [12, 15, 14, 13, 12, 11]

  size <- length(notes)
  print("Length of the array: ", size)

  text <- "toto"
  print(length(text))  // outputs 4
  print(length(notes[0]))  // outputs 2 (if formatted as a string)

  FOR i <- 0 TO length(notes)-1 DO
    notes[i] <- random(0, 20)
  END FOR
END
```

## 📦 Multidimensional Arrays

### 2D Example

```pseudo
ALGORITHM studentMatrix

VARIABLE notes[3][2] : variant
VARIABLE i, j : integer

BEGIN
  notes <- [
    ["Alice", 12],
    ["Bob", 15],
    ["Charlie", 13]
  ]

  print(notes[0][0])  // Alice
  print(notes[0][1])  // 12
END
```

### Fill with random values:

```pseudo
ALGORITHM fill2DArray

VARIABLE myArray[6][5] : integer
VARIABLE i, j : integer

BEGIN
  FOR i <- 0 TO length(myArray)-1 DO
    FOR j <- 0 TO 4 DO
      myArray[i][j] <- random(0, 20)
    END FOR
  END FOR
END
```

## 🔁 Recursion

> (Coming soon — let me know if you want it now! 👀)

## 📊 Sorting Algorithms

### 🔄 Bubble Sort

```pseudo
ALGORITHM bubbleSort

VARIABLE tab[1:n] : integer
VARIABLE i : integer
VARIABLE isSorted : boolean

BEGIN
  isSorted <- FALSE

  WHILE NOT isSorted DO
    isSorted <- TRUE
    FOR i <- 0 TO length(tab)-2 DO
      IF tab[i] > tab[i+1] THEN
        swap(tab[i], tab[i+1])
        isSorted <- FALSE
      END IF
    END FOR
  END WHILE
END
```

### 🎯 Selection Sort

```pseudo
ALGORITHM selectionSort

VARIABLE tab[1:n] : integer
VARIABLE i, j, min : integer

BEGIN
  FOR i <- 0 TO length(tab)-2 DO
    min <- i
    FOR j <- i+1 TO length(tab)-1 DO
      IF tab[j] < tab[min] THEN
        min <- j
      END IF
    END FOR
    IF min ≠ i THEN
      swap(tab[i], tab[min])
    END IF
  END FOR
END
```
