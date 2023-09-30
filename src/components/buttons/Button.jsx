import React from "react";

function Button({ title='', handleClick, buttonClassName='' }) {
  return (
    
      <button
        className={`btn normal-case btn-primary ${buttonClassName}`}
        onClick={handleClick}
      >
        {title}
      </button>
    
  );
}

export default Button;
