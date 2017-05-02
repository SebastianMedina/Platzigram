//Se crea el arreglo para generar los mensajes en español para saber la cantidad de likes que tiene la imagen.
module.exports = {
  'likes': '{ likes, plural, ' + //Se refiere a que likes es una cantidad mayor o igual a 1
          '=0 {}' + //Si no hay likes, no muestra ningun mensaje
          '=1 { # like }' +//Si tiene un like, muestra el # en este caso 1 seguido de la palabra "like"
          'other { # likes }}',//Si es mas de un like, muestra el # de likes que tiene, seguido de la plaabra "likes"
  'logout': 'Logout',
  'english': 'English',
  'spanish': 'Spanish',
  'signup.subheading': 'Singup to watch your friend\'s pictures studiying at Platzi',
  'signin.subheading': 'Signin to see photos of your friend\'s studying at Platzi',
  'signup.facebook': 'Signup with facebook',
  'signin.facebook': 'Sigin with facebook',
  'signup.text': 'Signup',
  'signin.text': 'Signin',
  'email': 'Email',
  'username': 'ID - Nickname',
  'fullname': 'Full name',
  'password': 'Password',
  'signup.call-to-action': 'SingUp',
  'signup.have-account':'Have an account?',
  'signin': 'SingIn',
  'signin.not-have-accout': 'Don\'t have account',
  'lenguage': 'Lenguage',
  'upload-picture': 'Upload picture',
  'upload': 'Upload'
}
