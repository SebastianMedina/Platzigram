var yo          = require('yo-yo');
var landing     = require('../landing');
var translate   = require('../translate');
var signinForm  = yo`<div class="col s12 m7">
  <div class="row">
    <div class="singup-box">
      <h1 class="platzigram">Platzigram</h1>
      <form class="singup-form">
        <h2> ${translate.message('signin.subheading')}</h2>
        <div class="section">
          <a class="btn btn-fb hide-on-small-only">${translate.message('signin.facebook')}</a>
          <a class="btn btn-fb hide-on-med-and-up">${translate.message('signin')}   <i class="fa fa-facebook-official"></i></a>
        </div>
        <div class="divider"></div>
        <div class="section">
        <input type="text" name="username" placeholder=${translate.message('username')}/>
        <input type="password" name="password" placeholder=${translate.message('password')}/>
        <button class="btn waves-effect waves-light btn-singup" type="submit">${translate.message('signin.text')}</button>
      </form>
    </div>
  </div>
    <div class="row">
      <div class="login-box">
        ${translate.message('signin.not-have-accout')} <a href="/signup ">${translate.message('signup.call-to-action')}</a>
      </div>
    </div>
  </div>
  </div>`;
module.exports  = landing(signinForm);
