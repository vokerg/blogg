const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const articles = require('./server/routes/articles');
app.use('/api/articles/', articles);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, () => {
  console.log("I'm listening!");
});
