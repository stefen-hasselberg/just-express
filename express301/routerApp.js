const path = require('path');
const express = require('express');
const helmet = require('helmet');

const router = require('./theRouter');
const userRouter = require('./userRouter');

const app = express();

// App Middleware
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// App Routes
app.use('/', router);
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('server running on port 3000');
});
