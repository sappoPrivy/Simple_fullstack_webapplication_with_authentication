# Simple Fullstack Webapplication with Authentication using Spring boot and React Typescript
Code written by Tenzin Sangpo Choedon, Summer 2024

## 📄 Overview
This simple fullstack webapplication has a login, logout, sign-up, profile and home page with menu options. The original vision of this website is to create a fully functional todo-list, integrated with a calendar. Therefore, the database design includes tables for lists, tasks and planned tasks in the calendar. However, the focus shifted to understanding how to utilize and apply the technologies for frontend and backend through Spring Boot and React TypeScript, respectively. Thus, the scope was limited to authentication and home pages. The current fuctionalities includes all CRUD operations for a user instance, which is applied on the postgresSQL database in the docker container.

## Demo

[![Watch the demo](https://img.youtube.com/vi/N-nHs1oFD2I/0.jpg)](https://www.youtube.com/watch?v=N-nHs1oFD2I)

## 🗂️ Table of Contents

- [Overview](#-overview)
- [Demo](#-demo)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Usage](#-usage)
- [Documentations](#-documentations)

## 🏗️ Project Structure

root/  
├── backend/          # Spring boot Maven-based backend  
│   ├── demo/  
│   │   ├── src/main/  
│   │   │   ├── java/com/example/demo  
│   │   │   │   ├── user/      # User class, configurations, controller, respository and service layer files  
│   │   │   │   └── DemoApplication.java  
│   │   │   └── resources/applications.properties  
│   │   └── Dockerfile    
├── frontend/                #  React Vite-based frontend  
│   ├── src/  
│   │   ├── assets/  
│   │   ├── components/      # Reusable typescript components  
│   │   ├── pages/           # Typescript pages  
│   │   ├── styles/          # CSS styles  
│   │   ├── App.css  
│   │   ├── App.tsx  
│   │   ├── UserContext.tsx  
│   │   └── main.tsx  
│   ├── index.html  
│   └── Dockerfile   
├── docs/  
│   ├── database-design.png  
│   ├── demo.mp4  
│   └── Requirements.pdf  
├── docker-compose.yml        # Multi-container Docker applications (fronent, backend, db)  
├── README.md  
└── .gitignore  

## ✅ Prerequisites

**Docker**
- Download docker (ubuntu):
  ```bash
  sudo apt update
  sudo apt install -y docker.io
  ```

## 🚀 Usage

1. **Run the application through Docker**  
   ```bash
   docker-compose up --build
   ```
   - Database (PostgreSQL) runs in docker container locally
   - Frontend (React Typescript Vite-based app) runs on port 5173
   - Backend (Spring Boot Maven-based app) runs on port 8080

<!-- 
Run the scripts in this order:

1. **Run database in Docker from root**  
   ```bash
   docker-compose up -d
   ```
2. **Run Spring Boot Maven-based backend**  
   ```bash
   cd backend/
   ./mvnw spring-boot:run
   ```
3. **Run React Vite-based Frontend**  
   ```bash
   cd frontend/
   npm run dev
   ```
-->

2. **Test the webapplication on the browser**  
   http://localhost:5173/
   http://localhost:8080/api/v1/user

## 📘 Documentations
[📄 View the frontend design in Figma](https://www.figma.com/design/UNFxV34ATeXhXqA3p3tdEG/Todo-list-webapplication?node-id=1-2&p=f)

[📄 View the database design in drawio](docs/database-design.png)

[📄 View the requirements of this project](docs/Requirements.pdf)
