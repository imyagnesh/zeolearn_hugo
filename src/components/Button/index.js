import React from 'react';
import './style.css'

const Button = ({ disable, children, style, ...props }) => {
  return (
    <button type="button" className="btn" style={{ color: disable ? 'gray' : 'blue', ...style }} {...props}>
        {children}
    </button>
  );
};

export default Button;
