# 🚀 Tasks API

A simple RESTful CRUD API built with **Node.js** and **Express.js** as part of the **FlyRank Backend AI Engineering Internship (Week 2 - BE-01)**.

The API manages an in-memory to-do list and demonstrates the complete **CRUD (Create, Read, Update, Delete)** workflow using REST principles. It also includes interactive API documentation powered by **Swagger UI**.

---

## ✨ Features

- ✅ Get all tasks
- ✅ Get a task by ID
- ✅ Create a new task
- ✅ Update an existing task
- ✅ Delete a task
- ✅ Input validation
- ✅ Proper HTTP status codes
- ✅ Interactive Swagger UI documentation

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Swagger UI Express
- OpenAPI 3.0

---

## 📂 Project Structure

```text
task-api/
│
├── index.js
├── openapi.json
├── package.json
├── package-lock.json
├── README.md
└── node_modules/
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Asheer-abbasi01/task-api.git
```

Navigate into the project folder:

```bash
cd task-api
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Project

Start the server:

```bash
node index.js
```

Or using Nodemon:

```bash
nodemon index.js
```

The server will be available at:

```
http://localhost:3000
```

---

## 📖 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | API information |
| GET | `/health` | Health check |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

---

## 📌 HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| **200** | Request successful |
| **201** | Resource created |
| **204** | Resource deleted successfully |
| **400** | Invalid request data |
| **404** | Task not found |

---

## 📝 Example Requests

### Create a Task

**POST** `/tasks`

```json
{
  "title": "Learn Express"
}
```

### Update a Task

**PUT** `/tasks/1`

```json
{
  "title": "Learn Swagger",
  "done": true
}
```

---

## 💻 Example cURL Request

```bash
curl -i -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d "{\"title\":\"Learn Express\"}"
```

Example Response:

```http
HTTP/1.1 201 Created

{
  "message": "Task is created successfully",
  "task": {
    "id": 4,
    "title": "Learn Express",
    "done": false
  }
}
```

---

## 📚 Swagger Documentation

After starting the server, open:

```
http://localhost:3000/docs
```

Swagger UI allows you to:

- Test all API endpoints
- Send requests directly from the browser
- View request and response schemas
- Explore the complete API documentation

---

## 📷 Swagger UI Screenshot

> Add your Swagger UI screenshot here after completing the project.

Example:

```
images/swagger-ui.png
```

or

```markdown
![Swagger UI](images/swagger-ui.png)
```

---

## 📌 Notes

- This project uses **in-memory storage**, so all tasks are lost when the server is restarted.
- No database is used in this assignment.
- Data exists only while the application is running.

---

## 👨‍💻 Author

**Asheer Hadayat**

- GitHub: https://github.com/Asheer-abbasi01
- LinkedIn: *(Add your LinkedIn profile here if you'd like.)*

---

## 📄 License

This project was created for educational purposes as part of the **FlyRank Backend AI Engineering Internship**.