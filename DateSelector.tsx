import React from "react";

interface DateSelectorProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
  validate?: (date: string) => boolean; // Optional validation function
}

const DateSelector: React.FC<DateSelectorProps> = ({
  label,
  value,
  onChange,
  validate,
}) => {
  const isValidDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return (
      date instanceof Date &&
      !isNaN(date.getTime()) && // Ensure it's a valid date
      dateStr === date.toISOString().split("T")[0] // Ensure it's properly formatted
    );
  };

  const handleChange = (date: string) => {
    if (!isValidDate(date)) {
      alert("Invalid date selected.");
      return;
    }

    if (!validate || validate(date)) {
      onChange(date);
    } else {
      alert("Validation failed for the selected date.");
    }
  };

  return (
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">{label}</label>
      <div className="col-sm-10">
        <input
          type="date"
          className="form-control form-control-lg"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateSelector;
