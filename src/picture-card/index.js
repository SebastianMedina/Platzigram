var yo                 = require('yo-yo');//Se hace el requeriimiento de la libreria yo-yo
var moment             = require('moment');//Se hace el requeriimiento de la libreria moment
var translate          = require('../translate');//Se hace el requerimiento del modulo (index.js) situado en la carpeta "translate"

//Se crea y se exporta la funcion que permitira realizar la muestra de las imagenes de los usuarios.
module.exports= function pictureCard(pic){
  var el;//Se crea la variable "el en donde se guardaran las imagenes."
  function render(picture){//Se crea la funcion "render" en donde se mostraran las imagenes, los datos de esta, y el ID del usuario.
     return yo`<div class="card ${picture.liked ? 'liked' : ''}">
   <div class="card-image">
     <img class="activator" src="${picture.url}">
   </div>
   <div class="card-content">
    <a href="/${picture.user.username}" class="card-title">
      <img src="${picture.user.avatar}" class="avatar"/>
      <span class="username">${picture.user.username}</span>
    </a>
    <small class="right time">${translate.date.format(picture.createdAt)}</small>
    <p>
      <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
      <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
      <span class="left likes">${translate.message('likes', {likes: picture.likes})}</span>
    </p>
   </div>
  </div>`;
  }
  /*Se retorna las imagenes de los usuarios con sus respectivos datos
    "picture.liked" hace referencia a la cantidad de likes que tenga
    la imagen, "picture.url" es la direccion fuente en donde se encuentra
    la imagen, esta esta situada en la seccion <div class="card-image">,
     <div class="card-content"> se situara la informacion de la imagen
     <a href="/user/${picture.user.username}" hace referencia a la seccion
     en donde se situara la diferente informacion del usuario que subio la
     foto, "picture.user.avatar" es la foto de perfil del usuario (avatar),
     picture.user.username es ID del usuario que subio la foto, se usa la
     clase Span para colocarlo.
     <small class="right time">${translate.date.format(picture.createdAt)}/>
     se refiere al espacio en donde ira el texto que especifica la fecha en
     la que fue creada o subida la imagen.
     <a class="left" href="#" onclick=${like.bind(null, true)}> aca se llama
     a la funcion "like", en esta se especifica que si se le da click, al
     "corazon" vacio este se rellenara y sumara el # de likes en 1, mientras
     que con <a class="left" href="#" onclick=${like.bind(null, false)}>
     sucede lo contrario el corazon relleno pierde el color y la cantidad
     de likes desminuye en 1, con <i class="fa fa-heart-o" aria-hidden="true"/>
     se llama al corazon con color y con <i class="fa fa-heart" aria-hidden=
     "true"/> se llama al corazon sin color.
     <span class="left likes">${translate.message('likes',{likes: picture.likes})}</>
     sirve para generar el mensaje de la cuantos likes tiene la imagen, adicional
     a esto, permite traducir el idioma del ingles al español y viceversa.*/

  function like(liked){//Se crea la funcion like
    pic.liked = liked;//quiere decir que cuando se le de click en el corazon sabra que se le dio like a la imagen
    pic.likes += liked ? 1 : -1;//aumenta o disminuye el numero de likes en 1
    var newEl = render(pic);//se renderiza la imagen para que no poder mostrarla en la pantalla.
    yo.update(el, newEl);//Se actualiza la imagen, para saber si se le dio o no like.
    return false;//Se hace esto para que no continue con el efecto del enlace es decir poner "/#"
  }
  el = render(pic);//la variable el se iguala al resultado de la renderizacion de la imagen.
  return el;//con el return se muestra el resultado final del proceso
}
