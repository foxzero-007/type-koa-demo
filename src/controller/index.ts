import Router from "koa-router";
let router:Router = new Router();
router.get('/',async (ctx,next)=>{
    ctx.body="hello world"
})

export default router