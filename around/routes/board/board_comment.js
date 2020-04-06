'use strict'
const express = require('express'),
      router = express.Router(),
      models = require('../../models');

router.post('/chungcheong/:id', (req, res) => {
    models.cc_comment.create({
        cc_comment_writer: req.session.nickname,
        cc_comment_text: req.body.newComment,
        cc_comment_state: 1,
        fk_board_no : parseInt(req.params.id)
    })
    .then(result => {
        res.redirect('/board/read/chungcheong/' + req.params.id);
    })
    .catch(err => {
        console.log(err);
    })
})

router.patch('/chungcheong/:id', (req, res) => {
    models.cc_comment.update({
        cc_comment_state : 0
    }, {
        where : { cc_comment_no : req.params.id }
    })
    .then(result => {
        res.redirect('/board/list/chungcheong/')
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/gyeongsang/:id', (req, res) => {
    models.gs_comment.create({
        gs_comment_writer: req.session.nickname,
        gs_comment_text: req.body.newComment,
        gs_comment_state: 1,
        fk_board_no : parseInt(req.params.id)
    })
    .then(result => {
        res.redirect('/board/read/gyeongsang/' + req.params.id);
    })
    .catch(err => {
        console.log(err);
    })
})

router.patch('/gyeongsang/:id', (req, res) => {
    models.gs_comment.update({
        gs_comment_state : 0
    }, {
        where : { gs_comment_no : req.params.id }
    })
    .then(result => {
        res.redirect('/board/list/gyeongsang/')
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/gangwon/:id', (req, res) => {
    models.gw_comment.create({
        gw_comment_writer: req.session.nickname,
        gw_comment_text: req.body.newComment,
        gw_comment_state: 1,
        fk_board_no : parseInt(req.params.id)
    })
    .then(result => {
        res.redirect('/board/read/gangwon/' + req.params.id);
    })
    .catch(err => {
        console.log(err);
    })
})

router.patch('/gangwon/:id', (req, res) => {
    models.gw_comment.update({
        gw_comment_state : 0
    }, {
        where : { gw_comment_no : req.params.id }
    })
    .then(result => {
        res.redirect('/board/list/gangwon/')
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/jeju/:id', (req, res) => {
    models.jj_comment.create({
        jj_comment_writer: req.session.nickname,
        jj_comment_text: req.body.newComment,
        jj_comment_state: 1,
        fk_board_no : parseInt(req.params.id)
    })
    .then(result => {
        res.redirect('/board/read/jeju/' + req.params.id);
    })
    .catch(err => {
        console.log(err);
    })
})

router.patch('/jeju/:id', (req, res) => {
    models.jj_comment.update({
        jj_comment_state : 0
    }, {
        where : { jj_comment_no : req.params.id }
    })
    .then(result => {
        res.redirect('/board/list/jeju/')
    })
    .catch(err => {
        console.log(err)
    })
})
      
router.post('/jeonla/:id', (req, res) => {
    models.jl_comment.create({
        jl_comment_writer: req.session.nickname,
        jl_comment_text: req.body.newComment,
        jl_comment_state: 1,
        fk_board_no : parseInt(req.params.id)
    })
    .then(result => {
        res.redirect('/board/read/jeonla/' + req.params.id);
    })
    .catch(err => {
        console.log(err);
    })
})

router.patch('/jeonla/:id', (req, res) => {
    models.jl_comment.update({
        jl_comment_state : 0
    }, {
        where : { jl_comment_no : req.params.id }
    })
    .then(result => {
        res.redirect('/board/list/jeonla/')
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/sgi/:id', (req, res) => {
    models.sgi_comment.create({
        sgi_comment_writer: req.session.nickname,
        sgi_comment_text: req.body.newComment,
        sgi_comment_state: 1,
        fk_board_no : parseInt(req.params.id)
    })
    .then(result => {
        res.redirect('/board/read/sgi/' + req.params.id);
    })
    .catch(err => {
        console.log(err);
    })
})

router.patch('/sgi/:id', (req, res) => {
    models.sgi_comment.update({
        sgi_comment_state : 0
    }, {
        where : { sgi_comment_no : req.params.id }
    })
    .then(result => {
        res.redirect('/board/list/sgi/')
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/companion_board/:id', (req, res) => {
    models.c_comment.create({
        c_comment_text : req.body.newComment,
        c_comment_writer : req.session.nickname,
        c_comment_state : 1,
        fk_board_no : parseInt(req.params.id)
    })
    .then(result => {
        res.redirect('/board/read/companion_board/'+req.params.id)
    })
    .catch(err => {
        console.log(err)
    })
})

router.patch('/companion_board/:id', (req, res) => {
    models.c_comment.update({
        c_comment_state : 0
    },{
        where : {c_comment_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/companion_board/')
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/schedule_share/:id', (req, res) => {
    models.ss_comment.create({
        ss_comment_text : req.body.newComment,
        ss_comment_writer : req.session.nickname,
        ss_comment_state : 1,
        fk_board_no : parseInt(req.params.id)
    })
    .then(result => {
        res.redirect('/board/read/schedule_share/'+req.params.id)
    })
    .catch(err => {
        console.log(err)
    })
})

router.patch('/schedule_share/:id', (req, res) => {
    models.ss_comment.update({
        ss_comment_state : 0
    },{
        where : {ss_comment_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/schedule_share/')
    })
    .catch(err => {
        console.log(err)
    })
})


module.exports = router