# CLI Todo

A simple Command Line Interface (CLI) Todo application built using **Node.js**, **Commander.js**, **File System (fs)**, and **Chalk**.

This project allows you to manage your todos directly from the terminal by adding, viewing, and deleting tasks. Todos are stored locally in a JSON file.

---

## Features

- ✅ Add new todos
- 📋 View all todos
- 🗑 Delete existing todos
- 🎨 Colored terminal output using Chalk
- 💾 Persistent storage using the Node.js File System

---

## Technologies Used

- Node.js
- Commander.js
- Chalk
- File System (fs)

---

## Installation

### Clone the repository

```bash
git clone https://github.com/dhanik0003/CLI-todo.git
```

### Navigate into the project

```bash
cd CLI-todo
```

### Install dependencies

```bash
npm i
```

---

## Usage

### Add a Todo

```bash
node index.js add "Go to gym"
```

Example Output

```text
Todo added successfully
```

---

### Show All Todos

```bash
node index.js show
```

Example Output

```text
1. Go to gym
2. Do laundry
3. Buy groceries
```

---

### Delete a Todo

```bash
node index.js delete 2
```

Example Output

```text
Deleted the todo from the list successfully
```

---

## Project Structure

```
CLI-todo/
│
├── index.js
├── a.txt
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Author

**Dhanik**

GitHub: https://github.com/dhanik0003

---

# Screenshots

![CLI Todo Demo](Screenshots/snapshot.png)
