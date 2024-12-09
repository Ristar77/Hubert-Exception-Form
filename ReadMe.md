# Express MongoDB Exception Management API

This is a simple API built with Node.js, Express, and MongoDB to manage exception data. The application uses Mongoose for interacting with the MongoDB database and handles requests related to storing exception information.

## Features
- Connects to a MongoDB database using Mongoose.
- Provides a RESTful API to create exceptions and store them in the database.
- Handles requests with `POST` method for adding new exception data.
- Implements basic error handling and responses.

## Requirements
- Node.js
- MongoDB Atlas (or a local MongoDB server)
- A MongoDB connection string with a valid username, password, and database name.

## Installation

### 1. Clone the repository

git clone https://github.com/yourusername/exception-management-api.git
cd exception-management-api

2. Install Dependencies
Make sure you have Node.js installed, then run:
npm install

3. Set Up MongoDB
Create a MongoDB account and cluster on MongoDB Atlas if you don't already have one.
Get your MongoDB connection string. Replace the placeholders <YourUsername>, <yourpassword>, and yourdatabase in the code with your actual MongoDB credentials.
Paste your MongoDB connection string in the code where the MongoDB connection is initialized:
js

mongoose.connect("mongodb+srv://<YourUsername>:<yourpassword>@<YourApp>.nnlqg.mongodb.net/yourdatabase?retryWrites=true&w=majority&appName=Yourappname", { useNewUrlParser: true, useUnifiedTopology: true });

4. Start the Server

To start the server, run:

npm start
This will start the Express server on port 5000 (you can change the port in the code if needed).

5. Test the API
You can now send POST requests to the following endpoint:

POST /exceptions
This will save exception data to the MongoDB database. You need to provide the data in JSON format with the following fields:
exceptionType (String): Type of exception.
campaign (String): Campaign name.
employeeName (String): Name of the employee.
employeeNumber (String): Employee number.
submitterName (String): Name of the submitter.
submitterUNumber (String): Submitter's user number.
startDateTime (Date): Start time of the exception.
endDateTime (Date): End time of the exception.
Example Request:

POST http://localhost:5000/exceptions
Content-Type: application/json

{
  "exceptionType": "Sick Leave",
  "campaign": "Campaign X",
  "employeeName": "John Doe",
  "employeeNumber": "12345",
  "submitterName": "Jane Smith",
  "submitterUNumber": "67890",
  "startDateTime": "2024-12-05T09:00:00Z",
  "endDateTime": "2024-12-05T17:00:00Z"
}
Example Response:
json
Copy code
{
  "message": "Exception saved successfully"
}
Error Handling:
If an error occurs (e.g., database connection fails or data saving fails), the server will respond with an appropriate error message.

Port:
The server runs on http://localhost:5000. You can change the port by modifying the PORT variable in the code.

Technologies Used
Node.js: JavaScript runtime environment.
Express: Web framework for Node.js.
MongoDB: NoSQL database for storing exception data.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
CORS: Middleware to allow cross-origin requests.
Body-parser: Middleware to parse incoming request bodies.