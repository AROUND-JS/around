'use strict'
var express = require('express');
var app = express();
const models = require('../../models');
var router = express.Router();

router.get('/companion_board/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.companion_board.findOne({
        where: { c_post_no: req.params.id }
    })
    if(result){
        let totalresult = await models.companion_board.findOne({
                include : {
                    model : models.c_comment,
                    where : {fk_board_no : result.dataValues.c_post_no,
                            c_comment_state : 1}
                }
            })
        if (totalresult) boardresult = totalresult; //댓글 있을 때
        else boardresult = result;//댓글 없을 때
        if (req.session.nickname) {
          result.c_hit = result.c_hit + 1;
          res.render("post/c_post_read", {
            cb: boardresult,
            islogin: true,
            nickname: req.session.nickname
          });
          models.companion_board.update(
              { c_hit: result.c_hit},
              { where: { c_post_no: req.params.id }})
            .then(result => {
                console.log('조회수 증가')
            })
            .catch(err => {
              console.log("조회수 증가 에러");
            });
        }
        else {//로그인이 안돼 있을 때
            res.redirect('/members/signin')
        }
    }
    else{//없는 게시글 일 때
        console.log('게시글 조회 실패')
        res.redirect('/board/list/companion_board/')
    }
});

router.get('/schedule_share/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.schedule_share.findOne({
        where: { ss_post_no: req.params.id }
    })
    if(result){
        let totalresult = await models.schedule_share.findOne({
                include : {
                    model : models.ss_comment,
                    where : {fk_board_no : result.dataValues.ss_post_no,
                            ss_comment_state : 1}
                }
            })
        if (totalresult) boardresult = totalresult; //댓글 있을 때
        else boardresult = result;//댓글 없을 때
        if (req.session.nickname) {
          result.ss_hit = result.ss_hit + 1;
          res.render("post/ss_post_read", {
            ss: boardresult,
            islogin: true,
            nickname: req.session.nickname
          });
          models.schedule_share.update(
              { ss_hit: result.ss_hit},
              { where: { ss_post_no: req.params.id }})
            .then(result => {
                console.log('조회수 증가')
            })
            .catch(err => {
              console.log("조회수 증가 에러");
            });
        }
        else {//로그인이 안돼 있을 때
            res.redirect('/members/signin')
        }
    }
    else{//없는 게시글 일 때
        console.log('게시글 조회 실패')
        res.redirect('/board/list/schedule_share/')
    }
})

router.get('/sgi/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.sgi_info_board.findOne({
        where: { sgi_post_no: req.params.id }
    })
    if(result){
        let totalresult = await models.sgi_info_board.findOne({
                include : {
                    model : models.sgi_comment,
                    where : {fk_board_no : result.dataValues.sgi_post_no,
                            sgi_comment_state : 1}
                }
            })
        if (totalresult) boardresult = totalresult; //댓글 있을 때
        else boardresult = result;//댓글 없을 때
        if (req.session.nickname) {
          result.sgi_hit = result.sgi_hit + 1;
          res.render("region_post/sgi_post_read", {
            sgi: boardresult,
            islogin: true,
            nickname: req.session.nickname
          });
          models.sgi_info_board.update(
              { sgi_hit: result.sgi_hit},
              { where: { sgi_post_no: req.params.id }})
            .then(result => {
                console.log('조회수 증가')
            })
            .catch(err => {
              console.log("조회수 증가 에러");
            });
        }
        else {//로그인이 안돼 있을 때
            res.redirect('/members/signin')
        }
    }
    else{//없는 게시글 일 때
        console.log('게시글 조회 실패')
        res.redirect('/board/list/sgi_info_board/')
    }
})

router.get('/jeonla/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.jl_info_board.findOne({
        where: { jl_post_no: req.params.id }
    })
    if(result){
        let totalresult = await models.jl_info_board.findOne({
                include : {
                    model : models.jl_comment,
                    where : {fk_board_no : result.dataValues.jl_post_no,
                            jl_comment_state : 1}
                }
            })
        if (totalresult) boardresult = totalresult; //댓글 있을 때
        else boardresult = result;//댓글 없을 때
        if (req.session.nickname) {
          result.jl_hit = result.jl_hit + 1;
          res.render("region_post/jl_post_read", {
            jl: boardresult,
            islogin: true,
            nickname: req.session.nickname
          });
          models.jl_info_board.update(
              { jl_hit: result.jl_hit},
              { where: { jl_post_no: req.params.id }})
            .then(result => {
                console.log('조회수 증가')
            })
            .catch(err => {
              console.log("조회수 증가 에러");
            });
        }
        else {//로그인이 안돼 있을 때
            res.redirect('/members/signin')
        }
    }
    else{//없는 게시글 일 때
        console.log('게시글 조회 실패')
        res.redirect('/board/list/jl_info_board/')
    }
})

