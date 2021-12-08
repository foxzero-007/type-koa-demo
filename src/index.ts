import Koa from 'koa'
import router from './controller'
import { config } from './config/index'
const app = new Koa()
app.use(router.routes()).use(router.allowedMethods())
app.listen(config.port)
app.env=config.env