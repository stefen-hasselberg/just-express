const path = require('path');
const helmet = require('helmet');
const express = require('express');
const app = express();

app.use(helmet());

// setup rendering engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// used to server up static files
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
