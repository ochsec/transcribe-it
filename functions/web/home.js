const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('partials', './partials');

app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  res.render('home', {});
});

// Exporting handler for serverless deployment
exports.handler = (event, context, callback) => {
  const serverless = require('serverless-http');
  const handler = serverless(app);
  return handler(event, context, callback);
};
