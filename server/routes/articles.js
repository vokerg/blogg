const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const parserJson = bodyParser.json();
const router = express.Router();

router.route('/:id/comments')
  .get((request, response) =>
    response.status(200).json(JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/assets/comments.json'))))
  )
  .put((request, response) => response.status(200).json(request.body));

router.route('/:id')
  .post(parserJson, (request, response) => response.status(200).json(request.body))
  .get((request, response) => {
    const articles = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/assets/articles.json'))).articles;
    for (article of articles) {
      if (article.id === request.params.id) {
        response.status(200).json(article);
        return;
      }
    }
    response.status(404).json("Not found");
  })
  .delete((request, response) => response.status(501).json("Not implemented"));

router.route('/')
  .get((request, response) =>
    response.status(200).json(JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/assets/articles.json'))))
  )
  .put((request, response) => response.status(200).json(request.body));

module.exports = router;
