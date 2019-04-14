//todo Express Engine Using 
const express = require('express');
const app = express();
//todo POST 방식 body-Parser 
const bodyParser = require('body-parser');
//todo PORT 3002
const PORT = 3002;
//todo mongoose 
const mongoose = require('mongoose');
//todo Rotuer Connection to module
const route_signin = require('./routes/route_signin');
const route_signup = require('./routes/route_signup');
mongoose.connect('mongodb://localhost:27017/JWT_TEST');
//todo bodyparser(인코딩 설정, JSON 설정)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//todo route signup, signin router connect to and then using exporess moduel 
// app.use(db);
app.use('/user',route_signin);
app.use('/user',route_signup);

//todo  REST API GET '/' 요청 -> get방식은 URL에서 쿼리스트링으로 가져온다. POST와 차이점 
//todo query params vs URL params vs form params
//todo  URL Params : localhost:3000/:id=1234 => req.query.id => 1234
//todo  query params : localhost:3000/kgh => req.params.name => kgh
//todo  form params : <input name=”username” …/> 이 form 값을 읽어 올려면
//todo  var q = request.body.username  으로 하면 HTML form에서 name이 “username”으로 정해진 element의 값을 읽어올 수 있다.
app.post('/', (req,res) =>{
    console.log(req.query.hello);
    console.log(req.params.name)
    // console.log(req.json());
    // json.parse() => string to json
    // json.stringfy = json to string
    console.log(req.body.data);
    res.json({
        "SERVER" : "Node.JS JWT SERVER TEST"
    })
})
app.get('/test',(req,res) =>{
    res.json({
        "SERVER" : "Node.JS JWT SERVER TEST"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})