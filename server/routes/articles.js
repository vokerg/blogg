const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const parserJson = bodyParser.json();
const router = express.Router();

router.route('/:id/comments')
  .get((request, response) =>
    response.status(200).json(JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/assets/comments.json'))))
  );

router.route('/:id')
  .post(parserJson, (request, response) => response.status(200).json(request.body))
  .get((request, response) => response.status(501).json("Not implemented"))
  .delete((request, response) => response.status(501).json("Not implemented"));

router.route('/')
  .get((request, response) =>
    response.status(200).json(JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/assets/articles.json'))))
  );

module.exports = router;
