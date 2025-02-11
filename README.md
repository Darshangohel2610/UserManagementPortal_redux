# 🚀 User Management Portal

A simple **React + Redux Toolkit** application with **Formik, Yup, and Bootstrap** for user management. It allows users to **add, edit, and delete user profiles**, with data managed using a **JSON Server**.

---

## 🌟 Features
- 📌 **Add, Edit, and Delete Users**
- 📌 **Client-side form validation** using Formik + Yup
- 📌 **Bootstrap 5 UI** for a clean and responsive design
- 📌 **Uses Redux Toolkit** for state management
- 📌 **JSON Server as a mock backend**

---

## 📂 Project Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### 2️⃣ Running the App

#### Start JSON Server (Mock API)
We will use json-server to act as a backend for user data.

🔹 **Install JSON Server (if not installed)**
```bash
npm install -g json-server
```

🔹 **Create `db.json` File in the Project Root**
Inside the project folder, create a file called `db.json` and add the following user data:
```json
{
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "profile_pic": "https://via.placeholder.com/50"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@example.com",
            "profile_pic": "https://via.placeholder.com/50"
        }
    ]
}
```

🔹 **Start JSON Server**
Run the following command to start the mock API:
```bash
json-server --watch db.json --port 5000
```
The API will now be available at:
📌 [http://localhost:5000/users](http://localhost:5000/users)

#### Start React App
```bash
npm start
```
The React app will now be running at:
📌 [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack
- **Frontend:** React, Redux Toolkit, Formik, Yup, Bootstrap 5
- **Backend:** JSON Server (for testing)

---

## 📜 License
This project is open-source and available under the MIT License.