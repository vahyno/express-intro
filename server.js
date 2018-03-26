var express = require('express');
var app = express();



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.static('public'));

var albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

var taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ];


app.get('/', function (request, response) {
  console.log('GET /');
  // console.log('******************');
  // console.log(request);
  // console.log('******************');
  //response.send('Hello World');
  response.sendFile('views/index.html', { root : __dirname});
  console.log(__dirname);
})

// /api/albums

app.get('/api/albums', function(request, response){
  console.log('GET /');
  response.json(albums);
})

app.get('/api/taquerias', function(req, res){
  console.log('GET /api/taquerias');
  res.json(taquerias);
});

app.listen(3000, function(){
  console.log('listening at 3000');
});
