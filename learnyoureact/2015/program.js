//noinspection Eslint
/**
 * Created by marek on 22/07/15.
 */

var React = require('react');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');

var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

require('node-jsx').install();
var TodoBox = require('./views/index.jsx');

var data = [
    {title: 'Shopping', detail: process.argv[3]},
    {title: 'Hair cut', detail: process.argv[4]}
];
app.use('/', function(req, res) {
    res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});
