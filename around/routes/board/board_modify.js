'use strict'
var express = require('express');
var app = express();
const models = require('../../models');
var router = express.Router();

router.get('/companion_board/:id', function (req, res) {
    models.companion_board.findOne({
        where: { c_post_no: req.params.id }
    })
        .then(result => {
            res.render('post/c_post_modify', {
                cb: result,
                islogin: true
            })
        })
        .catch(err => {
            console.log(err)
        })
});

router.put('/companion_board/:id', function (req, res) {

    models.companion_board.update({
        c_region: req.body.regionType,
        c_dept_date: req.body.dept_date,
        c_post_title: req.body.board_subject,
        c_post_text: req.body.board_text,
        c_post_file: req.body.board_image
    }, {
        where: { c_post_no: req.params.id }
    })
        .then(result => {
            console.log("데이터 수정 완료");
            res.redirect('/board/read/companion_board/' + req.params.id);
        })
        .catch(err => {
            console.log("데이터 수정 실패");
        });
});

router.get('/schedule_share/:id', function (req, res) {
    models.schedule_share.findOne({
        where: { ss_post_no: req.params.id }
    })
        .then(result => {
            res.render('post/ss_post_modify', {
                ss: result,
                islogin: true
            })
        })
        .catch(err => {
            console.log(err);
        })
})

router.put('/schedule_share/:id', function (req, res) {
    models.schedule_share.update({
        ss_region: req.body.regionType,
        ss_dept_date: req.body.dept_date,
        ss_post_title: req.body.board_subject,
        ss_post_text: req.body.board_text,
        ss_post_file: req.body.board_image
    }, {
        where: { ss_post_no: req.params.id }
    })
        .then(result => {
            console.log("데이터 수정 완료");
            res.redirect('/board/read/schedule_share/' + req.params.id);
        })
        .catch(err => {
            console.log("데이터 수정 실패");
        });
})

router.get('/sgi/:id', function (req, res) {
    models.sgi_info_board.findOne({
        where: { sgi_post_no: req.params.id }
    })
    .then(result => {
        res.render('region_post/sgi_post_modify', {
            sgi: result,
            islogin: true
        })
    })
    .catch(err => {
        console.log(err)
    });
})

router.put('/sgi/:id', function (req, res) {
    models.sgi_info_board.update({
        sgi_post_title: req.body.board_subject,
        sgi_post_text: req.body.board_text,
        sgi_post_file: req.body.board_image
    }, {
        where: { sgi_post_no: req.params.id }
    })
    .then(result => {
        console.log("데이터 수정 완료")
        res.redirect('/board/read/sgi/'+req.params.id)
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

router.get('/jeonla/:id', function (req, res) {
    models.jl_info_board.findOne({
        where: { jl_post_no: req.params.id }
    })
    .then(result => {
        res.render('region_post/jl_post_modify', {
            jl: result,
            islogin: true
        })
    })
    .catch(err => {
        console.log(err)
    });
})

router.put('/jeonla/:id', function (req, res) {
    models.jl_info_board.update({
        jl_post_title: req.body.board_subject,
        jl_post_text: req.body.board_text,
        jl_post_file: req.body.board_image
    }, {
        where: { jl_post_no: req.params.id }
    })
    .then(result => {
        console.log("데이터 수정 완료")
        res.redirect('/board/read/jeonla/'+req.params.id)
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

router.get('/jeju/:id', function (req, res) {
    models.jj_info_board.findOne({
        where: { jj_post_no: req.params.id }
    })
    .then(result => {
        res.render('region_post/jj_post_modify', {
            jj: result,
            islogin: true
        })
    })
    .catch(err => {
        console.log(err)
    });
})

router.put('/jeju/:id', function (req, res) {
    models.jj_info_board.update({
        jj_post_title: req.body.board_subject,
        jj_post_text: req.body.board_text,
        jj_post_file: req.body.board_image
    }, {
        where: { jj_post_no: req.params.id }
    })
    .then(result => {
        console.log("데이터 수정 완료")
        res.redirect('/board/read/jeju/'+req.params.id)
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

router.get('/gangwon/:id', function (req, res) {
    models.gw_info_board.findOne({
        where: { gw_post_no: req.params.id }
    })
    .then(result => {
        res.render('region_post/gw_post_modify', {
            gw: result,
            islogin: true
        })
    })
    .catch(err => {
        console.log(err)
    });
})

router.put('/gangwon/:id', function (req, res) {
    models.gw_info_board.update({
        gw_post_title: req.body.board_subject,
        gw_post_text: req.body.board_text,
        gw_post_file: req.body.board_image
    }, {
        where: { gw_post_no: req.params.id }
    })
    .then(result => {
        console.log("데이터 수정 완료")
        res.redirect('/board/read/gangwon/'+req.params.id)
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

router.get('/gyeongsang/:id', function (req, res) {
    models.gs_info_board.findOne({
        where: { gs_post_no: req.params.id }
    })
    .then(result => {
        res.render('region_post/gs_post_modify', {
            gs: result,
            islogin: true
        })
    })
    .catch(err => {
        console.log(err)
    });
})

router.put('/gyeongsang/:id', function (req, res) {
    models.gs_info_board.update({
        gs_post_title: req.body.board_subject,
        gs_post_text: req.body.board_text,
        gs_post_file: req.body.board_image
    }, {
        where: { gs_post_no: req.params.id }
    })
    .then(result => {
        console.log("데이터 수정 완료")
        res.redirect('/board/read/gyeongsang/'+req.params.id)
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

router.get('/chungcheong/:id', function (req, res) {
    models.cc_info_board.findOne({
        where: { cc_post_no: req.params.id }
    })
        .then(result => {
            res.render('region_post/cc_post_modify', {
                cc: result,
                islogin: true
            })
        })
        .catch(err => {
            console.log(err);
        })
})

router.put('/chungcheong/:id', function (req, res) {
    models.cc_info_board.update({
        cc_post_title: req.body.board_subject,
        cc_post_text: req.body.board_text,
        cc_post_file: req.body.board_image
    }, {
        where: { cc_post_no: req.params.id }
    })
    .then (result => {
        console.log("데이터 수정 완료")
        res.redirect('/board/read/chungcheong/' + req.params.id);
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

module.exports = router;
