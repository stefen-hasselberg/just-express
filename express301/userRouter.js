const express = require('express');
let router = express.Router();

// Middleware for this route
function validateUser(req, res, next) {
  res.locals.validated = true;
  next();
}

router.use(validateUser);

router.get('/', (req, res, next) => {
  console.log(res.locals);
  res.json({
    msg: 'user router works',
    userValidated: res.locals.validated,
  });
});

module.exports = router;
