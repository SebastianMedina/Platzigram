require('babel-polyfill');
var page      = require('page');
//var moment  = require('moment');

require('./homepage');
require('./signup');
require('./signin');
require('./user-page');
require('./footer');

page();
