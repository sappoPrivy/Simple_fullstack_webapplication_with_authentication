import React from "react";
import { Button } from "../components/Button";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to Login page
  };
  return (
    <>
      <Button color="primary" type="submit" onClick={handleLogout}>
        Log out
      </Button>
    </>
  );
};
