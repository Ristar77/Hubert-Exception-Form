const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://richard271277:RuRSuqBB0uBiFeIK@rainford101.nnlqg.mongodb.net/exceptionDB?retryWrites=true&w=majority&appName=Rainford101",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define Exception Schema
const exceptionSchema = new mongoose.Schema({
  exceptionType: String,
  campaign: String,
  employeeName: String,
  employeeNumber: String,
  submitterName: String,
  submitterUNumber: String,
  startDateTime: Date,
  endDateTime: Date,
});

const Exception = mongoose.model("Exception", exceptionSchema);

// Routes
app.post("/exceptions", async (req, res) => {
  try {
    const newException = new Exception(req.body);
    await newException.save();
    res.status(201).send("Exception saved successfully");
  } catch (error) {
    res.status(500).send("Error saving exception: " + error.message);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
