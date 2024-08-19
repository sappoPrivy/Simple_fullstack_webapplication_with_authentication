import React from "react";
import { Button } from "../components/Button";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Home: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to Login page
  };

  if (!user) {
    navigate("/");
    return null;
  }
  return (
    <>
      <div>
        <h4>{user.username}</h4>
        <Button color="primary" type="button" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <Navbar activeChild="home"></Navbar>
    </>
  );
};
