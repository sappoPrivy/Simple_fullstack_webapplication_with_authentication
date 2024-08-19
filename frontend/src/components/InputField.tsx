import React from "react";
import "/home/sappo/simple_fullstack_app/frontend/src/styles/InputField.css";

interface Props {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ id, type, label, value, onChange }: Props) => {
  return (
    <div className="form-group mt-2">
      <label className="mb-1">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        className="form-control custom-field-size"
        onChange={onChange}
        required
        autoFocus
      />
    </div>
  );
};
