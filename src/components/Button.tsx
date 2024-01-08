import React from 'react';

type ButtonProps = React.JSX.IntrinsicElements['button'];

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  return (
    <button
      className={`bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 ${className}`}
      {...rest}
    />
  );
};

export default Button;
