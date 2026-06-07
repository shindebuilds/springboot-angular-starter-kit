# 🚀 Full Stack Starter Kit

A production-ready full stack starter kit built with **Spring Boot, Angular, MySQL, and JWT Authentication**.

Save hours of setup time by starting with a complete authentication and CRUD foundation. Clone, configure your database, and start building features immediately.

---

## ✨ Features

* 🔐 JWT Authentication & Authorization
* 👤 User Management CRUD APIs
* 🌐 Angular Frontend Connected to Spring Boot Backend
* 🗄️ MySQL Database Integration
* 🏗️ Layered Architecture (Controller → Service → Repository)
* 🔄 RESTful API Design
* 🛡️ Spring Security Configuration
* 🌍 CORS Enabled for Local Development
* 📬 Postman Tested APIs
* ⚡ Ready for Production Enhancements

---

## 🛠️ Tech Stack

### Backend

* Java 17
* Spring Boot 3.5
* Spring Security
* JWT Authentication
* Spring Data JPA
* Hibernate

### Frontend

* Angular 19
* TypeScript
* HTML5
* CSS3

### Database

* MySQL

---

## 📁 Project Structure

```text
fullstack-starter-kit/
│
|
├── controller/
├── service/
├── repository/
├── model/
├── security/
└── config/
│
├── frontend/
│   ├── src/
│   ├── app/
│   ├── components/
│   ├── services/
│   └── guards/
│
└── README.md
```

---

## ⚙️ Backend Setup

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/fullstack-starter-kit.git
```

### 2. Create Database

```sql
CREATE DATABASE fullstack_db;
```

### 3. Configure Database

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fullstack_db
spring.datasource.username=root
spring.datasource.password=your_password
```

### 4. Run Application

Run:

```bash
FullstarterStarterApplication.java
```

Backend will start at:

```text
http://localhost:8080
```

---

## 🎨 Frontend Setup

### Install Dependencies

```bash
npm install
```

### Start Angular Application

```bash
ng serve
```

Frontend will run at:

```text
http://localhost:4200
```

---

## 🔑 Authentication Flow

1. User logs in
2. Backend validates credentials
3. JWT token is generated
4. Token is returned to frontend
5. Frontend stores token
6. Protected APIs require valid JWT token

---

## 📡 API Endpoints

| Method | Endpoint        | Description   | Authentication |
| ------ | --------------- | ------------- | -------------- |
| POST   | /api/auth/login | User Login    | ❌ No           |
| GET    | /api/users      | Get All Users | ✅ Yes          |
| POST   | /api/users      | Create User   | ✅ Yes          |
| PUT    | /api/users/{id} | Update User   | ✅ Yes          |
| DELETE | /api/users/{id} | Delete User   | ✅ Yes          |

---

## 🧪 Testing

Use Postman to test the APIs.

1. Login using `/api/auth/login`
2. Copy JWT token
3. Add token in Authorization header

```text
Bearer <your-jwt-token>
```

4. Access protected endpoints

---

## 🚀 Future Enhancements

* Role-Based Access Control (RBAC)
* Refresh Tokens
* Email Verification
* Password Reset
* Docker Support
* CI/CD Pipeline
* Swagger API Documentation

---

## 📄 License

This project is available for both personal and commercial use.

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
