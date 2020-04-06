'use strict'
var express = require('express');
var multer = require('multer');
var attachUtil = require('../../util/fileUtil');
const models = require('../../models');
var router = express.Router();

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/uploads/')
    },
    filename : function(req, file, cb){
        cb(null, Date.now()+ '-' + file.originalname)
    }
});

var upload = multer({storage:storage});

router.get('/companion_board/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.companion_board.findOne({
        where : {c_post_no : req.params.id}
    })
    if (result) {
        let totalresult = await models.companion_board.findOne({
            include: {
                model: models.c_attachment,
                where: { postId: result.dataValues.c_post_no,
                         state : 1 }
            }
        })
        if (totalresult) boardresult = totalresult;
        else boardresult = result;

        if (req.session.nickname) {
            res.render('post/c_post_modify', {
                cb: boardresult,
                islogin: true
            })
        }
        else {
            res.redirect('/board/list/companion_board/')
        }
    }
    else{
        console.log('해당 게시글 없음')
        res.redirect('/board/list/companion_board/')
    }
    
});

router.put('/companion_board/:id', upload.array("board_files", 5), function (req, res) {
    let files = req.files;
    let isdelete = req.body.isFileDeleted;
    if(isdelete === 'deleted'){ 
        attachUtil.companionDelete(req.params.id)
    }
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
            for(const file of files)
                attachUtil.companionAttach(file, req.session.nickname, req.params.id)
            // console.log('데이터 수정 성공')
            res.redirect('/board/read/companion_board/' + req.params.id);
        })
        .catch(err => {
            console.log(err)
            console.log("데이터 수정 실패");
        });
    
});

router.get('/schedule_share/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.schedule_share.findOne({
        where : {ss_post_no : req.params.id}
    })
    if (result) {
        let totalresult = await models.schedule_share.findOne({
            include: {
                model: models.ss_attachment,
                where: { postId: result.dataValues.ss_post_no,
                         state : 1 }
            }
        })
        if (totalresult) boardresult = totalresult;
        else boardresult = result;

        if (req.session.nickname) {
            res.render('post/ss_post_modify', {
                ss: boardresult,
                islogin: true
            })
        }
        else {
            res.redirect('/board/list/schedule_share/')
        }
    }
    else{
        console.log('해당 게시글 없음')
        res.redirect('/board/list/schedule_share/')
    }
})

router.put('/schedule_share/:id', upload.array("board_files", 5), function (req, res) {
    let files = req.files;
    let isdelete = req.body.isFileDeleted;
    if(isdelete === 'deleted'){ 
        attachUtil.ssDelete(req.params.id)
    }
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
            for(const file of files)
                attachUtil.ssAttach(file, req.session.nickname, req.params.id)
            res.redirect('/board/read/schedule_share/' + req.params.id);
        })
        .catch(err => {
            console.log("데이터 수정 실패");
        });
})

router.get('/sgi/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.sgi_info_board.findOne({
        where : {sgi_post_no : req.params.id}
    })
    if (result) {
        let totalresult = await models.sgi_info_board.findOne({
            include: {
                model: models.sgi_attachment,
                where: { postId: result.dataValues.sgi_post_no,
                         state : 1 }
            }
        })
        if (totalresult) boardresult = totalresult;
        else boardresult = result;

        if (req.session.nickname) {
            res.render('region_post/sgi_post_modify', {
                sgi: boardresult,
                islogin: true
            })
        }
        else {
            res.redirect('/board/list/sgi_post/')
        }
    }
    else{
        console.log('해당 게시글 없음')
        res.redirect('/board/list/sgi_post/')
    }
})

router.put('/sgi/:id', upload.array("board_files", 5), function (req, res) {
    let files = req.files;
    let isdelete = req.body.isFileDeleted;
    if(isdelete === 'deleted'){ 
        attachUtil.sgiDelete(req.params.id)
    }
    models.sgi_info_board.update({
        sgi_post_title: req.body.board_subject,
        sgi_post_text: req.body.board_text,
        sgi_post_file: req.body.board_image
    }, {
        where: { sgi_post_no: req.params.id }
    })
    .then(result => {
        for(const file of files)
                attachUtil.sgiAttach(file, req.session.nickname, req.params.id)
        res.redirect('/board/read/sgi/'+req.params.id)
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

router.get('/jeonla/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.jl_info_board.findOne({
        where : {jl_post_no : req.params.id}
    })
    if (result) {
        let totalresult = await models.jl_info_board.findOne({
            include: {
                model: models.jl_attachment,
                where: { postId: result.dataValues.jl_post_no,
                         state : 1 }
            }
        })
        if (totalresult) boardresult = totalresult;
        else boardresult = result;

        if (req.session.nickname) {
            res.render('region_post/jl_post_modify', {
                jl: boardresult,
                islogin: true
            })
        }
        else {
            res.redirect('/board/list/jl_post/')
        }
    }
    else{
        console.log('해당 게시글 없음')
        res.redirect('/board/list/jl_post/')
    }
})

router.put('/jeonla/:id', upload.array("board_files", 5), function (req, res) {
    let files = req.files;
    let isdelete = req.body.isFileDeleted;
    if(isdelete === 'deleted'){ 
        attachUtil.jlDelete(req.params.id)
    }
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

router.get('/jeju/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.jj_info_board.findOne({
        where : {jj_post_no : req.params.id}
    })
    if (result) {
        let totalresult = await models.jj_info_board.findOne({
            include: {
                model: models.jj_attachment,
                where: { postId: result.dataValues.jj_post_no,
                         state : 1 }
            }
        })
        if (totalresult) boardresult = totalresult;
        else boardresult = result;

        if (req.session.nickname) {
            res.render('region_post/jj_post_modify', {
                jj: boardresult,
                islogin: true
            })
        }
        else {
            res.redirect('/board/list/jj_post/')
        }
    }
    else{
        console.log('해당 게시글 없음')
        res.redirect('/board/list/jj_post/')
    }
})

