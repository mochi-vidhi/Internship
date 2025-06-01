# 🎓 Student Details System (React.js + Appwrite)

This is a beginner-friendly student details system built using **React.js** for the frontend and **Appwrite** as the backend. It allows users to **store and view student details** such as **Name**, **Student ID**, **age**, and **Marks** .

---

## 🚀 What is Appwrite?

[Appwrite](https://appwrite.io/) is a **self-hosted backend-as-a-service (BaaS)** platform that helps developers build secure web and mobile apps faster.

> 🧠 If you're new to backend development, Appwrite is a perfect starting point.  
You don’t need to write server-side code — just connect your frontend to Appwrite services like Database, Authentication, Storage, etc.

---

## 🔧 How Appwrite Works in This Project

- **Database**: Used to store student records (name, ID, marks).
- **Collections & Documents**: Each student is stored as a document inside a "Students" collection.
- **SDK**: The Appwrite SDK is used in React to connect and perform CRUD operations.

---

## 📦 Features

- ✅ Add new student records
- ✅ View student list
- ✅ Store data in real-time using Appwrite backend

---

## 🧑‍🎓 Student Details Structure

Each student document includes:
- 🆔 **Student ID**
- 👤 **Name**
- 📝 **Marks**

---

## 🛠️ Tech Stack

- Frontend: **React.js**
- Backend: **Appwrite**
- Styling: Basic CSS / Tailwind (optional)

---

## 📸 Screenshots

> *(Add screenshots here if available)*

---

## 📁 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
2. Install dependencies:
   ```bash
   npm install
3. Run the app:
   ```bash
   npm start
4. Setup Appwrite:

Create a project in Appwrite.

Create a Database → Collection → Add Attributes (name, id, marks,age)

Generate an API key and connect it in your React code.
