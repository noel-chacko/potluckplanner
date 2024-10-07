const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests and enable CORS
app.use(cors());
app.use(express.json());

let attendees = [];

// Route to get all attendees
app.get('/attendees', (req, res) => {
  res.json(attendees);
});

// Route to add an attendee
app.post('/attendees', (req, res) => {
  const { name, attendance, dish } = req.body;
  if (attendance === 'Yes') {
    attendees.push({ name, dish });
    res.status(201).json({ message: 'Attendee added!' });
  } else {
    res.status(400).json({ message: 'Not attending.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
