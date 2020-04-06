'use strict'
var express = require('express');
const models = require('../../models');
var router = express.Router();

router.get('/companion_board', function (req, res) {
    if (req.session.nickname) {
        res.render('post/post_write', {
            title: "동행",
            path: 'companion_board',
            islogin: true
        })
    } else {
        res.redirect('/members/signin');
    }
})

router.get('/schedule_share', function (req, res) {

    if (req.session.nickname) {
        res.render('post/post_write', {
            title: "일정 공유",
            path: 'schedule_share',
            islogin: true
        });
    } else {
        res.redirect('/members/signin');
    }
})

router.get('/sgi', function (req, res) {
    if (req.session.nickname) {
        res.render('region_post/re_post_write', {
            title: "서울·경기·인천",
            path: "sgi",
            islogin: true
        })
    }
    else {
        res.redirect('/members/signin')
    }
})

router.get('/jeonla', function (req, res) {
    if (req.session.nickname) {
        res.render('region_post/re_post_write', {
            title: "전라",
            path: "jeonla",
            islogin: true
        })
    }
    else {
        res.redirect('/members/signin')
    }
})

router.get('/jeju', function (req, res) {
    if (req.session.nickname) {
        res.render('region_post/re_post_write', {
            title: "제주",
            path: "jeju",
            islogin: true
        })
    }
    else {
        res.redirect('/members/signin')
    }
})

router.get('/gangwon', function (req, res) {
    if (req.session.nickname) {
        res.render('region_post/re_post_write', {
            title: "강원",
            path: "gangwon",
            islogin: true
        })
    }
    else {
        res.redirect('/members/signin')
    }
})

router.get('/gyeongsang', function (req, res) {
    if (req.session.nickname) {
        res.render('region_post/re_post_write', {
            title: "경상",
            path: "gyeongsang",
            islogin: true
        })
    }
    else {
        res.redirect('/members/signin')
    }
})

router.get('/chungcheong', function (req, res) {
    if (req.session.nickname) {
        res.render('region_post/re_post_write', {
            title: "충청",
            path: "chungcheong",
            islogin: true
        })
    }
    else {
        res.redirect('/members/signin');
    }
})

module.exports = router;