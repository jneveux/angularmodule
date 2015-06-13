/**
 * Created by jean on 6/13/15.
 */
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = module.exports = express();

api.use(logger('dev'));
api.use(bodyParser.json());

require('./gods/routes')(api);

module.exports = api;