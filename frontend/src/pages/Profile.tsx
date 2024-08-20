import React from "react";
// import { Button } from "../components/Button";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

export const Profile: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  //   const handleLogout = () => {
  //     logout();
  //     navigate("/"); // Redirect to Login page
  //   };

  if (!user) {
    navigate("/");
    return null;
  }
  return (
    <>
      <Header />
      <Navbar activeChild="profile">
        <h4 className="">Username: {user.username}</h4>
        <h4 className="">Password: {user.password}</h4>
      </Navbar>
    </>
  );
};
