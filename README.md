# Job-Application-Tracker

>  A full-stack web app to organize and track your job applications — so nothing falls through the cracks.

![App Screenshot](./screenshots/login_page.png)
![App Screenshot](./screenshots/add_application.png)
![App Screenshot](./screenshots/home_page.png)

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-22.14.0-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-000000)](https://expressjs.com/)

##  Features

- Add, edit, and delete job applications
- Track status per application: **Applied → Interview → Offer → Rejected**
- Log the date applied and any follow-up notes
- Dashboard summary of your application pipeline


## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React 19, React Router            |
| Backend    | Node.js v22, Express 5            |
| Database   | PostgreSQL                        |
| Styling    | CSS, Material UI                  |


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v22+
- npm v11+
- A running [PostgreSQL](https://www.postgresql.org/) instance


#   ## 1. Clone the repo

```bash
git clone https://github.com/elmalamo/Job-Application-Tracker.git
cd Job-Application-Tracker

### 2. Set up environment variables
```bash
# In /server
cp server/.env.example server/.env

# In /client
cp client/.env.example client/.env
```

Fill in the values in both `.env` files — see [Environment Variables](#-environment-variables) below.

### 3. Install dependencies

```bash
# Backend
cd server && npm install

# Frontend
cd ../client && npm install
```

### 4. Run the app
```bash
# Start backend (from /server)
nodemon server.js

# Start frontend (from /client, new terminal)
npm run dev
```

- Frontend → `http://localhost:5173`
- Backend → `http://localhost:3000`




## 🔐 Environment Variables

### `server/.env`
```env
# Database
DB_USER=postgres
DB_HOST=localhost
DB_NAME=job-application-tracker
DB_PASSWORD=your_postgres_password
DB_PORT=5432

# Ports
SERVER_PORT=3000
CLIENT_PORT=5173

# Auth
JWT_SECRET=your_jwt_secret_key
SALT_ROUNDS=10
```

### `client/.env`
```env
# Ports
SERVER_PORT=3000
CLIENT_PORT=5173

# API
VITE_API_URL=http://localhost:3000/api
```


## 📡 API Endpoints

Base URL: `http://localhost:3000/api`

### Auth `/api/auth`

| Method | Endpoint  | Description              | Auth Required |
|--------|-----------|--------------------------|---------------|
| POST   | `/register` | Register a new user    | ❌            |
| POST   | `/login`    | Login and receive token | ❌            |
| POST   | `/logout`   | Logout current user     | ❌            |
| GET    | `/me`       | Get logged in user      | ✅            |

### Applications `/api/applications`

| Method | Endpoint | Description                    | Auth Required |
|--------|----------|--------------------------------|---------------|
| GET    | `/`      | Get all user applications      | ✅            |
| POST   | `/`      | Create a new application       | ✅            |
| PATCH  | `/:id`   | Update an application          | ✅            |
| DELETE | `/:id`   | Delete an application          | ✅            |

## 📄 License

[MIT](LICENSE)

---

## 👤 Author

**Konstantinos Malamas**  
GitHub: [@elmalamo](https://github.com/elmalamo)