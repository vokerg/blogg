const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const {ObjectId} = require('mongodb');
const { getDb } = require('../database');

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
    const id = {_id: new ObjectId(request.params.id)};
    return getDb().collection("articles").find(id).toArray((err, articles) => {
      if (articles.length === 0) {
        return response.status(404).json("Not found");
      }
      const {_id, ...rest} = articles[0];
      return response.status(200).json({id:_id, ...rest});
    });
  })
  .delete((request, response) => response.status(501).json("Not implemented"));

router.route('/')
  .get((request, response) =>
    getDb().collection("articles").find().toArray((err, articles) => {
      articles = articles.map(article => {
        const {_id, ...rest} = article;
        return {id:_id, ...rest};
      });
      return response.status(200).json(articles);
    })
  )
  .put(parserJson, (request, response) =>
    getDb().collection("articles").insert(request.body, (err, result) => {
      response.status(200).json(request.body);
    })
  );

module.exports = router;
