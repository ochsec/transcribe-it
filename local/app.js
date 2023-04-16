const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('partials', './partials');

app.use(express.json());
app.use(express.static('public'))

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
    res.render('home', {});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})