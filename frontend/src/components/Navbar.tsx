import React, { ReactNode } from "react";
import "/home/sappo/simple_fullstack_app/frontend/src/styles/Navbar.css";
import { useNavigate } from "react-router-dom";

interface Props {
  activeChild: string;
  children: ReactNode;
}
export const Navbar = ({ activeChild, children }: Props) => {
  // List of all pages
  // Then map the pages
  // If pagename matches activeChild -> add active to the className
  const pages = ["home", "profile", "about"];
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <div className="sidebar">
        {pages.map((page, index) =>
          page === activeChild ? (
            <a
              aria-current="true"
              key={index}
              className="active"
              onClick={() => navigate("/" + page)}
            >
              {page}
            </a>
          ) : (
            <a
              className="border-bottom border-1 border-grey"
              key={index}
              onClick={() => navigate("/" + page)}
            >
              {page}
            </a>
          )
        )}
      </div>
      <div className="main-content">
        <h1>{activeChild}</h1>
        {children}
      </div>
    </div>
  );
};
