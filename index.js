const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes); 

// app.use(errorHandler);

// MongoDB connection
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// MongoDB connection error handling
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});