import React from "react";

interface ClearButtonProps {
  onClear: () => void; // Clear button doesn't need an event
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => (
  <button type="button" className="btn btn-danger" onClick={onClear}>
    Clear
  </button>
);

export default ClearButton;
