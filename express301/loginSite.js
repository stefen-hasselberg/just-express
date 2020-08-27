const path = require('path');
const express = require('express');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res, next) => {
  res.send('<h1>Check server is working</h1>');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
