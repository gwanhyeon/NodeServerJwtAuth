const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//todo db연결하는 부분 

//todo PORT 3002
const PORT = 3002;
//todo bodyparser(인코딩 설정, JSON 설정)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
