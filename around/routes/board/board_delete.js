'use strict'
var express = require('express');
const models = require('../../models');
var router = express.Router();

router.patch('/companion_board/:id', function(req, res) {
    models.companion_board.update({
        c_post_state : 0
    },{
        where : {c_post_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/companion_board')
    })
    .catch(err => {
        console.log(err)
    })
})

router.patch('/schedule_share/:id', function(req, res) {
    models.schedule_share.update({
        ss_post_state : 0
    },{
        where : {ss_post_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/schedule_share')
    })
    .catch(err => {
        console.log(err)
    })
})

router.patch('/sgi/:id', function(req, res) {
    models.sgi_info_board.update({
        sgi_post_state : 0
    },{
        where : {sgi_post_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/sgi')
    })
    .catch(err => {
        console.log(err)
    })
})

router.patch('/jeonla/:id', function(req, res) {
    models.jl_info_board.update({
        jl_post_state : 0
    },{
        where : {jl_post_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/jeonla')
    })
    .catch(err => {
        console.log(err)
    })
})

router.patch('/jeju/:id', function(req, res) {
    models.jj_info_board.update({
        jj_post_state : 0
    },{
        where : {jj_post_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/jeju')
    })
    .catch(err => {
        console.log(err)
    })
})

router.patch('/gangwon/:id', function(req, res) {
    models.gw_info_board.update({
        gw_post_state : 0
    },{
        where : {gw_post_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/gangwon')
    })
    .catch(err => {
        console.log(err)
    })
})

router.patch('/gyeongsang/:id', function(req, res) {
    models.gs_info_board.update({
        gs_post_state : 0
    },{
        where : {gs_post_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/gyeongsang')
    })
    .catch(err => {
        console.log(err)
    })
})

router.patch('/chungcheong/:id', function(req, res) {
    models.cc_info_board.update({
        cc_post_state : 0
    },{
        where : {cc_post_no : req.params.id}
    })
    .then(result => {
        res.redirect('/board/list/chungcheong')
    })
    .catch(err => {
        console.log(err)
    })
})


module.exports = router