router.get('/jeju/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.jj_info_board.findOne({
        where: { jj_post_no: req.params.id }
    })
    if(result){
        let totalresult = await models.jj_info_board.findOne({
                include : {
                    model : models.jj_comment,
                    where : {fk_board_no : result.dataValues.jj_post_no,
                            jj_comment_state : 1}
                }
            })
        if (totalresult) boardresult = totalresult; //댓글 있을 때
        else boardresult = result;//댓글 없을 때
        if (req.session.nickname) {
          result.jj_hit = result.jj_hit + 1;
          res.render("region_post/jj_post_read", {
            jj: boardresult,
            islogin: true,
            nickname: req.session.nickname
          });
          models.jj_info_board.update(
              { jj_hit: result.jj_hit},
              { where: { jj_post_no: req.params.id }})
            .then(result => {
                console.log('조회수 증가')
            })
            .catch(err => {
              console.log("조회수 증가 에러");
            });
        }
        else {//로그인이 안돼 있을 때
            res.redirect('/members/signin')
        }
    }
    else{//없는 게시글 일 때
        console.log('게시글 조회 실패')
        res.redirect('/board/list/jeju/')
    }
})

router.get('/gangwon/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.gw_info_board.findOne({
        where: { gw_post_no: req.params.id }
    })
    if(result){
        let totalresult = await models.gw_info_board.findOne({
                include : {
                    model : models.gw_comment,
                    where : {fk_board_no : result.dataValues.gw_post_no,
                            gw_comment_state : 1}
                }
            })
        if (totalresult) boardresult = totalresult; //댓글 있을 때
        else boardresult = result;//댓글 없을 때
        if (req.session.nickname) {
          result.gw_hit = result.gw_hit + 1;
          res.render("region_post/gw_post_read", {
            gw: boardresult,
            islogin: true,
            nickname: req.session.nickname
          });
          models.gw_info_board.update(
              { gw_hit: result.gw_hit},
              { where: { gw_post_no: req.params.id }})
            .then(result => {
                console.log('조회수 증가')
            })
            .catch(err => {
              console.log("조회수 증가 에러");
            });
        }
        else {//로그인이 안돼 있을 때
            res.redirect('/members/signin')
        }
    }
    else{//없는 게시글 일 때
        console.log('게시글 조회 실패')
        res.redirect('/board/list/gangwon/')
    }
})

router.get('/gyeongsang/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.gs_info_board.findOne({
        where: { gs_post_no: req.params.id }
    })
    if(result){
        let totalresult = await models.gs_info_board.findOne({
                include : {
                    model : models.gs_comment,
                    where : {fk_board_no : result.dataValues.gs_post_no,
                            gs_comment_state : 1}
                }
            })
        if (totalresult) boardresult = totalresult; //댓글 있을 때
        else boardresult = result;//댓글 없을 때
        if (req.session.nickname) {
          result.gs_hit = result.gs_hit + 1;
          res.render("region_post/gs_post_read", {
            gs: boardresult,
            islogin: true,
            nickname: req.session.nickname
          });
          models.gs_info_board.update(
              { gs_hit: result.gs_hit},
              { where: { gs_post_no: req.params.id }})
            .then(result => {
                console.log('조회수 증가')
            })
            .catch(err => {
              console.log("조회수 증가 에러");
            });
        }
        else {//로그인이 안돼 있을 때
            res.redirect('/members/signin')
        }
    }
    else{//없는 게시글 일 때
        console.log('게시글 조회 실패')
        res.redirect('/board/list/gyeongsang/')
    }
})

router.get('/chungcheong/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.cc_info_board.findOne({
        where: { cc_post_no: req.params.id }
    })
    if(result){
        let totalresult = await models.cc_info_board.findOne({
                include : {
                    model : models.cc_comment,
                    where : {fk_board_no : result.dataValues.cc_post_no,
                            cc_comment_state : 1}
                }
            })
        if (totalresult) boardresult = totalresult; //댓글 있을 때
        else boardresult = result;//댓글 없을 때
        if (req.session.nickname) {
          result.cc_hit = result.cc_hit + 1;
          res.render("region_post/cc_post_read", {
            cc: boardresult,
            islogin: true,
            nickname: req.session.nickname
          });
          models.cc_info_board.update(
              { cc_hit: result.cc_hit},
              { where: { cc_post_no: req.params.id }})
            .then(result => {
                console.log('조회수 증가')
            })
            .catch(err => {
              console.log("조회수 증가 에러");
            });
        }
        else {//로그인이 안돼 있을 때
            res.redirect('/members/signin')
        }
    }
    else{//없는 게시글 일 때
        console.log('게시글 조회 실패')
        res.redirect('/board/list/chungcheong/')
    }
})

module.exports = router;