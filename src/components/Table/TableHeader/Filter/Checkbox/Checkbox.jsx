import React from "react";

const Checkbox = ({ checked = false, indeterminate, onChange, label = "" }) => {
  return (
    <div className="form-control py-2">
      <label className="flex flex-row items-center justify-start cursor-pointer">
        <input
          type="checkbox"
          className="checkbox checkbox-xs rounded-sm checkbox-primary mr-2"
          checked={checked}
          ref={(input) => {
            if (input) {
              input.indeterminate = indeterminate;
            }
          }}
          //   indeterminate={selectAllState === "some" ? "true" : undefined}s
          onChange={onChange}
        />
        <span onClick={(e) => e.stopPropagation()} className="label-text">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
