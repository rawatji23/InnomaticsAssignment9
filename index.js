const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://vijayrawat:vijayrawat@cluster0.dsxbi.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Import routes
const todoRoutes = require('./routes/todos');
app.use('/todos', todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
