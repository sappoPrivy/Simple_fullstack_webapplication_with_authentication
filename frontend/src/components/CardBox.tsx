import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  heading: string;
}

export const CardBox = ({ children, heading }: Props) => {
  return (
    <>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-3 text-center">{heading}</h4>
          {children}
        </div>
      </div>
    </>
  );
};
