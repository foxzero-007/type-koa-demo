import {config as devConfig} from "./dev"
import {config as prodConfig} from "./prod"
var config = process.env.NODE_ENV === "" ? devConfig : prodConfig;
console.log(config)
export {config}