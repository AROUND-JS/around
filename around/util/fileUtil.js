const models = require('../models'),
      path = require('path'),
      fs = require('fs'),
      iconvLite = require('iconv-lite');

class filUtil {
    companionAttach(file, uploadedby, postid){
        // console.log(file.mimetype)
        models.c_attachment.create({
            originalFileName : file.originalname,
            serverFileName : file.filename,
            size : file.size,
            uploadedBy : uploadedby,
            postId : postid,
            path : file.path.substring(6),
            filetype : file.mimetype
        })
        .then(result => {
            console.log("첨부파일 저장 성공")
        })
        .catch(err => {
            console.log('첨부파일 저장 실패')
            console.log(err)
        })
    }

    companionDelete(postid){
        models.c_attachment.update({
            state : 0
        },{
            where : {postId : postid}
        })
        .then(result => {
            console.log("첨부파일 삭제 성공")
        })
        .catch(err => {
            console.log('첨부파일 삭제 실패')
            console.log(err)
        })
    }

    ssAttach(file, uploadedby, postid){
        // console.log(file.mimetype)
        models.ss_attachment.create({
            originalFileName : file.originalname,
            serverFileName : file.filename,
            size : file.size,
            uploadedBy : uploadedby,
            postId : postid,
            path : file.path.substring(6),
            filetype : file.mimetype
        })
        .then(result => {
            console.log("첨부파일 저장 성공")
        })
        .catch(err => {
            console.log('첨부파일 저장 실패')
            console.log(err)
        })
    }

    ssDelete(postid){
        models.ss_attachment.update({
            state : 0
        },{
            where : {postId : postid}
        })
        .then(result => {
            console.log("첨부파일 삭제 성공")
        })
        .catch(err => {
            console.log('첨부파일 삭제 실패')
            console.log(err)
        })
    }

    ccAttach(file, uploadedby, postid){
        // console.log(file.mimetype)
        models.cc_attachment.create({
            originalFileName : file.originalname,
            serverFileName : file.filename,
            size : file.size,
            uploadedBy : uploadedby,
            postId : postid,
            path : file.path.substring(6),
            filetype : file.mimetype
        })
        .then(result => {
            console.log("첨부파일 저장 성공")
        })
        .catch(err => {
            console.log('첨부파일 저장 실패')
            console.log(err)
        })
    }

    ccDelete(postid){
        models.cc_attachment.update({
            state : 0
        },{
            where : {postId : postid}
        })
        .then(result => {
            console.log("첨부파일 삭제 성공")
        })
        .catch(err => {
            console.log('첨부파일 삭제 실패')
            console.log(err)
        })
    }

    gsAttach(file, uploadedby, postid){
        // console.log(file.mimetype)
        models.gs_attachment.create({
            originalFileName : file.originalname,
            serverFileName : file.filename,
            size : file.size,
            uploadedBy : uploadedby,
            postId : postid,
            path : file.path.substring(6),
            filetype : file.mimetype
        })
        .then(result => {
            console.log("첨부파일 저장 성공")
        })
        .catch(err => {
            console.log('첨부파일 저장 실패')
            console.log(err)
        })
    }

    gsDelete(postid){
        models.gs_attachment.update({
            state : 0
        },{
            where : {postId : postid}
        })
        .then(result => {
            console.log("첨부파일 삭제 성공")
        })
        .catch(err => {
            console.log('첨부파일 삭제 실패')
            console.log(err)
        })
    }

    gwAttach(file, uploadedby, postid){
        // console.log(file.mimetype)
        models.gw_attachment.create({
            originalFileName : file.originalname,
            serverFileName : file.filename,
            size : file.size,
            uploadedBy : uploadedby,
            postId : postid,
            path : file.path.substring(6),
            filetype : file.mimetype
        })
        .then(result => {
            console.log("첨부파일 저장 성공")
        })
        .catch(err => {
            console.log('첨부파일 저장 실패')
            console.log(err)
        })
    }

    gwDelete(postid){
        models.gw_attachment.update({
            state : 0
        },{
            where : {postId : postid}
        })
        .then(result => {
            console.log("첨부파일 삭제 성공")
        })
        .catch(err => {
            console.log('첨부파일 삭제 실패')
            console.log(err)
        })
    }

    jjAttach(file, uploadedby, postid){
        // console.log(file.mimetype)
        models.jj_attachment.create({
            originalFileName : file.originalname,
            serverFileName : file.filename,
            size : file.size,
            uploadedBy : uploadedby,
            postId : postid,
            path : file.path.substring(6),
            filetype : file.mimetype
        })
        .then(result => {
            console.log("첨부파일 저장 성공")
        })
        .catch(err => {
            console.log('첨부파일 저장 실패')
            console.log(err)
        })
    }

    jjDelete(postid){
        models.jj_attachment.update({
            state : 0
        },{
            where : {postId : postid}
        })
        .then(result => {
            console.log("첨부파일 삭제 성공")
        })
        .catch(err => {
            console.log('첨부파일 삭제 실패')
            console.log(err)
        })
    }

    jlAttach(file, uploadedby, postid){
        // console.log(file.mimetype)
        models.jl_attachment.create({
            originalFileName : file.originalname,
            serverFileName : file.filename,
            size : file.size,
            uploadedBy : uploadedby,
            postId : postid,
            path : file.path.substring(6),
            filetype : file.mimetype
        })
        .then(result => {
            console.log("첨부파일 저장 성공")
        })
        .catch(err => {
            console.log('첨부파일 저장 실패')
            console.log(err)
        })
    }

    jlDelete(postid){
        models.jl_attachment.update({
            state : 0
        },{
            where : {postId : postid}
        })
        .then(result => {
            console.log("첨부파일 삭제 성공")
        })
        .catch(err => {
            console.log('첨부파일 삭제 실패')
            console.log(err)
        })
    }

    sgiAttach(file, uploadedby, postid){
        // console.log(file)
        models.sgi_attachment.create({
            originalFileName : file.originalname,
            serverFileName : file.filename,
            size : file.size,
            uploadedBy : uploadedby,
            postId : postid,
            path : file.path.substring(6),
            filetype : file.mimetype
        })
        .then(result => {
            console.log("첨부파일 저장 성공")
        })
        .catch(err => {
            console.log('첨부파일 저장 실패')
            console.log(err)
        })
    }

    sgiDelete(postid){
        models.sgi_attachment.update({
            state : 0
        },{
            where : {postId : postid}
        })
        .then(result => {
            console.log("첨부파일 삭제 성공")
        })
        .catch(err => {
            console.log('첨부파일 삭제 실패')
            console.log(err)
        })
    }

    getFileStream(serverfilename){
        let stream = null;
        let filePath = path.join(__dirname, '..', '/public', '/uploads', serverfilename)
        let fileExists = fs.existsSync(filePath)
        if(fileExists){
            stream = fs.createReadStream(filePath)
        }
        return stream
    }

    getDownloadFileName(req, filename){
        var header = req.headers['user-agent']

        if(header.includes("MSIE") || header.includes("Trident")){
            return encodeURIComponent(filename).replace(/\\+/gi, "%20")
        }
        else if(header.includes("Chrome")){
            return iconvLite.decode(iconvLite.encode(filename, "UTF-8"), 'ISO-8859-1')
        }
        else if(header.header.includes("Firefox")){
            return iconvLite.decode(iconvLite.encode(filename, 'UTF-8'), 'ISO-8859-1')
        }

        return filename
    }
}
module.exports = new filUtil();