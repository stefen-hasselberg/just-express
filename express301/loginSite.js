const path = require('path');
const express = require('express');
const helmet = require('helmet');

const app = express();
const cookieParser = require('cookie-parser');
// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use((req, res, next) => {
  console.log('my middleware ', req.query.msg);
  if (req.query.msg === 'fail') {
    res.locals.msg = `Sorry. This username and password combination doesn't exist`;
  } else {
    res.locals.msg = '';
  }

  // Send me onto the next piece middleware
  next();
});

app.get('/login', (req, res, next) => {
  res.render('login');
});

app.post('/process_login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // check the db to see if the users credentials are valid
  // if they are valid
  // save their username into cookie
  // is send them the welcome page

  // cookie - store on the end users browser - send with each request
  // session - store on the server

  if (password === 'x') {
    res.cookie('username', username);

    res.redirect('/welcome');
  } else {
    res.redirect('/login?msg=fail');
  }
});

app.get('/welcome', (req, res, next) => {
  res.render('welcome', { username: req.cookies.username });
});

app.get('/logout', (req, res, next) => {
  res.clearCookie('username'); // this clears the cookie
  res.redirect('/login');
});

app.get('/story/:storyId', (req, res, next) => {
  res.send(`<h1>${req.params.storyId}</h1>`);
  res.send('<h1>Story 1</h1>');
});

app.get('/statement', (req, res, next) => {
  // res.sendFile(
  //   path.join(__dirname, '/BankStatement/BankStatementChequing.png')
  // );
  res.download(
    path.join(__dirname, '/BankStatement/BankStatementChequing.png'),
    'JimsStatement.png'
  );
});

app.get('/', (req, res, next) => {
  res.send('<h1>Check server is working</h1>');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
