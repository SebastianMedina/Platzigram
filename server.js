var express = require('express');//var express define la variable llamada express, el require lo que hace es buscar en los modulos de node el que tiene el nombre express, el cual se le asignara a la variable
var app     = express();//Se crea una variable 'app', a la cual se le asigna el valor que devuelva la funcion express()
var ext     = require('file-extension');
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture');

app.set('view engine', 'pug');//Con esto el sabe que cuando se le entreguen vista al usuario va a usar Pug para reenderizarlas
app.use(express.static('public'));//Esta accion permite que todos los usuarios tengan acceso al contenido de la carpeta 'public'

app.get('/', function (req, res){//Se define una ruta ('/' se refiere al home), get llama la variable app y le pasa los parametros especificados posteriormente (ruta, funcion)
  res.render('index', {title: 'Platzigram'});//Se usa el segundo parametro (function(req, res) para devolver un hola mundo, (res-->responds))
})
app.get('/signup', function (req, res){//Se define una ruta ('/' se refiere al home), get llama la variable app y le pasa los parametros especificados posteriormente (ruta, funcion)
  res.render('index', {title: 'Platzigram - SignUp'});//Se usa el segundo parametro (function(req, res) para devolver un hola mundo, (res-->responds))
})
app.get('/signin', function (req, res){//Se define una ruta ('/' se refiere al home), get llama la variable app y le pasa los parametros especificados posteriormente (ruta, funcion)
  res.render('index', {title: 'Platzigram - SignIn'});//Se usa el segundo parametro (function(req, res) para devolver un hola mundo, (res-->responds))
})
app.get('/api/pictures', function (req, res, next){
  var pictures = [
    {
      user: {
        username: 'sebasmed',
        avatar: 'https://pbs.twimg.com/profile_images/826891186820509698/aQzEcH8r.jpg',
      },
      url: 'office.jpg',
      likes: 10,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'sebasmed',
        avatar: 'https://pbs.twimg.com/profile_images/826891186820509698/aQzEcH8r.jpg',
      },
      url: 'office.jpg',
      likes: 1,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate()-10)
    }
  ];
 setTimeout(() => res.send(pictures), 2000)

});

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})

app.get('/api/user/:username', function(req, res){
  const user = {
    username: 'sebasmed',
    avatar: 'https://pbs.twimg.com/profile_images/826891186820509698/aQzEcH8r.jpg',
    pictures: [
      {
         id: 1,
         src: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/13129218_1692859530968044_751360067_n.jpg?ig_cache_key=MTI0MjIzMTY4MzQ5NzU1MTQxOQ%3D%3D.2.c',
         likes: 3
       },
       {
         id: 2,
         src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/13126768_259576907723683_861119732_n.jpg?ig_cache_key=MTIzODYzMjE4NDk1NDk3MTY5OQ%3D%3D.2',
         likes: 1
       },
       {
         id: 3,
         src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/s640x640/sh0.08/e35/13118139_1705318183067891_1113349381_n.jpg?ig_cache_key=MTI0MTQwNzk1ODEyODc0ODQ5MQ%3D%3D.2',
         likes: 10
       },
       {
         id: 4,
         src: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12940327_1784772678421526_1500743370_n.jpg?ig_cache_key=MTIyMzQxODEwNTQ4MzE5MjE4OQ%3D%3D.2',
         likes: 0
       },
       {
         id: 5,
         src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/t51.2885-15/e35/11934723_222119064823256_2005955609_n.jpg?ig_cache_key=MTIyMzQwOTg2OTkwODU2NzY1MA%3D%3D.2',
         likes: 23
       },
       {
         id: 6,
         src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12904985_475045592684864_301128546_n.jpg?ig_cache_key=MTIyMzQwNjg2NDA5NDE2MDM5NA%3D%3D.2',
         likes: 11
       }
    ]
  }
  res.send(user);
})

app.get('/:username', function(req, res){
  res.render('index', {title: `Platzigram - ${req.params.username}`})
})

app.get('/:username/:id', function(req, res){
  res.render('index', {title: `Platzigram - ${req.params.username}`})
})


app.listen(3000, function(err){//Se crea el puerto por el cual va a funcionar el proyecto, en este caso el 300
  if(err) return console.log('Hubo un error'), process.exit(1);//se genera una funcion para notificar si se produce un error
  console.log('Platzigram escuchando en el puerto 3000');//en caso de que no se produzca ningun error, se genera un mensaje que compruebe el funcionamiento
})
