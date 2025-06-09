# Simple Fullstack Webapplication using Spring boot and React Typescript
Code written by Tenzin Sangpo Choedon

## 📄 Overview
This simple fullstack webapplication has a login, logout, sign-up, profile and home page with menu options. The original vision of this website is to create a fully functional todo-list, integrated with a calendar. Therefore, the database design includes tables for lists, tasks and planned tasks in the calendar. However, the focus shifted to understanding how to utilize and apply the technologies for frontend and backend through Spring Boot and React TypeScript, respectively. Thus, the scope was limited to authentication and home pages. The current fuctionalities includes all CRUD operations for a user instance, which is applied on the postgresSQL database in the docker container.

## 🗂️ Table of Contents

- [Overview](#-overview)
- [Demo](#-demo)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Usage](#-usage)
- [Documentations](#-documentations)

## Demo

!! This is currently being edited !!

## 🏗️ Project Structure

root/  
├── backend/demo/  
│   ├── src/main/  
│   │   ├── java/com/example/demo  
│   │   │   ├── user/  
│   │   │   │   ├── User.java  
│   │   │   │   ├── UserConfig.java  
│   │   │   │   ├── UserController.java  
│   │   │   │   ├── UserRepository.java  
│   │   │   │   └── UserService.java  
│   │   │   └── DemoApplication.java  
│   │   └── resources/applications.properties  
│   └── eval_CCM_subjects.py  
├── frontend/  
│   ├── src/  
│   │   ├── assets/  
│   │   │   │   └── ...  
│   │   ├── components/  
│   │   │   │   └── ...  
│   │   ├── pages/  
│   │   │   │   └── ...  
│   │   ├── styles/  
│   │   │   │   └── ...  
│   │   ├── App.css  
│   │   ├── App.tsx  
│   │   ├── UserContext.tsx  
│   │   └── main.tsx  
│   └── index.html  
├── docs/  
│   ├── database-design.png  
│   └── Requirements.pdf  
├── README.md  
└── .gitignore  

## ✅ Prerequisites

**Java 17**  
- Required OpenJDK packages:  
  ```bash
  sudo apt install openjdk-17-jdk -y
  ```
  
**Node and npm**
- Download nodejs and npm:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

**Docker**
- Download node.js and npm:
  ```bash
  sudo apt install -y docker.io
  ```

## 🚀 Usage

!! This is currently being edited !!

Run the scripts in this order:

1. **Run database in Docker**  
   ```bash
   docker start <container-name-or-id>
   ```
2. **Run Spring Boot Maven-based backend**  
   ```bash
   cd root/backend
   ./mvnw spring-boot:run
   ```
3. **Run React Vite-based Frontend**  
   ```bash
   cd root/frontend
   npm run dev
   ```


## 📘 Documentations
[📄 View the frontend design in Figma](https://www.figma.com/design/UNFxV34ATeXhXqA3p3tdEG/Todo-list-webapplication?node-id=1-2&p=f)

[📄 View the database design in drawio](docs/database-design.png)

[📄 View the requirements of this project](docs/Requirements.pdf)
