🧑‍💼 Employee Management System (Full Stack)

A fully functional Employee Management Web Application that enables users to perform complete CRUD operations (Create, Read, Update, Delete) on employee data with secure authentication.

The application is built using a React frontend and a FastAPI backend, with SQLite database integration and JWT-based authentication, ensuring a fast, secure, and scalable system.

🚀 Features

🔐 Authentication System

Secure Login system using JWT tokens
Protected API routes (only authenticated users can access data)

🏠 Dashboard

Displays all employee records in a structured format
Real-time data fetched from backend APIs

➕ Add Employee

Add new employee details to the database

✏️ Edit Employee

Update existing employee information

❌ Delete Employee

Remove employee records from the system

🔄 API Integration

Fully integrated with FastAPI REST APIs
Handles CRUD operations efficiently

📱 Responsive UI

Works seamlessly across different screen sizes

🛠️ Tech Stack

💻 Frontend

React.js
Redux Toolkit (State Management)
Axios (API calls)
Bootstrap / CSS

⚙️ Backend

FastAPI (Python framework)
SQLAlchemy (ORM)
SQLite (Database)
JWT Authentication (Token-based auth)

📂 Project Structure

├── frontend/
│   ├── src/
│   │   ├── components
│   │   ├── pages
│   │   │   ├── SignIn
│   │   │   ├── Home
│   │   │   ├── AddEmployee
│   │   │   ├── EditEmployee
│   │   ├── services (API calls)
│   │   ├── store (Redux)
│   │   └── App.js
│
├── backend/
│   ├── app/
│   │   ├── routers
│   │   ├── models
│   │   ├── schema
│   │   ├── repository
│   │   ├── database
│   │   ├── oauth2
│   │   └── main.py
│
├── README.md
└── .gitignore

🔐 Authentication Flow

User logs in via Sign In page
Backend verifies credentials
JWT token is generated
Token is stored in browser (localStorage)
Token is sent in headers for protected routes:
Authorization: Bearer <token>

📸 Screenshots

<img width="1900" height="916" alt="Screenshot 2026-03-31 131642" src="https://github.com/user-attachments/assets/569245c4-8029-400a-b30e-f6336814dc13" />
<img width="1894" height="906" alt="Screenshot 2026-03-31 131613" src="https://github.com/user-attachments/assets/985394c2-965f-471b-aabc-b00cffaba5cd" />
<img width="1892" height="904" alt="Screenshot 2026-03-31 131529" src="https://github.com/user-attachments/assets/bb9f1d83-79f2-4c5a-83bf-c35852c362e5" />
<img width="1885" height="905" alt="Screenshot 2026-03-31 131501" src="https://github.com/user-attachments/assets/77d7d0f8-aae6-46d4-9abc-0e593c91bcca" />
<img width="1292" height="635" alt="Screenshot 2026-03-30 204217" src="https://github.com/user-attachments/assets/0acc4f61-9548-4977-b711-3f219360a127" />




🔑 Key Learnings

Built a full-stack application using React & FastAPI
Implemented JWT-based authentication & protected routes
Designed and integrated RESTful APIs
Used SQLAlchemy ORM for database operations
Managed global state using Redux Toolkit
Handled real-world issues like CORS, authentication, and API errors

📌 Future Improvements

🔍 Search & Filtering employees
📄 Pagination support
👤 Role-based authentication (Admin/User)
🌐 Deployment (Render + Vercel)
🐳 Docker integration
