'use strict'
const express = require('express'),
      router = express.Router(),
      models = require('../models'),
      attachUtil = require('../util/fileUtil');

router.get('/companion_board/:serverfilename', (req, res) => {
    console.log(req.params.serverfilename)
    models.c_attachment.findOne({
        where :{
            serverFileName : req.params.serverfilename
        }
    })
    .then(result => {
        let stream = attachUtil.getFileStream(result.dataValues.serverFileName)
        if(stream){
            res.writeHead(200, {
                'Content-Type' : 'application/octet-stream',
                'Content-Disposition' : 'attachment; filename=' + attachUtil.getDownloadFileName(req, result.dataValues.serverFileName)
            });
            stream.pipe(res)
        }
        else{
            res.statusCode = 404;
            res.end()
        }
    })
})

router.delete('/companion_board/:c_post_no', (req, res) => {
    console.log('Tlqkf')
    let c_post_no = req.params.c_post_no
    models.c_attachment.destroy({
        include : {postId : c_post_no}
    })
    .then(result => {
        console.log('첨부파일 삭제 성공')
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/schedule_share/:serverfilename', (req, res) => {
    models.ss_attachment.findOne({
        where :{
            serverFileName : req.params.serverfilename
        }
    })
    .then(result => {
        let stream = attachUtil.getFileStream(result.dataValues.serverFileName)
        if(stream){
            res.writeHead(200, {
                'Content-Type' : 'application/octet-stream',
                'Content-Disposition' : 'attachment; filename=' + attachUtil.getDownloadFileName(req, result.dataValues.serverFileName)
            });
            stream.pipe(res)
        }
        else{
            res.statusCode = 404;
            res.end()
        }
    })
})

router.get('/cc/:serverfilename', (req, res) => {
    models.cc_attachment.findOne({
        where :{
            serverFileName : req.params.serverfilename
        }
    })
    .then(result => {
        let stream = attachUtil.getFileStream(result.dataValues.serverFileName)
        if(stream){
            res.writeHead(200, {
                'Content-Type' : 'application/octet-stream',
                'Content-Disposition' : 'attachment; filename=' + attachUtil.getDownloadFileName(req, result.dataValues.serverFileName)
            });
            stream.pipe(res)
        }
        else{
            res.statusCode = 404;
            res.end()
        }
    })
})

router.get('/gs/:serverfilename', (req, res) => {
    models.gs_attachment.findOne({
        where :{
            serverFileName : req.params.serverfilename
        }
    })
    .then(result => {
        let stream = attachUtil.getFileStream(result.dataValues.serverFileName)
        if(stream){
            res.writeHead(200, {
                'Content-Type' : 'application/octet-stream',
                'Content-Disposition' : 'attachment; filename=' + attachUtil.getDownloadFileName(req, result.dataValues.serverFileName)
            });
            stream.pipe(res)
        }
        else{
            res.statusCode = 404;
            res.end()
        }
    })
})

router.get('/gw/:serverfilename', (req, res) => {
    models.gw_attachment.findOne({
        where :{
            serverFileName : req.params.serverfilename
        }
    })
    .then(result => {
        let stream = attachUtil.getFileStream(result.dataValues.serverFileName)
        if(stream){
            res.writeHead(200, {
                'Content-Type' : 'application/octet-stream',
                'Content-Disposition' : 'attachment; filename=' + attachUtil.getDownloadFileName(req, result.dataValues.serverFileName)
            });
            stream.pipe(res)
        }
        else{
            res.statusCode = 404;
            res.end()
        }
    })
})

router.get('/jj/:serverfilename', (req, res) => {
    models.jj_attachment.findOne({
        where :{
            serverFileName : req.params.serverfilename
        }
    })
    .then(result => {
        let stream = attachUtil.getFileStream(result.dataValues.serverFileName)
        if(stream){
            res.writeHead(200, {
                'Content-Type' : 'application/octet-stream',
                'Content-Disposition' : 'attachment; filename=' + attachUtil.getDownloadFileName(req, result.dataValues.serverFileName)
            });
            stream.pipe(res)
        }
        else{
            res.statusCode = 404;
            res.end()
        }
    })
})

router.get('/jl/:serverfilename', (req, res) => {
    models.jl_attachment.findOne({
        where :{
            serverFileName : req.params.serverfilename
        }
    })
    .then(result => {
        let stream = attachUtil.getFileStream(result.dataValues.serverFileName)
        if(stream){
            res.writeHead(200, {
                'Content-Type' : 'application/octet-stream',
                'Content-Disposition' : 'attachment; filename=' + attachUtil.getDownloadFileName(req, result.dataValues.serverFileName)
            });
            stream.pipe(res)
        }
        else{
            res.statusCode = 404;
            res.end()
        }
    })
})

router.get('/sgi/:serverfilename', (req, res) => {
    models.sgi_attachment.findOne({
        where :{
            serverFileName : req.params.serverfilename
        }
    })
    .then(result => {
        let stream = attachUtil.getFileStream(result.dataValues.serverFileName)
        if(stream){
            res.writeHead(200, {
                'Content-Type' : 'application/octet-stream',
                'Content-Disposition' : 'attachment; filename=' + attachUtil.getDownloadFileName(req, result.dataValues.serverFileName)
            });
            stream.pipe(res)
        }
        else{
            res.statusCode = 404;
            res.end()
        }
    })
})


module.exports = router;