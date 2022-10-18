const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv').config({ path: './.env' });
const badges = require('./routes/badges');

// middleware

app.use(express.json());

// routes
app.use('/api/v1/badges', badges);

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log('Connected to DB...');
    } else {
      console.log('DB connection went wrong!!!');
    }
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...`);
});
