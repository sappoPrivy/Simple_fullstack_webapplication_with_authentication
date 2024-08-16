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
      ></button>
    </div>
  );
};
