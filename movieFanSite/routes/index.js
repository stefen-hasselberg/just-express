var express = require('express');
var router = express.Router();

const axios = require('axios').default;

const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

// add the image base url to the locals as middleware
router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;

  next();
});

/* GET home page. */
router.get('/', async function (req, res, next) {
  const response = await axios.get(nowPlayingUrl);
  const parseData = response.data.results;

  res.render('index', { parsedData: parseData });
});

module.exports = router;
