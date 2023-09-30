import React from "react";

import { PinIcon } from "../../../../assets/icons/PinIcon";

const PinnedButton = ({ isPinnedColumn, onPinToggle, header }) => {
  return (
    <button
      className="btn-xs"
      onClick={() => onPinToggle(header?.field, !isPinnedColumn)}
    >
      <PinIcon
        size={14}
        fill={isPinnedColumn ? "#ff0000" : "black"}
        className={isPinnedColumn ? "text-primary" : "text-neutral-700"}
      />
    </button>
  );
};

export default PinnedButton;
