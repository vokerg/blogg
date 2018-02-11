const express = require('express');
const path = require('path');

var fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/articles/:id/comments', (request, response) => {
  response.status(200).json(JSON.parse(fs.readFileSync(path.join(__dirname, 'src/assets/comments.json'))));
})

app.get('/api/articles', (request, response) => {
  response.status(200).json(JSON.parse(fs.readFileSync(path.join(__dirname, 'src/assets/articles.json'))));
})


app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(3000, () => {
  console.log("I'm listening!");
});