router.put('/jeju/:id', upload.array("board_files", 5), function (req, res) {
    let files = req.files;
    let isdelete = req.body.isFileDeleted;
    if(isdelete === 'deleted'){ 
        attachUtil.jjDelete(req.params.id)
    }
    models.jj_info_board.update({
        jj_post_title: req.body.board_subject,
        jj_post_text: req.body.board_text,
        jj_post_file: req.body.board_image
    }, {
        where: { jj_post_no: req.params.id }
    })
    .then(result => {
        for(const file of files)
                attachUtil.jjAttach(file, req.session.nickname, req.params.id)
        res.redirect('/board/read/jeju/'+req.params.id)
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

router.get('/gangwon/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.gw_info_board.findOne({
        where : {gw_post_no : req.params.id}
    })
    if (result) {
        let totalresult = await models.gw_info_board.findOne({
            include: {
                model: models.gw_attachment,
                where: { postId: result.dataValues.gw_post_no,
                         state : 1 }
            }
        })
        if (totalresult) boardresult = totalresult;
        else boardresult = result;

        if (req.session.nickname) {
            res.render('region_post/gw_post_modify', {
                gw: boardresult,
                islogin: true
            })
        }
        else {
            res.redirect('/board/list/gw_post/')
        }
    }
    else{
        console.log('해당 게시글 없음')
        res.redirect('/board/list/gw_post/')
    }
})

router.put('/gangwon/:id', upload.array("board_files", 5), function (req, res) {
    let files = req.files;
    let isdelete = req.body.isFileDeleted;
    if(isdelete === 'deleted'){ 
        attachUtil.gwDelete(req.params.id)
    }
    models.gw_info_board.update({
        gw_post_title: req.body.board_subject,
        gw_post_text: req.body.board_text,
        gw_post_file: req.body.board_image
    }, {
        where: { gw_post_no: req.params.id }
    })
    .then(result => {
        for(const file of files)
            attachUtil.gwAttach(file, req.session.nickname, req.params.id)
        res.redirect('/board/read/gangwon/'+req.params.id)
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

router.get('/gyeongsang/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.gs_info_board.findOne({
        where : {gs_post_no : req.params.id}
    })
    if (result) {
        let totalresult = await models.gs_info_board.findOne({
            include: {
                model: models.gs_attachment,
                where: { postId: result.dataValues.gs_post_no,
                         state : 1 }
            }
        })
        if (totalresult) boardresult = totalresult;
        else boardresult = result;

        if (req.session.nickname) {
            res.render('region_post/gs_post_modify', {
                gs: boardresult,
                islogin: true
            })
        }
        else {
            res.redirect('/board/list/gs_post/')
        }
    }
    else{
        console.log('해당 게시글 없음')
        res.redirect('/board/list/gs_post/')
    }
})

router.put('/gyeongsang/:id', upload.array("board_files", 5), function (req, res) {
    let files = req.files;
    let isdelete = req.body.isFileDeleted;
    if(isdelete === 'deleted'){ 
        attachUtil.gsDelete(req.params.id)
    }
    models.gs_info_board.update({
        gs_post_title: req.body.board_subject,
        gs_post_text: req.body.board_text,
        gs_post_file: req.body.board_image
    }, {
        where: { gs_post_no: req.params.id }
    })
    .then(result => {
        for(const file of files)
                attachUtil.gsAttach(file, req.session.nickname, req.params.id)
        res.redirect('/board/read/gyeongsang/'+req.params.id)
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

router.get('/chungcheong/:id', async function (req, res) {
    let boardresult = {}
    let result = await models.cc_info_board.findOne({
        where : {cc_post_no : req.params.id}
    })
    if (result) {
        let totalresult = await models.cc_info_board.findOne({
            include: {
                model: models.cc_attachment,
                where: { postId: result.dataValues.cc_post_no,
                         state : 1 }
            }
        })
        if (totalresult) boardresult = totalresult;
        else boardresult = result;

        if (req.session.nickname) {
            res.render('region_post/cc_post_modify', {
                cc: boardresult,
                islogin: true
            })
        }
        else {
            res.redirect('/board/list/cc_post/')
        }
    }
    else{
        console.log('해당 게시글 없음')
        res.redirect('/board/list/cc_post/')
    }
})

router.put('/chungcheong/:id', upload.array("board_files", 5), function (req, res) {
    let files = req.files;
    let isdelete = req.body.isFileDeleted;
    if(isdelete === 'deleted'){ 
        attachUtil.ccDelete(req.params.id)
    }
    models.cc_info_board.update({
        cc_post_title: req.body.board_subject,
        cc_post_text: req.body.board_text,
        cc_post_file: req.body.board_image
    }, {
        where: { cc_post_no: req.params.id }
    })
    .then (result => {
        for(const file of files)
                attachUtil.ccAttach(file, req.session.nickname, req.params.id)
        res.redirect('/board/read/chungcheong/' + req.params.id);
    })
    .catch(err => {
        console.log("데이터 수정 실패")
    });
})

module.exports = router;
