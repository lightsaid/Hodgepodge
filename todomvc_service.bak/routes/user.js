const router = require('@koa/router')()
const db = require('../db/index')
const errCode = require('../err/index')
const response_json = require('../response/index')
const jwt = require('jsonwebtoken');
const consfig = require("../config/index")
router.prefix('/api/user')

router.post('/register', async (ctx, next) => {
    const { username, password } = ctx.request.body
    if(!(username && password)){
        ctx.body = response_json(errCode.parameter, {}, '用户名和密码不能为空')
        return
    }
    var stmt = db.prepare("INSERT INTO users(username, password) VALUES (?,?)");
    let result;
    try{
        result = stmt.run(username, password);
    }catch(err){
        let errStr = err.toString()
        if(errStr.includes("UNIQUE")){
            ctx.body = response_json(errCode.unknown, {error: errStr}, "用户名已经存在")
            return
        }
        ctx.body = response_json(errCode.unknown, {}, err.toString())
        return
    }
    if(result.changes === 1){
        ctx.body = response_json(errCode.success, {}, "注册成功")
        return
    }
    ctx.body = response_json(errCode.unknown, {}, "注册失败")
})

router.post("/login", async (ctx, next) => {
    const { username, password } = ctx.request.body
    if(!(username && password)){
        ctx.body = response_json(errCode.parameter, {}, '用户名和密码不能为空')
        return
    }
    const row = db.prepare('select id, username, avatar from users where username =? and password =?').get(username, password);
    if(row && row.id){
        let token = generateJwtToken(row)
        ctx.body = response_json(errCode.success, {userinfo: row, token: token}, '登录成功')
        return
    }
    ctx.body = response_json(errCode.success, {}, '用户名或密码不对')
})

router.get('/logout', async (ctx, next) => {
    ctx.body = {
        code: errCode.success
    }
})

router.post('/update', async (ctx, next) => {
    const { username, id } = ctx.request.body
    if(!(username && id)){
        ctx.body = response_json(errCode.parameter, {}, '所有参数不能为空')
        return
    }
    var stmt = db.prepare("UPDATE users set username = ? WHERE id = ?");
    let result = stmt.run(username, id);
    if(result && result.changes === 1){
        ctx.body = response_json(errCode.success, {}, '修改成功')
        return
    }
    ctx.body = response_json(errCode.unknown, {}, '不存在该用户')
})

function generateJwtToken(userInfo){
    return jwt.sign(userInfo, consfig.privateKey, { expiresIn: '4h' })
}

module.exports = router



