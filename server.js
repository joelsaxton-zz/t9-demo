/**
 * Created by joelsaxton on 2/25/15.
 */


var t9 = require ('super-t9'),
    express = require('express'),
    serverport = 8000;

var app = express();
app.use(express.static(__dirname + '/public'));

// use 1000 word English word list for T9
t9.setWordList('mywords', 'csv', 'public/assets/1000-words.csv');


// Start server
app.listen(serverport, function () {
    console.log('Express server on http://localhost:%d \nCTRL + C to shutdown', serverport);
});

app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/index.html');
});

app.get('/api/wordCombinations', function(req, res){
    var number = req.query.word;
    res.send(t9.getWordsFromNumber(number, 'mywords'));
});


