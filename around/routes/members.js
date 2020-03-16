const express = require('express'),
      models = require('../models/index'),
      crypto = require('crypto'),
      location = require('location');
var app = express();
var router = express.Router();


router.get('/mypage', async (req, res) => {
    let nickname = req.session.nickname
    let member_info = await models.user.findOne({
        where : {
            user_nickname : nickname
        }
    })
    if(member_info){
        res.render('user/mypage', {
            name : member_info.user_name,
            nickname : member_info.user_nickname,
            email : member_info.user_email,
            phone : member_info.user_phone,
            password : member_info.user_pws
        })
    }
    else{
        res.redirect('/members/signin')
    }

})

router.get('/signin', (req, res) => {
    models.sequelize.sync().then(()=> {
        console.log("sync 성공")
    })
    .catch((err) =>{
        
        console.log(err);
    });

    res.render('user/login.ejs')
})

router.post('/signin', async (req, res) => {
    var email = req.body.email
    var password = req.body.password
    
    var member = await models.user.findOne({
        where : {
            user_email : email

        }
    })
    if (member) {
        let salt = member.user_salt
        let hashed = crypto.createHash("sha512").update(password + salt).digest("hex")
        if (member.user_pw == hashed) {
            if (!req.session.nickname) {
                req.session.nickname = member.user_nickname
                req.session.user_no = member.user_no;
                console.log('Session Saved')
                res.cookie('sessionId', req.session.id, {
                    expires: new Date(Date.now() + 90000)
                })
                console.dir(req.session)
                res.redirect('/')
            }
            else {
                console.log('이미 로그인 돼있습니다.')
                res.redirect('/')
            }
        }
        else{
            console.log('비밀번호를 확인해주세요')
            res.redirect('/members/signin')
        }
    }
    else{
        console.log('아이디를 확인해주세요')
        res.redirect('/members/signin')
    }

})

router.get('/signup', (req, res) =>{
    res.render('user/signup.ejs')
})

router.post('/signup',(req, res) => {  
    let body = req.body;
    var user = {
        paramEmail: req.body.email,
        paramPassword: req.body.password,
        paramNickname: req.body.nickname,
        paramPhone: req.body.phone,
        paramName: req.body.name
    }
    let salt = Math.round(new Date().valueOf() * Math.random()) + "";
    let hashed = crypto.createHash("sha512").update(user.paramPassword + salt).digest("hex")

    models.user.create({
        user_email: body.email,
        user_name: body.name,
        user_nickname: body.nickname,
        user_pw: hashed,
        user_phone: body.phone,
        user_salt : salt
    })
    .then( result => {
        console.log("추가 완료");
        res.redirect('/members/signin');
    })
    .catch( err => {
        console.log(err);
        res.redirect('/members/signup')
    })
});

router.get('/signout', (req, res) => {
    if(req.session.nickname){
        req.session.destroy(() => {
            console.log("Delete Session")
            res.redirect('/')
        })
    }
    else
        res.redirect('/')
})

module.exports = router;