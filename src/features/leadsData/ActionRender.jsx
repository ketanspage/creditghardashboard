import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ActionRender = ({ rowData, setOpen, setData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/app/leads/${rowData.id}`);
  };

  return (
    <button onClick={handleClick}>
      <AiOutlineEye className="h-8 w-8" />
    </button>
  );
};

export default ActionRender;
