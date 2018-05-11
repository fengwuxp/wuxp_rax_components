import {RouteHandler} from "./RouteHandler";
import {isNullOrUndefined} from "util";


//路由处理者
let ROUTER_HANDLER: RouteHandler;


/**
 * 获取路由处理者
 * @returns {RouteHandler}
 */
export  function buildRouterHandler(): RouteHandler {
    if (!isNullOrUndefined(ROUTER_HANDLER)) {
        return ROUTER_HANDLER;
    }
    let RouteHandler;
    if (process.env.IS_WEB) {
        RouteHandler = require("./web/WebRouteHandler");
        //约定路径下的web端路由配置
        const routers = require("../../../../src/routes/WebRouteOptions");
        // console.log(routers)
        ROUTER_HANDLER = new RouteHandler(routers);
    } else {
        RouteHandler = require("./native/NativeRouteHandler");
        //约定路径下的原生端路由配置
        const routeOptions = require("../../../../src/routes/NativeRouteOptions");
        ROUTER_HANDLER = new RouteHandler(routeOptions);

    }

    return ROUTER_HANDLER;
}
