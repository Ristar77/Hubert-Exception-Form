import React from "react";

interface SubmitButtonProps {
  onClick: (event: React.FormEvent) => void; // Adjusted to accept an event
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => (
  <button type="submit" className="btn btn-primary" onClick={onClick}>
    Submit
  </button>
);

export default SubmitButton;
