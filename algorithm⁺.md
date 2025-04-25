# 🧠 Algorithm⁺

## 📌 Table of Contents

- [🧩 Conditions](#-conditions)
- [✅ Simple IF Example](#-simple-if-example)
- [🔄 Multiple Choice Conditions](#-multiple-choice-conditions)
- [🔁 The FOR Loop](#-the-for-loop)
- [🔁 The WHILE Loop](#-the-while-loop)
- [🔄 FOR vs WHILE](#-for-vs-while)

---

## 🧩 Conditions

Conditional structures let your program **make decisions**.

Main forms:
- `IF ... THEN ... END IF`
- `IF ... THEN ... ELSE ... END IF`

---

### ✅ Simple IF Example

```pseudo
ALGORITHM simpleCondition
// Asks for an integer and displays its double if it's below a threshold

CONSTANT threshold : integer <- 10
VARIABLE val : integer

BEGIN
  print("Enter an integer number")
  input(val)

  IF val < threshold THEN
    print("Here is its double: ", val * 2)
  ELSE
    print("Original value: ", val)
  END IF
END
```

---

## 🔄 Multiple Choice Conditions

Two ways to handle multiple cases:

### 📜 1. Using `SWITCH`

```pseudo
ALGORITHM displayGender
// Displays a title depending on gender

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

### 📜 2. Using `IF ... ELSE IF ... ELSE`

```pseudo
ALGORITHM displayGender
// Displays a title depending on gender

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

---

## 🔁 The FOR Loop

Used when the number of repetitions is **known** in advance.

```pseudo
ALGORITHM sumValues
// Calculates the sum of input values

VARIABLE nbVal, count : integers
         value, total : reals

BEGIN
  print("How many values do you want to enter?")
  input(nbVal)

  total <- 0

  FOR count <- 1 TO nbVal DO
    print("Enter a value:")
    input(value)
    total <- total + value
  END FOR

  print("The total of ", nbVal, " values is: ", total)
END
```

> ✅ **Tip:** Use `FOR` when you know how many times you’ll repeat a task.

---

## 🔁 The WHILE Loop

Use `WHILE` when the number of iterations is **unknown** — it runs **while a condition is true**.

```pseudo
ALGORITHM displayEvenNumbers
// Displays even numbers up to 100

VARIABLE count : integer

BEGIN
  count <- 0

  WHILE count <= 100 DO
    print("Even number: ", count)
    count <- count + 2
  END WHILE
END
```

> ✅ **Pro tip:** Everything you can do with a `FOR`, you can do with a `WHILE`. But not always the other way around 😎

---

## 🔄 FOR vs WHILE

| Feature        | **FOR**                           | **WHILE**                          |
|----------------|-----------------------------------|------------------------------------|
| Usage          | Known number of loops             | Unknown number of loops            |
| Initialization | Built-in                          | Manual setup                       |
| Update         | Built-in                          | Manual (you write the increment)   |
| Condition check| Part of loop                      | Must be written separately         |

---

## 🧠 When to use FOR or WHILE?

| Situation                              | Use...     |
|----------------------------------------|------------|
| Iterating through a list/array         | 👉 `FOR`    |
| Fixed number of repetitions            | 👉 `FOR`    |
| Waiting for a specific event to happen | 👉 `WHILE`  |

---

🎉 Boom! You now have a clean and sharp **English-style algorithm course** ready to rock in any dev context.  

Tu veux une version `.pdf`, une traduction vers Python ou un petit quizz pour tester tout ça ? Tell me and we go 💥
