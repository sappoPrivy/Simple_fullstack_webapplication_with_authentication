import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  //heading: string;
}

export const CardBox = ({ children /*, heading*/ }: Props) => {
  return (
    <>
      <div className="card border-1 m-2">
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};
