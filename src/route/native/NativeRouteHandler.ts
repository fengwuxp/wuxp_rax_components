import {RouteHandler, RouteParam} from "../RouteHandler";
// import {navigator} from "../../utils/ExportWeexSdkModel";
import {NativeRouteOption, RouteMeta, RouteOption} from "./NativeRouteOption";
import {isFunction, isNullOrUndefined} from "util";
import {URLArgumentsResolve} from "../URLArgumentsResolve";


/**
 * 默认路由元数据
 * @type {{main: boolean; requireAuth: boolean}}
 */
const DEFAULT_ROUTE_META: RouteMeta = {main: false, requireAuth: false};

//导入原生导航模块


const packageName: string = navigator.appName;
// if (packageName === null || packageName === undefined || packageName.toString().trim().length === 0) {
//     packageName = weex.config.env.appName;
// }

//原生路由配置
let ROUTE_OPTIONS: NativeRouteOption;
/**
 * 原生路由处理者
 */
export default class NativeRouteHandler implements RouteHandler {

    /**
     * 原生路由配置
     * @param {NativeRouteOption} routeOptions
     */
    constructor(routeOptions: NativeRouteOption) {
        ROUTE_OPTIONS = routeOptions;
    }

    back(): void {
        // navigator
       close();
    }

    jump(uri: string, params: RouteParam, filter?: () => boolean | Promise<boolean>, animationType?: any): void {
        let url = buildPageUrl(uri);
        execute(filter).then(() => {
            //参数组合
            url += "?" + URLArgumentsResolve.argumentsToString(params, true);
            open(url);
            // navigator.push({
            //     url
            // }, event => {
            //     // callback(event);
            // });
        })
    }
}


async function execute(filter: Function) {
    if (!isFunction(filter)) {
        return true;
    }
    return await  filter();
}

/**
 * 构建页面url
 * @param {string} uri
 * @returns {string}
 */
function buildPageUrl(uri: string) {
    let {url, meta}: RouteOption = ROUTE_OPTIONS[uri.substr(1, uri.length)];
    if (isNullOrUndefined(meta)) {
        meta = DEFAULT_ROUTE_META
    }

    const {main} = meta;
    // return process.env.BASE_PATH + url
    return process.env.BASE_PATH + "weex://" + packageName + (main ? "/main/" : "/page/") + url;
}