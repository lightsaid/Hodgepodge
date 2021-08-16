const router = require('@koa/router')()
const config = require("../config/index")
const errCode = require('../err/index')
const db = require('../db/index')
const jwt = require('jsonwebtoken');
const response_json = require('../response/index')

router.prefix('/api/todo')

router.get("/list", async (ctx, next) => {
    let list = db.prepare("SELECT id, userId, content, status, createdAt, updatedAt from items WHERE deleted = 0;").all()
    ctx.body = response_json(errCode.success, {list}, "成功")
})

router.post('/created', async (ctx, next) => {
    const { content } = ctx.request.body
    if(!content){
        ctx.body = response_json(errCode.parameter, {}, '内容不能为空')
        return
    }
    let token = ctx.headers.authorization
    // 获取的 Authorization 格式为：Bearer <token>
    let userInfo = jwt.verify(token.split(' ')[1], config.privateKey)
    if(!(userInfo && userInfo.id)){
        ctx.body = response_json(errCode.unauthorized, {}, "登录异常，身份失效")
        return
    }
    let stmt = db.prepare("INSERT INTO items(userId, content) VALUES (?, ?)");
    let result;
    try{
        result = stmt.run(userInfo.id, content);
    }catch(err){
        ctx.body = response_json(errCode.unknown, {}, err.toString())
        return
    }
    if(result.changes === 1){
        ctx.body = response_json(errCode.success, {}, "添加成功")
        return
    }
    ctx.body = response_json(errCode.unknown, {}, "添加失败")
})

router.post('/update', async (ctx, next) => {
    const { content, id } = ctx.request.body
    if(!(content && id)){
        ctx.body = response_json(errCode.parameter, {}, '所有参数不能为空')
        return
    }
    var stmt = db.prepare("UPDATE items set content = ? WHERE id = ?");
    let result = stmt.run(content, id);
    if(result && result.changes === 1){
        ctx.body = response_json(errCode.success, {}, '修改成功')
        return
    }
    ctx.body = response_json(errCode.unknown, {}, '不存在该项')
})

router.post('/status', async (ctx, next) => {
    const { status, id } = ctx.request.body
    if(!(status && id)){
        ctx.body = response_json(errCode.parameter, {}, '所有参数不能为空')
        return
    }
    var stmt = db.prepare("UPDATE items set status=? WHERE id=?");
    let result = stmt.run(status, id);
    if(result && result.changes === 1){
        ctx.body = response_json(errCode.success, {}, '修改成功')
        return
    }
    ctx.body = response_json(errCode.unknown, {}, '不存在该项')
})

router.post('/deleted', async (ctx, next) => {
    const { ids } = ctx.request.body
    let sqlStr = "UPDATE items set deleted=1 WHERE ";
    if(!(ids && ids.length)){
        ctx.body = response_json(errCode.parameter, {}, '删除 Id 不能为空')
        return
    }
    ids.forEach(function(id, index) {
        if(ids.length===1){
            sqlStr += " id=" + id
        } else {
            sqlStr += " id=" + id + (index===ids.length - 1 ? "" : " or ")
        }
    });
    var stmt = db.prepare(sqlStr);
    let result = stmt.run();
    if(result && result.changes > 0){
        ctx.body = response_json(errCode.success, {}, '修改成功')
        return
    }
    ctx.body = response_json(errCode.unknown, {}, '不存在该项')
})

router.get("/list/:id", async (ctx, next) => {
    const { id } = ctx.params
    ctx.body = {
        id: id
    }
})

module.exports = router
