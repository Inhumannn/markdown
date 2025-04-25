# 🧠 Algorithm

## 📌 Summary

- [🚦 Steps of an Algorithm](#-steps-of-an-algorithm)
- [🧬 Basic Structure](#-basic-structure)
- [📦 Variables](#-variables)
- [🔒 Constants](#-constants)
- [📊 Data Types](#-data-types)
- [🏷️ Naming Rules](#-naming-rules)
- [🌍 Variable Scope](#-variable-scope)
- [✔️ Best Practices](#-best-practices)
- [📥 Input and Output](#-input-and-output)
- [🔎 Problem Analysis](#-problem-analysis)
- [🧪 Example Statement](#-example-statement)

---

## 🚦 Steps of an Algorithm

1. Prepare the data
2. Break down the logic
3. Display or return the result

---

## 🧬 Basic Structure

```pseudo
ALGORITHM MyAlgorithm
// Short description here
BEGIN
  print("Hello world!")
END
```

---

## 📦 Variables

> A variable is a little memory box that stores info 🔁

### 🔹 Simple declaration

```pseudo
VARIABLE variableName : Type
```

### 🔹 Multiple of same type

```pseudo
VARIABLE age, height : integer
```

### 🔹 Mixed types

```pseudo
VARIABLE age, height : integer
         name, surname : string
```

---

## 🔒 Constants

> Constants are **fixed values**. You declare them once, they don't change 💎

```pseudo
CONSTANT constantName : Type <- value
```

### Example :

```pseudo
CONSTANT max : integer <- 10
         maxTimesTwo : integer <- max * 2
```

---

## 📊 Data Types

| Type    | Description                |
| ------- | -------------------------- |
| Integer | Whole numbers              |
| Real    | Numbers with decimals      |
| Boolean | TRUE or FALSE              |
| String  | Text (letters, symbols...) |

---

## 🏷️ Naming Rules

1. Start with a **letter** or **underscore**
2. No dash `-`, no dot `.`
3. Avoid keywords (`for`, `while`, etc.)
4. **Case-sensitive** → `myVar` ≠ `myvar`
5. Use **camelCase** for clarity (`mySuperVariable`)
6. Clear name = understandable code
7. **Easy to read & pronounce**
8. **Short but expressive**

---

## 🌍 Variable Scope

> The **scope** defines where a variable can be used in your code.

- Declared **inside a block** → usable only there
- Declared **globally** → usable anywhere
- Always use meaningful names 🙌

---

## ✔️ Best Practices

✅ Comment your code  
✅ Choose meaningful variable names  
✅ Avoid redundancy  
✅ Test often and early  
✅ Keep it readable and structured

---

## 📥 Input and Output

### 🔹 Input (user entry)

```pseudo
input(dataName)
```

### 🔹 Output (display)

```pseudo
print(dataName)
```

### 🔹 Example

```pseudo
input(aNumber)
print("The number is:", aNumber)
```

---

## 🔎 Problem Analysis

> Analyzing = reading between the lines like a detective 🔍

Highlight and note:

- ✅ The **goal** (what to do)
- 📥 The **inputs**
- 📤 The **expected outputs**

---

## 🧪 Example Statement

> We want to calculate and display the **VAT** and the **final price (TTC)** from a given **pre-tax price**.

### Final price depends on:

- 💸 Pre-tax price (HT)
- 📈 VAT rate (20%)
