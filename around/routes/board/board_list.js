'use strict'
var express = require('express');
var app = express();
const models = require('../../models');
var router = express.Router();

/* -------------- companion_board -------------- */

router.get('/companion_board', function(req,res) {
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if(page > 1) {
        offset = limit * (page - 1);
    }
    
    models.companion_board.findAndCountAll({
        attributes: ['c_post_no', 'c_region', 'c_dept_date', 'c_post_title', 'c_writer', 'c_write_date', 'c_hit'],
        where: {c_post_state: 1},
        order: [['c_write_date', 'DESC']]
    }).then(result => {
        var count = result.rows.length;
        var maxPage = Math.ceil(count / limit);
        if (req.session.nickname) {
            login = true
         } else {
            login = false
        }
        res.render('post/companion_post', {
            rows: result.rows,
            currentPage: page,
            maxPage: maxPage,
            limit: limit,
            length: result.rows.length-1,
            page_num: 10,
            islogin: login,
            currentSearchWord: null
        })
    })
});

router.post('/companion_board', function (req, res) {
    let files = req.files;
    let body = req.body;
    console.log(body);
    console.log(files);
    models.companion_board.create({
        c_writer: req.session.nickname,
        c_post_title: req.body.board_subject,
        c_post_text: req.body.board_text,
        c_dept_date: req.body.dept_date,
        c_region: req.body.regionType,
        c_post_state: 1
    })
        .then(result => {
            console.log("데이터 추가 완료");
            res.redirect("/board/list/companion_board");
        })
        .catch((err) => {
            console.log(err)
            console.log("데이터 추가 실패");
        })
});

/* -------------- sched_share_board -------------- */

router.get('/schedule_share', function(req,res) {
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if(page > 1) {
        offset = limit * (page - 1);
    }
    
    models.schedule_share.findAndCountAll({
        attributes: ['ss_post_no', 'ss_region', 'ss_dept_date', 'ss_post_title', 'ss_writer', 'ss_write_date', 'ss_hit'],
        where: {ss_post_state: 1},
        order: [['ss_write_date', 'DESC']]
    }).then(result => {
        var count = result.rows.length;
        var maxPage = Math.ceil(count / limit);
        if (req.session.nickname) 
            login = true
        else 
            login = false
        res.render('post/sched_share_post', {
            rows: result.rows,
            currentPage: page,
            maxPage: maxPage,
            limit: limit,
            length: result.rows.length-1,
            page_num: 10,
            islogin: login,
            currentSearchWord: null
        })
    })
});

router.post('/schedule_share', function (req, res) {
    let files = req.files;
    let body = req.body;
    models.schedule_share.create({
        ss_writer: req.session.nickname,
        ss_post_title: req.body.board_subject,
        ss_post_text: req.body.board_text,
        ss_dept_date: req.body.dept_date,
        ss_region: req.body.regionType,
        ss_post_state: 1
    })
        .then(result => {
            console.log("데이터 추가 완료");
            res.redirect("/board/list/schedule_share");
        })
        .catch((err) => {
            console.log(err)
            console.log("데이터 추가 실패");
        })
})

/* -------------- sgi_post -------------- */

router.get('/sgi', function(req,res) {
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    var offset = 0;
    let login = false
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if(page > 1) {
        offset = limit * (page - 1);
    }
    
    models.sgi_info_board.findAndCountAll({
        attributes: ['sgi_post_no', 'sgi_post_title', 'sgi_writer', 'sgi_write_date', 'sgi_hit'],
        where: {sgi_post_state: 1},
        order: [['sgi_write_date', 'DESC']]
    }).then(result => {
        var count = result.rows.length;
        var maxPage = Math.ceil(count / limit);
        if (req.session.nickname) 
            login = true
        else 
            login = false
        res.render('region_post/sgi_post', {
            rows: result.rows,
            currentPage: page,
            maxPage: maxPage,
            limit: limit,
            length: result.rows.length-1,
            page_num: 10,
            islogin: login,
            currentSearchWord: null
        })
    })
});

router.post('/sgi', function (req, res) {
    models.sgi_info_board.create({
        sgi_writer: req.session.nickname,
        sgi_post_title: req.body.board_subject,
        sgi_post_text: req.body.board_text,
        sgi_post_state: 1
    }).then(result => {
        console.log("데이터 추가 완료");
        res.redirect("/board/list/sgi");
    })
        .catch((err) => {
            console.log(err)
            console.log("데이터 추가 실패");
        })
})

/* -------------- jl_post -------------- */

router.get('/jeonla', function(req,res) {
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    var offset = 0;
    let login = false;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if(page > 1) {
        offset = limit * (page - 1);
    }
    
    models.jl_info_board.findAndCountAll({
        attributes: ['jl_post_no', 'jl_post_title', 'jl_writer', 'jl_write_date', 'jl_hit'],
        where: {jl_post_state: 1},
        order: [['jl_write_date', 'DESC']]
    }).then(result => {
        var count = result.rows.length;
        var maxPage = Math.ceil(count / limit);
        if (req.session.nickname) 
           login = true 
        else 
            login = false
        
        res.render('region_post/jl_post', {
            rows: result.rows,
            currentPage: page,
            maxPage: maxPage,
            limit: limit,
            length: result.rows.length-1,
            page_num: 10,
            islogin: login,
            currentSearchWord: null
        })
    })
});

router.post('/jeonla', function (req, res) {
    models.jl_info_board.create({
        jl_writer: req.session.nickname,
        jl_post_title: req.body.board_subject,
        jl_post_text: req.body.board_text,
        jl_post_state: 1
    }).then(result => {
        console.log("데이터 추가 완료");
        res.redirect("/board/list/jeonla");
    })
        .catch((err) => {
            console.log(err)
            console.log("데이터 추가 실패");
        })
})

