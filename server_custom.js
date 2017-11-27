const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');
const base_url = 'http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/';
const API_KEY = 'd8ad01da-baa5-437b-88a6-38e018d835cb';


app.use((req, res, next) => {
    console.log(new Date().getTime(), req.url);
    next();
})

app.get('/api/onebusaway', (req, res) => {
    console.log('hello world');
    let search = req.query.q;
    console.log(search);
    let url = base_url + search + '.json?key=' + API_KEY;
    request.get({
        url: url
    },
    function(searchErr, searchRes, searchBody) {
        res.json(JSON.parse(searchRes.body));
    });
});

app.use(express.static('public'));

app.listen(port, err => {
    if (err) {
        return console.log('Error!', err);
    }
    console.log('server is listening on ' + port);
    
});
