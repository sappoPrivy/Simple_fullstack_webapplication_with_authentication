import React from "react";
// import { Button } from "../components/Button";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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
      <div className="row">
        <div className="d-flex justify-content-start">
          <h4 className="">{user.username}</h4>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn rounded border border-1 border-grey"
            type="button"
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>
      </div>
      <Navbar activeChild="home"></Navbar>
    </>
  );
};
