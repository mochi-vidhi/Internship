

# 📅 Day 2 – Exploring APIs in React & CRUD Operations

---

## 📘 What I Learned Today

### 🔹 What is an API?

An **API (Application Programming Interface)** acts like a bridge between two applications so they can talk to each other. APIs allow React apps to fetch data from external servers or services.

---

## ⚛️ Using APIs in React

### 🧠 Basic Syntax to Fetch API Data

```js
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
```
## 🛠️ HTTP Methods I Used

### ✅ GET – Read Data
- Used to fetch data from an API.
- Example: Show list of users or products.
```js
fetch("https://api.example.com/items")
```
### 📝 POST – Create Data
- Used to send new data to the server.
- Example: Add a new student, product, or recipe.
```js
fetch("https://api.example.com/items", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "New Item" })
});
```
### ✏️ PUT – Update Data
- Used to edit existing data.
- Example: Edit student marks or user profile.
```js
fetch("https://api.example.com/items/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Updated Item" })
});
```
### 🗑️ DELETE – Remove Data
- Used to delete a record.
- Example: Remove a product from cart.
```js
fetch("https://api.example.com/items/1", {
  method: "DELETE"
});
```
## 🔍 APIs Explored Today

### 🐙 GitHub API
- Displayed GitHub user profile and repositories.

### 🛍️ Fake Store API
- Rendered products with image, title, and price.

### 😂 Joke API
- Fetched and displayed random jokes.

### 🍲 Food API
- Showed meal recipes with search option.
