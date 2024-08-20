import React from "react";
import "/home/sappo/simple_fullstack_app/frontend/src/styles/Navbar.css";

interface Props {
  activeChild: string;
}
export const Navbar = ({ activeChild }: Props) => {
  // List of all pages
  // Then map the pages
  // If pagename matches activeChild -> add active to the className
  const pages = ["home", "profile", "larum ipsum"];

  return (
    <div className="nav-container">
      <div className="sidebar">
        {pages.map((page, index) =>
          page == activeChild ? (
            <a
              aria-current="true"
              key={index}
              className="active"
              href={"http://127.0.0.1:5173/" + page}
            >
              {page}
            </a>
          ) : (
            <a
              className="border-bottom border-1 border-grey"
              key={index}
              href={"http://127.0.0.1:5173/" + page}
            >
              {page}
            </a>
          )
        )}
      </div>
      <div className="main-content">
        <h1>Main Content</h1>
        <p>
          This is the main content area. The sidebar is positioned on the right.
        </p>
      </div>
    </div>
  );
};
