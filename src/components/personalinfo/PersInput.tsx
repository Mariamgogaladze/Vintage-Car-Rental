import React from 'react';

interface InputType {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function PersInput({ label, type, placeholder, value, onChange }: InputType) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="personalinfo-input">
      <label>
        {label} <span className="required">*</span> <br />
        <input
          className="person-input"
          type={type}
          placeholder={placeholder}
          required
          autoComplete="on"
          value={value}
          onChange={handleChange}
        />
      </label>
      <p className="required-text">This field is required</p>
    </div>
  );
}

export default PersInput;
