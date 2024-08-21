import React from "react";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
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
      <div className="navbar border">
        <div className="d-flex justify-content-start">
          <span className="navbar-brand mb-0 h1 ms-3 ">Todoloo~</span>
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
    </>
  );
};
