console.log('hi');

const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/food', (req, res) => {
    res.send([{name: 'pasta', deliciousness_rating: 9, is_hot: true}]);
});


app.listen(PORT, () => {
    console.log(`up and running on port: ${PORT}`);
});