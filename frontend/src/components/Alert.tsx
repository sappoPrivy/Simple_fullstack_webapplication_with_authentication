import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
  onClose: () => void;
}

export const Alert = ({ children, color, onClose }: Props) => {
  return (
    <div className={"alert alert-" + color + " alert-dismissible"} role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
        style={{
          width: "0.75em",
          height: "0.75em",
          fontSize: "0.75em",
        }}
      ></button>
    </div>
  );
};
