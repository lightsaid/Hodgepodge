const Koa = require('koa');
const app = new Koa();
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const jwtKoa = require("koa-jwt")
const user = require('./routes/user')
const todo = require('./routes/todo')
const config = require('./config/index')
const response_json = require('./response/index')
const errCode = require('./err/index')

  // 必须放在 jwtKoa({ secret: config.privateKey }) 之前 
  app.use((ctx, next)=>{
    return next().catch((err) => {
      if (401 == err.status) {
        ctx.status = 401;
        ctx.body = response_json(errCode.unauthorized, {}, "token 验证不通过")
      } else {
        throw err;
      }
    });
  });

  // middlewares
app.use(jwtKoa({ secret: config.privateKey }).unless({
    // 设置login、register接口不需要认证访问
    path: [
      /^\/api\/user\/login/,
      /^\/api\/user\/register/
    ]
}));

app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))
app.use(json())

app.use(user.routes(), user.allowedMethods())
app.use(todo.routes(), todo.allowedMethods())

console.log("listen: 3000")
app.listen(3000);