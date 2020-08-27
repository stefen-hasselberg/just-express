const express = require('express');
const helemet = require('helmet');
const path = require('path');

const app = express();

// Middleware setup
app.use(helemet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

// set view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

function validateUser(req, res, next) {
  res.locals.validated = true;
  next();
}

app.use(validateUser);

// Routes
app.get('/', (req, res, next) => {
  res.render('index', {
    msg: 'Failure',
    msg2: 'Success',
    html: `<p>lorem ispum,</p>`,
  });
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
