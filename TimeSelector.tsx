import React from "react";

interface TimeSelectorProps {
  label: string;
  value: string;
  onChange: (time: string) => void;
  validate?: (time: string) => boolean; // Optional validation function
  errorMessage?: string; // Error message to display
}

const TimeSelector: React.FC<TimeSelectorProps> = ({
  label,
  value,
  onChange,
  validate,
  errorMessage,
}) => {
  const handleChange = (time: string) => {
    if (!validate || validate(time)) {
      onChange(time); // Update parent state
    }
  };

  return (
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">{label}</label>
      <div className="col-sm-10">
        <input
          type="time"
          className="form-control form-control-lg"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {/* Error Message */}
      {errorMessage && (
        <div className="col-sm-12 mt-2">
          <div className="alert alert-danger">{errorMessage}</div>
        </div>
      )}
    </div>
  );
};

export default TimeSelector;
