
# Phase 1 – Programming Fundamentals
## Week 1 – Switch Statements, Objects, Nested Arrays, and Loops

---

## 📅 Day 2 – Switch Statements & Object Basics

**Repo**: `phase1-programming-fundamentals`  
**Folder**: `week1/day2`  
**Commit message**: `day2: switch statements and objects basics`

---

### ⏱ 0:00 – 0:10 → Setup
- [ ] Create `week1/day2/` folder.
- [ ] Create files:
  - `switch.js`
  - `objects.js`
  - `practice.js`

### ⏱ 0:10 – 0:40 (30 min) → Video + Practice 1
- [ ] 🎥 Watch **1:32:15 → 1:41:11** (Switch Statements)  
  [Video Link](https://www.youtube.com/watch?v=PkZNo7MFNFg&t=55335s)
- Topics:
  - Basic `switch` structure
  - `case`, `break`, `default`
  - Multiple cases returning the same value

💻 **Practice in `switch.js`**:
1. Write a program that takes a number 1–7 and prints the day of the week.
2. Write another `switch` that converts a grade letter (`A`, `B`, `C`, `D`, `F`) to a message (“Excellent”, “Good”, etc.).

✅ Commit:
```bash
git add .
git commit -m "day2: switch statements practice"
git push
```

### ⏱ 0:40 – 1:20 (40 min) → Video + Practice 2
- [ ] 🎥 Watch **1:49:11 → 1:59:15** (Objects)  
  [Video Link](https://www.youtube.com/watch?v=PkZNo7MFNFg&t=65511s)
- Topics:
  - Creating objects with properties
  - Dot and bracket notation
  - Adding, updating, and deleting properties
  - Checking for a property with `hasOwnProperty`

💻 **Practice in `objects.js`**:
1. Create an object `book` with `title`, `author`, and `year`.
2. Print the `author` using dot notation.
3. Add a new property `pages`.
4. Update `year` to a new value.
5. Delete the `pages` property.
6. Check if `book` has the property `author`.

✅ Commit:
```bash
git add .
git commit -m "day2: object basics practice"
git push
```

### ⏱ 1:20 – 1:50 (30 min) → Mini Project
In `practice.js`:
- Create an object `contacts` with 3 people’s names as keys and their phone numbers as values.
- Write a function `findContact(name)` that:
  - Returns the phone number if it exists.
  - Returns `"Contact not found"` if it doesn’t.

✅ Commit:
```bash
git add .
git commit -m "day2: contacts lookup project"
git push
```

---

## 📅 Day 3 – Nested Arrays & Loops

**Repo**: `phase1-programming-fundamentals`  
**Folder**: `week1/day3`  
**Commit message**: `day3: nested arrays and loops practice`

---

### ⏱ 0:00 – 0:10 → Setup
- [ ] Create `week1/day3/` folder.
- [ ] Create files:
  - `nested-arrays.js`
  - `loops.js`
  - `practice.js`

### ⏱ 0:10 – 0:40 (30 min) → Video + Practice 1
- [ ] 🎥 Watch **2:01:53 → 2:03:06** (Nested Arrays)  
  [Video Link](https://www.youtube.com/watch?v=PkZNo7MFNFg&t=73153s)
- Topics:
  - Multi-dimensional arrays
  - Accessing nested array elements

💻 **Practice in `nested-arrays.js`**:
1. Create an array `matrix` representing a 3x3 grid of numbers.
2. Access and print the value in the second row, third column.

✅ Commit:
```bash
git add .
git commit -m "day3: nested arrays practice"
git push
```

### ⏱ 0:40 – 1:20 (40 min) → Video + Practice 2
- [ ] 🎥 Watch **2:10:15 → 2:22:45** (While, For, Do...While Loops)  
  [Video Link](https://www.youtube.com/watch?v=PkZNo7MFNFg&t=78135s)
- Topics:
  - `while` loop
  - `for` loop
  - Iterating through arrays
  - Nested `for` loops
  - `do...while` loop

💻 **Practice in `loops.js`**:
1. Write a `while` loop that counts from 1 to 5.
2. Write a `for` loop that prints even numbers from 2 to 20.
3. Create a nested `for` loop to print coordinates `(i, j)` for `i` from 0 to 2 and `j` from 0 to 2.

✅ Commit:
```bash
git add .
git commit -m "day3: loops practice"
git push
```

### ⏱ 1:20 – 1:50 (30 min) → Mini Project
In `practice.js`:
- Create a `timesTable(n)` function that prints the multiplication table for `n` from `1` to `10` using loops.

✅ Commit:
```bash
git add .
git commit -m "day3: multiplication table project"
git push
```

---

## 🔄 Notes for Both Days
- Keep each code file short, with clear comments explaining key steps.
- After finishing, write a Markdown file in `notes/` summarizing what you learned each day.
