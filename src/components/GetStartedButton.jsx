import React from "react";
import { useNavigate } from "react-router-dom";

const GetStartedButton = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to another page when the button is clicked
    navigate("../pages/Form1");
  };

  return (
    <button onClick={handleClick} className=" bg-red-600 text-white px-6 py-2 rounded-full">
      Fill Form
    </button>
  );
};

export default GetStartedButton; 