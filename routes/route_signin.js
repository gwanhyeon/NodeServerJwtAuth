const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/model_user');

router.post('/signin',(req,res) =>{
    User.findOne({email: req.body.email})
    .exec()
    .then((user) =>{            //todo exec() 시킨후 찾은 이메일 값으로 -> all json data -> user
        bcrypt.compare(req.body.password, (err,result) =>{
            if(err){
                return res.status(401).json({
                    failed : "unauthorzied Access"
                })
            }
            //todo input user data value validation(result == true 일경우 회원가입된 사람)
            if(result){
                const JWTToekn = jwt.sign({
                    email : user.email,
                    _id: user_id
                },
                'secret',
                {
                    expiresIn: '2h'
                });
                return res.status(200).json({
                    success: 'welcome to the JWT AUTH',
                    token: JWTToekn

                });
            }
            return res.status(401).json({
                failed : "Unauthorized Access"
            })


        })

    }).catch(error =>{
        res.status(500).json({
            error : error
        });
    });
});
module.exports = router_signin;

