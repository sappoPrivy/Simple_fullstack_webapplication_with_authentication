import React, { ReactNode } from "react";
import "/home/sappo/simple_fullstack_app/frontend/src/styles/Alert.css";

interface Props {
  children: ReactNode;
  color: string;
  onClose: () => void;
}

export const Alert = ({ children, color, onClose }: Props) => {
  return (
    <div
      className={
        "alert alert-" + color + " alert-dismissible custom-font-size m-2"
      }
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close custom-size custom-color"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
