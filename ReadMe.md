Exception Form Application

This project is a React-based web application designed to allow users to submit exceptions for employees. The form collects details such as employee name, UNumber, exception type, start/end dates, and times. It includes validation to ensure accurate submission and a two-step clear functionality to optimize the workflow for repeat entries.

Features

1. Form Fields
   The form includes the following fields:

Submitter Information: Submitter Name and UNumber.
Employee Information: Employee Name and UNumber.
Campaign: A dropdown to select the campaign.
Exception Type: A dropdown to specify the type of exception (e.g., Sickness, Holiday).
Date and Time Selectors: Start and end dates/times for the exception.

2. Validation
   Ensures that the end date and time are later than the start date and time.
   Prevents submission if required fields are missing.

3. Two-Stage Clear Functionality
   First Click: Clears all fields except submitter information to allow for efficient multiple entries.
   Second Click: Clears all fields, including submitter information, for a fresh start.

4. Reusable Components
   TimeSelector: Handles time inputs with optional validation.
   DateSelector: Handles date inputs.
   SubmitButton and ClearButton: Custom buttons for form actions.

5. Navigation
   Includes routing using react-router-dom with a placeholder for home and other pages.

Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (v16 or higher)
npm

Installation

Clone the repository:

git clone https://github.com/yourusername/exception-form.git
Navigate to the project directory:

cd exception-form

Install dependencies:

npm install

Running the Application

Start the development server:

npm start

File Structure

src/
├── components/
│ ├── ClearButton.tsx # Clear button component
│ ├── DateSelector.tsx # Date input component
│ ├── NavBar.tsx # Navigation bar
│ ├── SubmitButton.tsx # Submit button component
│ ├── TimeSelector.tsx # Time input component
├── pages/
│ ├── Home.tsx # Placeholder for the home page
│ ├── OtherPage.tsx # Placeholder for another page
├── App.tsx # Main app entry point
├── ExceptionForm.tsx # Exception form component
├── index.tsx # Application root file

Usage

Fill in the submitter information (e.g., name, UNumber).
Provide the employee details (name, UNumber).
Select the campaign and exception type.
Choose start and end dates/times.
Submit the form. The application validates the inputs and ensures the end time is later than the start time.

Use the Clear button:
First click: Clears fields except the submitter's information.
Second click: Clears all fields, including the submitter's information.

Validation Rules

All fields must be filled.
End date and time must be later than the start date and time.
Errors are displayed in a prominent red alert box when validation fails.

Future Enhancements

Add form persistence for draft submissions.
Integrate with a backend API for storing exception data.
Improve error handling and display for field-specific issues.

Contributing

Contributions are welcome! Please follow these steps:

Contact
For questions or support, please contact:

Your Name: rick.rainford@hgsuk.com
GitHub: github.com/yourusername
