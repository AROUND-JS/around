'use strict'
var express = require('express');
var app = express();
const models = require('../../models');
const sequelize = require('sequelize')
var router = express.Router();
const Op = sequelize.Op;

/* -------------- companion_board -------------- */

router.get('/companion_board', function (req, res) {
    let searchType = req.query.searchType;
    let searchWord = req.query.keyword;
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if (page > 1) {
        offset = limit * (page - 1);
    }
    switch (searchType) {
        case 'DATA_TITLE':
            models.companion_board.findAndCountAll({
                attributes: ['c_post_no', 'c_region', 'c_dept_date', 'c_post_title', 'c_writer', 'c_write_date', 'c_hit'],
                where: {
                    c_post_title: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    c_post_state: 1
                },
                order: [['c_write_date', 'DESC']]
            })
                .then(result => {

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
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'DATA_CONTENT':
            models.companion_board.findAndCountAll({
                attributes: ['c_post_no', 'c_region', 'c_dept_date', 'c_post_title', 'c_writer', 'c_write_date', 'c_hit'],
                where: {
                    c_post_text: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    c_post_state: 1
                },
                order: [['c_write_date', 'DESC']]
            })
                .then(result => {
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
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'USER_NICK':
            models.companion_board.findAndCountAll({
                attributes: ['ss_post_no', 'ss_region', 'ss_dept_date', 'ss_post_title', 'ss_writer', 'ss_write_date', 'ss_hit'],
                where: {
                    c_writer: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    c_post_state: 1
                },
                order: [['c_write_date', 'DESC']]
            })
                .then(result => {
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
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        default:
            break;
    }
});

/* -------------- schedule_share -------------- */

router.get('/schedule_share', function (req, res) {
    let searchType = req.query.searchType;
    let searchWord = req.query.keyword;
    console.log(searchType);
    console.log(searchWord);
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if (page > 1) {
        offset = limit * (page - 1);
    }
    switch (searchType) {
        case 'DATA_TITLE':
            models.schedule_share.findAndCountAll({
                attributes: ['ss_post_no', 'ss_region', 'ss_dept_date', 'ss_post_title', 'ss_writer', 'ss_write_date', 'ss_hit'],
                where: {
                    ss_post_title: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    ss_post_state: 1
                },
                order: [['ss_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('post/sched_share_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'DATA_CONTENT':
            models.schedule_share.findAndCountAll({
                attributes: ['ss_post_no', 'ss_region', 'ss_dept_date', 'ss_post_title', 'ss_writer', 'ss_write_date', 'ss_hit'],
                where: {
                    ss_post_text: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    ss_post_state: 1
                },
                order: [['ss_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('post/sched_share_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'USER_NICK':
            models.schedule_share.findAndCountAll({
                attributes: ['ss_post_no', 'ss_region', 'ss_dept_date', 'ss_post_title', 'ss_writer', 'ss_write_date', 'ss_hit'],
                where: {
                    ss_writer: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    ss_post_state: 1
                },
                order: [['ss_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('post/sched_share_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        default:
            break;
    }
})

/* -------------- sgi_info_board -------------- */

router.get('/sgi', function (req, res) {
    let searchType = req.query.searchType;
    let searchWord = req.query.keyword;
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if (page > 1) {
        offset = limit * (page - 1);
    }
    switch (searchType) {
        case 'DATA_TITLE':
            models.sgi_info_board.findAndCountAll({
                attributes: ['sgi_post_no', 'sgi_post_title', 'sgi_writer', 'sgi_write_date', 'sgi_hit'],
                where: {
                    sgi_post_title: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    sgi_post_state: 1
                },
                order: [['sgi_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/sgi_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'DATA_CONTENT':
            models.sgi_info_board.findAndCountAll({
                attributes: ['sgi_post_no', 'sgi_post_title', 'sgi_writer', 'sgi_write_date', 'sgi_hit'],
                where: {
                    sgi_post_text: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    sgi_post_state: 1
                },
                order: [['sgi_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/sgi_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'USER_NICK':
            models.sgi_info_board.findAndCountAll({
                attributes: ['sgi_post_no', 'sgi_post_title', 'sgi_writer', 'sgi_write_date', 'sgi_hit'],
                where: {
                    sgi_writer: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    sgi_post_state: 1
                },
                order: [['sgi_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/sgi_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        default:
            break;
    }
})

/* -------------- jl_info_board -------------- */

router.get('/jeonla', function (req, res) {
    let searchType = req.query.searchType;
    let searchWord = req.query.keyword;
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if (page > 1) {
        offset = limit * (page - 1);
    }
    switch (searchType) {
        case 'DATA_TITLE':
            models.jl_info_board.findAndCountAll({
                attributes: ['jl_post_no', 'jl_post_title', 'jl_writer', 'jl_write_date', 'jl_hit'],
                where: {
                    jl_post_title: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    jl_post_state: 1
                },
                order: [['jl_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/jl_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'DATA_CONTENT':
            models.jl_info_board.findAndCountAll({
                attributes: ['jl_post_no', 'jl_post_title', 'jl_writer', 'jl_write_date', 'jl_hit'],
                where: {
                    jl_post_text: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    jl_post_state: 1
                },
                order: [['jl_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/jl_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'USER_NICK':
            models.jl_info_board.findAndCountAll({
                attributes: ['jl_post_no', 'jl_post_title', 'jl_writer', 'jl_write_date', 'jl_hit'],
                where: {
                    jl_writer: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    jl_post_state: 1
                },
                order: [['jl_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/jl_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        default:
            break;
    }
})

/* -------------- jj_info_board -------------- */

router.get('/jeju', function (req, res) {
    let searchType = req.query.searchType;
    let searchWord = req.query.keyword;
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if (page > 1) {
        offset = limit * (page - 1);
    }
    switch (searchType) {
        case 'DATA_TITLE':
            models.jj_info_board.findAndCountAll({
                attributes: ['jj_post_no', 'jj_post_title', 'jj_writer', 'jj_write_date', 'jj_hit'],
                where: {
                    jj_post_title: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    jj_post_state: 1
                },
                order: [['jj_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/jj_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'DATA_CONTENT':
            models.jj_info_board.findAndCountAll({
                attributes: ['jj_post_no', 'jj_post_title', 'jj_writer', 'jj_write_date', 'jj_hit'],
                where: {
                    jj_post_text: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    jj_post_state: 1
                },
                order: [['jj_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/jj_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'USER_NICK':
            models.jj_info_board.findAndCountAll({
                attributes: ['jj_post_no', 'jj_post_title', 'jj_writer', 'jj_write_date', 'jj_hit'],
                where: {
                    jj_writer: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    jj_post_state: 1
                },
                order: [['jj_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/jj_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        default:
            break;
    }
})

/* -------------- gw_info_board -------------- */

router.get('/gangwon', function (req, res) {
    let searchType = req.query.searchType;
    let searchWord = req.query.keyword;
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if (page > 1) {
        offset = limit * (page - 1);
    }
    switch (searchType) {
        case 'DATA_TITLE':
            models.gw_info_board.findAndCountAll({
                attributes: ['gw_post_no', 'gw_post_title', 'gw_writer', 'gw_write_date', 'gw_hit'],
                where: {
                    gw_post_title: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    gw_post_state: 1
                },
                order: [['gw_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/gw_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'DATA_CONTENT':
            models.gw_info_board.findAndCountAll({
                attributes: ['gw_post_no', 'gw_post_title', 'gw_writer', 'gw_write_date', 'gw_hit'],
                where: {
                    gw_post_text: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    gw_post_state: 1
                },
                order: [['gw_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/gw_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'USER_NICK':
            models.gw_info_board.findAndCountAll({
                attributes: ['gw_post_no', 'gw_post_title', 'gw_writer', 'gw_write_date', 'gw_hit'],
                where: {
                    gw_writer: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    gw_post_state: 1
                },
                order: [['gw_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/gw_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        default:
            break;
    }
})

/* -------------- gs_info_board -------------- */

router.get('/gyeongsang', function (req, res) {
    let searchType = req.query.searchType;
    let searchWord = req.query.keyword;
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if (page > 1) {
        offset = limit * (page - 1);
    }
    switch (searchType) {
        case 'DATA_TITLE':
            models.gs_info_board.findAndCountAll({
                attributes: ['gs_post_no', 'gs_post_title', 'gs_writer', 'gs_write_date', 'gs_hit'],
                where: {
                    gs_post_title: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    gs_post_state: 1
                },
                order: [['gs_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/gs_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'DATA_CONTENT':
            models.gs_info_board.findAndCountAll({
                attributes: ['gs_post_no', 'gs_post_title', 'gs_writer', 'gs_write_date', 'gs_hit'],
                where: {
                    gs_post_text: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    gs_post_state: 1
                },
                order: [['gs_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/gs_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'USER_NICK':
            models.gs_info_board.findAndCountAll({
                attributes: ['gs_post_no', 'gs_post_title', 'gs_writer', 'gs_write_date', 'gs_hit'],
                where: {
                    gs_writer: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    gs_post_state: 1
                },
                order: [['gs_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/gs_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        default:
            break;
    }
})

/* -------------- cc_info_board -------------- */

router.get('/chungcheong', function (req, res) {
    let searchType = req.query.searchType;
    let searchWord = req.query.keyword;
    var page = Math.max(1, parseInt(req.query.page));
    var limit = Math.max(1, parseInt(req.query.limit));
    let login = false;
    var offset = 0;
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;

    if (page > 1) {
        offset = limit * (page - 1);
    }
    switch (searchType) {
        case 'DATA_TITLE':
            models.cc_info_board.findAndCountAll({
                attributes: ['cc_post_no', 'cc_post_title', 'cc_writer', 'cc_write_date', 'cc_hit'],
                where: {
                    cc_post_title: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    cc_post_state: 1
                },
                order: [['cc_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/cc_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'DATA_CONTENT':
            models.cc_info_board.findAndCountAll({
                attributes: ['cc_post_no', 'cc_post_title', 'cc_writer', 'cc_write_date', 'cc_hit'],
                where: {
                    cc_post_text: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    cc_post_state: 1
                },
                order: [['cc_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/cc_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        case 'USER_NICK':
            models.cc_info_board.findAndCountAll({
                attributes: ['cc_post_no', 'cc_post_title', 'cc_writer', 'cc_write_date', 'cc_hit'],
                where: {
                    cc_writer: {
                        [Op.like]: "%" + searchWord + "%"
                    },
                    cc_post_state: 1
                },
                order: [['cc_write_date', 'DESC']]
            })
                .then(result => {
                    var count = result.rows.length;
                    var maxPage = Math.ceil(count / limit);
                    if (req.session.nickname) {
                        login = true
                    } else {
                        login = false
                    }
                    res.render('region_post/cc_post', {
                        rows: result.rows,
                        currentPage: page,
                        maxPage: maxPage,
                        limit: limit,
                        length: result.rows.length - 1,
                        page_num: 10,
                        islogin: login,
                        currentSearchWord: searchWord
                    })
                })
            break;
        default:
            break;
    }
})


module.exports = router;