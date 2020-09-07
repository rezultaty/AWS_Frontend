const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET transformed page. */
router.get('/', async function(req, res, next) {
  let photos=[];
  await axios.get('http://localhost:5000/get-transformed-images').then(res => {
    photos = res.data;
  }).catch(err => console.log(err))
  res.render('index', { title: 'Transformed images', photos, type: 'transformed' });
});

module.exports = router;

