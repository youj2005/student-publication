const express = require('express')
const router = express.Router()
const article = require('../models/article.js')

router.get('/getarticle', async(req, res) => {
  try {
    const article1 = await article.findOne({title: "blah blah"});
    console.log(article1.title);
    res.send(article1.title);
  } catch (err) {
    console.log(err);
  }
});

router.post('/postarticle', async(req, res) => {
  try {
    const article1 = new article({title: "Lorem Ipsum", content: "Lorem ipsum lore ..."});
    await article1.save();
    console.log(article1.title);
    res.send(article1.title);
  } catch (err) {
    console.log(err);
  }
  res.end();
});

module.exports = router