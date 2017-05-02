//se genera este if para hacer compatible la libreria Intl con navegadores que no la tengan por defecto
if (!window.Intl){
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}
var IntlRelativeFormat = window.IntlRelativeFormat  = require('intl-relativeformat');//Se hace el requerimiento para traer la libreria IntlRelativeFormat que funciona para suponer el tiempo de creacion de una imagen.
var IntlMessageFormat  = require('intl-messageformat');//Se hace el requerimiento de la libreria IntlMessageFormat que funciona para cambiar el formato de los textos

require('intl-relativeformat/dist/locale-data/en.js');//Se hace el requerimiento de la seccion de ingles de la libreria Intl
require('intl-relativeformat/dist/locale-data/es.js');//Se hace el requerimiento de la seccion de español de la libreria Intl

var es = require('./es');//Se requiere el modulo es.js situado en la carpeta translate
var en = require('./en-US');//Se requiere el modulo en-US.js situado en la carpeta translate

var MESSAGES      = {};//Se genera un objeto vacio
MESSAGES.es       = es;//A MESSAGES.es se le pondra el valor que tengoa el modulo es.js
MESSAGES['en-US'] = en;//A MESSAGES.es se le pondra el valor que tengoa el modulo en-US.js
var locale        = localStorage.locale || 'es';//En este caso se selecciona el idioma en español

//Se genera el objeto para realizar la traduccion del texto y fecha.
module.exports  = {//Se exporta el objeto
  message: function (text, opts){//Text es el mensaje que se va a exportar
    opts    = opts || {};//es igual que poner en la function(text, opts{}){}
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);//Este se crea para traducir cada uno de los textos
    return msg.format(opts);//
  },
  date: new IntlRelativeFormat(locale)//traduce el idioma de la fecha o el tiepo
}
