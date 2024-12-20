import React from 'react';

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={{ padding: '10px', fontSize: '16px', width: '20%' }}
    />
  );
};

export default Input;
