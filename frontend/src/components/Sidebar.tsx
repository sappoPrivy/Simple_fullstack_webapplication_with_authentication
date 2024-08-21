import React, { ReactNode } from "react";
import "/home/sappo/simple_fullstack_app/frontend/src/styles/Sidebar.css";
import { useNavigate } from "react-router-dom";

interface Props {
  activeChild: string;
  children: ReactNode;
}
export const Sidebar = ({ activeChild, children }: Props) => {
  // List of all pages
  // Then map the pages
  // If pagename matches activeChild -> add active to the className
  const pages = ["Home", "Profile", "About"];
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="sidebar">
        {pages.map((page, index) =>
          page === activeChild ? (
            <a
              aria-current="true"
              key={index}
              className="active"
              onClick={() => navigate("/" + page.toLowerCase())}
            >
              {page}
            </a>
          ) : (
            <a
              className=""
              key={index}
              onClick={() => navigate("/" + page.toLowerCase())}
            >
              {page}
            </a>
          )
        )}
      </div>
      <div className="main-content">
        <h1 className="border-bottom pb-2">{activeChild}</h1>
        {children}
      </div>
    </div>
  );
};
