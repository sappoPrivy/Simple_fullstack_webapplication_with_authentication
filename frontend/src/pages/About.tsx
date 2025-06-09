import React from "react";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const About: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate("/"); // Redirect to Login page
  // };

  if (!user) {
    navigate("/");
    return null;
  }
  return (
    <>
      <Navbar />
      <Sidebar activeChild="About">
        <p>This simple fullstack webapplication has a login, logout, sign-up, profile and home page with menu options. The original vision of this website is to create a fully functional todo-list, integrated with a calendar. Therefore, the database design includes tables for lists, tasks and planned tasks in the calendar. However, the focus shifted to understanding how to utilize and apply the technologies for frontend and backend through Spring Boot and React TypeScript, respectively. Thus, the scope was limited to authentication and home pages. The current fuctionalities includes all CRUD operations for a user instance, which is applied on the postgresSQL database in the docker container.</p>
      </Sidebar>
      <Footer />
    </>
  );
};
