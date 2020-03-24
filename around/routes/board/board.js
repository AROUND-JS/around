'use strict'
var express = require('express');
var router = express.Router();

var boardListRouter = require('./board_list');
var boardReadRouter = require('./board_read');
var boardModifyRouter = require('./board_modify');
var boardWriteRouter = require('./board_write');
var boardDeleteRouter = require('./board_delete');
var boardCommentRouter = require('./board_comment');
var boardSearchRouter = require('./board_search');


router.use('/list', boardListRouter);
router.use('/read', boardReadRouter);
router.use('/modify', boardModifyRouter);
router.use('/write', boardWriteRouter);
router.use('/delete', boardDeleteRouter);
router.use('/comment', boardCommentRouter);
router.use('/search', boardSearchRouter);

module.exports = router;