/* -------------- jj_post -------------- */

router.get('/jeju', function(req,res) {
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    var offset = 0;
    let login = false
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if(page > 1) {
        offset = limit * (page - 1);
    }
    
    models.jj_info_board.findAndCountAll({
        attributes: ['jj_post_no', 'jj_post_title', 'jj_writer', 'jj_write_date', 'jj_hit'],
        where: {jj_post_state: 1},
        order: [['jj_write_date', 'DESC']]
    }).then(result => {
        var count = result.rows.length;
        var maxPage = Math.ceil(count / limit);
        if (req.session.nickname) 
           login = true 
        else 
            login = false
        
        res.render('region_post/jj_post', {
            rows: result.rows,
            currentPage: page,
            maxPage: maxPage,
            limit: limit,
            length: result.rows.length-1,
            page_num: 10,
            islogin: login,
            currentSearchWord: null
        })
    })
});

router.post('/jeju', function (req, res) {
    models.jj_info_board.create({
        jj_writer: req.session.nickname,
        jj_post_title: req.body.board_subject,
        jj_post_text: req.body.board_text,
        jj_post_state: 1
    }).then(result => {
        console.log("데이터 추가 완료");
        res.redirect("/board/list/jeju");
    })
        .catch((err) => {
            console.log(err)
            console.log("데이터 추가 실패");
        })
})

/* -------------- gw_post -------------- */

router.get('/gangwon', function(req,res) {
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    var offset = 0;
    let login = false;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if(page > 1) {
        offset = limit * (page - 1);
    }
    
    models.gw_info_board.findAndCountAll({
        attributes: ['gw_post_no', 'gw_post_title', 'gw_writer', 'gw_write_date', 'gw_hit'],
        where: {gw_post_state: 1},
        order: [['gw_write_date', 'DESC']]
    }).then(result => {
        var count = result.rows.length;
        var maxPage = Math.ceil(count / limit);
        if (req.session.nickname) 
           login = true 
        else 
            login = false
        res.render('region_post/gw_post', {
            rows: result.rows,
            currentPage: page,
            maxPage: maxPage,
            limit: limit,
            length: result.rows.length-1,
            page_num: 10,
            islogin: login,
            currentSearchWord: null
        })
    })
});

router.post('/gangwon', function (req, res) {
    models.gw_info_board.create({
        gw_writer: req.session.nickname,
        gw_post_title: req.body.board_subject,
        gw_post_text: req.body.board_text,
        gw_post_state: 1
    }).then(result => {
        console.log("데이터 추가 완료");
        res.redirect("/board/list/gangwon");
    })
        .catch((err) => {
            console.log(err)
            console.log("데이터 추가 실패");
        })
})

/* -------------- gs_post -------------- */

router.get('/gyeongsang', function(req,res) {
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    var offset = 0;
    let login = false;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if(page > 1) {
        offset = limit * (page - 1);
    }
    
    models.gs_info_board.findAndCountAll({
        attributes: ['gs_post_no', 'gs_post_title', 'gs_writer', 'gs_write_date', 'gs_hit'],
        where: {gs_post_state: 1},
        order: [['gs_write_date', 'DESC']]
    }).then(result => {
        var count = result.rows.length;
        var maxPage = Math.ceil(count / limit);
        if (req.session.nickname) 
           login = true 
        else 
            login = false
        res.render('region_post/gs_post', {
            rows: result.rows,
            currentPage: page,
            maxPage: maxPage,
            limit: limit,
            length: result.rows.length-1,
            page_num: 10,
            islogin: login,
            currentSearchWord: null
        })
    })
});

router.post('/gyeongsang', function (req, res) {
    models.gs_info_board.create({
        gs_writer: req.session.nickname,
        gs_post_title: req.body.board_subject,
        gs_post_text: req.body.board_text,
        gs_post_state: 1
    }).then(result => {
        console.log("데이터 추가 완료");
        res.redirect('/board/list/gyeongsang')
    }).catch((err) => {
        console.log(err)
        console.log("데이터 추가 실패")
    })
})

/* -------------- cc_post -------------- */

router.get('/chungcheong', function(req,res) {
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    var offset = 0;
    let login = false
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if(page > 1) {
        offset = limit * (page - 1);
    }
    
    models.cc_info_board.findAndCountAll({
        attributes: ['cc_post_no', 'cc_post_title', 'cc_writer', 'cc_write_date', 'cc_hit'],
        where: {cc_post_state: 1},
        order: [['cc_write_date', 'DESC']]
    }).then(result => {
        var count = result.rows.length;
        var maxPage = Math.ceil(count / limit);
        if (req.session.nickname) 
           login = true 
        else 
            login = false
        res.render('region_post/cc_post', {
            rows: result.rows,
            currentPage: page,
            maxPage: maxPage,
            limit: limit,
            length: result.rows.length-1,
            page_num: 10,
            islogin: login,
            currentSearchWord: null
        })
    })
});

router.post('/chungcheong', function (req, res) {
    models.cc_info_board.create({
        cc_writer: req.session.nickname,
        cc_post_title: req.body.board_subject,
        cc_post_text: req.body.board_text,
        cc_post_state: 1
    }).then(result => {
        console.log("데이터 추가 완료");
        res.redirect("/board/list/chungcheong");
    })
        .catch((err) => {
            console.log(err)
            console.log("데이터 추가 실패");
        })
})

module.exports = router;