import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import ClearButton from "./ClearButton";
import TimeSelector from "./TimeSelector";
import NavBar from "./NavBar";
import DateSelector from "./DateSelector";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home";
import OtherPage from "../OtherPage";
import axios from "axios";

function ExceptionForm() {
  // State management
  const [exception, setException] = useState("");
  const [campaign, setCampaign] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [submitterName, setSubmitterName] = useState("");
  const [submitterUNumber, setSubmitterUNumber] = useState("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Track if it's the first or second clear
  const [clearClickCount, setClearClickCount] = useState(0);

  // Handlers
  const handleExceptionChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setException(e.target.value);

  const handleCampaignChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCampaign(e.target.value);

  const handleEmployeeNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmployeeName(e.target.value);

  const handleEmployeeNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmployeeNumber(e.target.value);

  const handleSubmitterNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSubmitterName(e.target.value);

  const handleSubmitterUNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setSubmitterUNumber(e.target.value);

  const handleClear = () => {
    if (clearClickCount === 0) {
      // First click: Clear all fields except submitter information
      setException("");
      setCampaign("");
      setEmployeeName("");
      setEmployeeNumber("");
      setStartDate("");
      setEndDate("");
      setStartTime("");
      setEndTime("");
      setError("");
    } else {
      // Second click: Clear submitter information as well
      setSubmitterName("");
      setSubmitterUNumber("");
    }
    // Increment or reset clear click count
    setClearClickCount((prev) => (prev + 1) % 2);
  };

  const validateDateTime = (): boolean => {
    if (!startDate || !endDate || !startTime || !endTime) {
      setError("All fields must be filled.");
      return false;
    }

    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);

    if (startDateTime >= endDateTime) {
      setError(
        "The end date and time must be later than the start date and time."
      );
      return false;
    }

    setError(""); // Clear any errors if validation passes
    return true;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateDateTime()) {
      const exceptionData = {
        exceptionType: exception,
        campaign,
        employeeName,
        employeeNumber,
        submitterName,
        submitterUNumber,
        startDateTime: new Date(`${startDate}T${startTime}`),
        endDateTime: new Date(`${endDate}T${endTime}`),
      };

      try {
        await axios.post("http://localhost:5000/exceptions", exceptionData);
        alert("Exception saved successfully!");
        handleClear();
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error saving data to MongoDB:", error.message);
        } else {
          console.error("Unknown error occurred while saving data to MongoDB.");
        }
      } finally {
        console.log("Cleanup code can go here.");
      }
    }
  };

  return (
    <div>
      <Router>
        <NavBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/other-page" element={<OtherPage />} />
          </Routes>
        </div>
      </Router>

      <div className="container mt-5">
  <h1 className="text-center my-4">Exception Form</h1>
  
  <form onSubmit={handleSubmit}>
    {/* Submitter Name */}
    <div className="row mb-3">
      <label htmlFor="submitterName" className="col-sm-2 col-form-label">
        Submitter Name
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control form-control-lg"
          id="submitterName"
          placeholder="Enter Submitter Name"
          value={submitterName}
          onChange={handleSubmitterNameChange}
        />
      </div>
    </div>

    {/* Submitter UNumber */}
    <div className="row mb-3">
      <label htmlFor="submitterUNumber" className="col-sm-2 col-form-label">
        Submitter UNumber
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control form-control-lg"
          id="submitterUNumber"
          placeholder="Enter Submitter UNumber"
          value={submitterUNumber}
          onChange={handleSubmitterUNumberChange}
        />
      </div>
    </div>

    {/* Campaign Dropdown */}
    <div className="row mb-3">
      <label htmlFor="campaignSelect" className="col-sm-2 col-form-label">
        Campaign
      </label>
      <div className="col-sm-10">
        <select
          className="form-select"
          id="campaignSelect"
          value={campaign}
          onChange={handleCampaignChange}
        >
          <option value="">Choose...</option>
          <option value="TSS-HMRC">TSS HMRC</option>
          <option value="LAA-DSCC">LAA-DSCC</option>
          <option value="LAA-CLA">LAA - CLA</option>
          <option value="GDS">GDS</option>
          <option value="MAPs">MAPs</option>
          <option value="WHD">WHD</option>
        </select>
      </div>
    </div>

    {/* Employee Name */}
    <div className="row mb-3">
      <label htmlFor="employeeName" className="col-sm-2 col-form-label">
        Employee Name
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control form-control-lg"
          id="employeeName"
          placeholder="Enter Employee Name"
          value={employeeName}
          onChange={handleEmployeeNameChange}
        />
      </div>
    </div>

    {/* Employee UNumber */}
    <div className="row mb-3">
      <label htmlFor="employeeNumber" className="col-sm-2 col-form-label">
        Employee UNumber
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control form-control-lg"
          id="employeeNumber"
          placeholder="Enter Employee UNumber"
          value={employeeNumber}
          onChange={handleEmployeeNumberChange}
        />
      </div>
    </div>

    {/* Exception Type Dropdown */}
    <div className="row mb-3">
      <label htmlFor="exceptionSelect" className="col-sm-2 col-form-label">
        Exception Type
      </label>
      <div className="col-sm-10">
        <select
          className="form-select"
          id="exceptionSelect"
          value={exception}
          onChange={handleExceptionChange}
        >
          <option value="">Choose...</option>
          <option value="AWOL">AWOL</option>
          <option value="Sickness">Sickness</option>
          <option value="Late">Late</option>
          <option value="Holiday">Holiday</option>
          <option value="Mat Leave">Mat Leave</option>
          <option value="Bereavement">Bereavement</option>
          <option value="Overtime">Overtime</option>
          <option value="Paternity Leave">Paternity Leave</option>
          <option value="Long Term Sick">Long Term Sick</option>
        </select>
      </div>
    </div>

    {/* Start and End Date/Time */}
    <DateSelector label="Start Date" value={startDate} onChange={setStartDate} />
    <DateSelector label="End Date" value={endDate} onChange={setEndDate} />
    <TimeSelector label="Start Time" value={startTime} onChange={setStartTime} />
    <TimeSelector label="End Time" value={endTime} onChange={setEndTime} />

    {/* Error Message */}
    {error && (
      <div className="alert alert-danger mt-3">
        <strong>Error:</strong> {error}
      </div>
    )}

    {/* Buttons */}
    <SubmitButton onClick={handleSubmit} />
    <ClearButton onClear={handleClear} />
  </form> {/* Closing form tag */}
</div>
</div>
  );
}

export default ExceptionForm;
