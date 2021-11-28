// index.js
var express = require('express');
var caver = require('caver-js');
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose'); // DB
var bodyParser = require('body-parser'); // 웹브라우저의 form으로 전송된 data를 서버에서 쉽게 사용하기 위해 body-parser 사용
var methodOverride = require('method-override'); // query로 method 값을 받아서 request의 HTTP method를 바꿔주는 역할
var app = express();

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); // '현재_위치/public' route를 static폴더로 지정하라는 명령어, 즉 '/'에 접속하면 '현재_위치/public'를, '/css'에 접속하면 '현재_위치/public/css'를 연결
app.use(bodyParser.json()); // json 형식의 데이터를 받는다는 설정, route의 callback함수(function(req, res, next){...})의 req.body에서 form으로 입력받은 데이터를 사용할 수 있음
app.use(bodyParser.urlencoded({ extended: true })); // urlencoded data를 extended 알고리듬을 사용해서 분석한다는 설정
app.use(methodOverride('_method')); // _method의 query로 들어오는 값으로 HTTP method를 바꿈, 예를들어 http://example.com/category/id?_method=delete를 받으면 _method의 값인 delete을 읽어 해당 request의 HTTP method를 delete으로 바꿈
app.use(flash());
app.use(session({secret:'MySecret', resave:true, saveUninitialized:true}));

// Routes
app.use('/', require('./index.html')); // home.js의 module.exports에 담긴 object(router object)가 module이 되어 require시에 사용

// Port setting
var port = 8080;
app.listen(port, function () {
  console.log('server on! http://localhost:' + port);
});

