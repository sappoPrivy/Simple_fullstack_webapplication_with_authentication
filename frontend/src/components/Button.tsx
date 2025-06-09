import React from "react";
import "../styles/Button.css";

interface Props {
  children: string;
  color: "primary" | "secondary";
  type: "button" | "submit";
  onClick: (e: { preventDefault: () => void }) => void;
}

export const Button = ({ children, color, type, onClick }: Props) => {
  return (
    <button
      type={type}
      className={
        "btn btn-" + color + " btn-block w-100 mt-3 custom-size fw-medium"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
