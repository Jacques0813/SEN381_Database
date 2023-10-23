import React from "react";

interface IRedButton {
  buttonText: string;
  onClickFunction: () => void;
  width?: string; // Customizable width
  height?: string; // Customizable height
}

const RedButton: React.FC<IRedButton> = ({
  buttonText,
  onClickFunction,
  width = "40px", // Default width
  height = "10px", // Default height
}) => {
  const buttonStyle = {
    width,
    height,
  };

  return (
    <button
      className="group relative overflow-hidden rounded-2xl bg-red-500 text-lg font-bold text-white"
      style={buttonStyle}
      onClick={onClickFunction}
    >
      {buttonText}
      <div className="absolute inset-0 scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30 z-40"></div>
    </button>
  );
};

export default RedButton;