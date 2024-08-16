import React from "react";

interface Props {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ id, type, label, value, onChange }: Props) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        className="form-control"
        onChange={onChange}
        required
        autoFocus
      />
    </div>
  );
};
