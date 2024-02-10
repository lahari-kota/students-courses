import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({ title, isLoading, isBackBtn = false, handleClick }) => {
  return (
    <div>
      <button
        className="bg-sky-900 px-4 py-2 rounded text-white font-semibold  flex gap-2 justify-center items-center"
        onClick={handleClick}
      >
        {isBackBtn && <span className="back">{<IoArrowBackSharp />}</span>}
        <span>{title}</span>
        {isLoading && (
          <span className="back">{<AiOutlineLoading3Quarters />}</span>
        )}
      </button>
    </div>
  );
};

export default Button;
