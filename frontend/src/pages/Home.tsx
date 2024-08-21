import React from "react";
// import { Button } from "../components/Button";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
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
      <Sidebar activeChild="Home">
        <p>Welcome to this site!</p>
      </Sidebar>
      <Footer />
    </>
  );
};
