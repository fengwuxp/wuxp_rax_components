import {RouteHandler, RouteParam} from "../RouteHandler";
import UniversalRouter from 'universal-router';
import {render} from "rax";
import {isFunction} from "util";

let WEB_ROUTER;

const DEFAULT_CONTEXT = {
    context: {},
    baseUrl: '',

    //路由前置处理
    resolveRoute(context, params = {}) {
        if (!isFunction(context.route.action)) {
            return undefined;
        }
        params = Object.assign(params, context.routeParams);
        delete  context.routeParams;
        return context.route.action(context, params)
    },
    errorHandler(error) {
        return error.code === 404
            ? '<h1>Page Not Found</h1>'
            : '<h1>Oops! Something went wrong</h1>'
    }
};

//路由列表
const ROUTE_CACHE: Array<any> = [];

export default class WebRouteHandler implements RouteHandler {


    constructor(routers, context = DEFAULT_CONTEXT) {

        WEB_ROUTER = new UniversalRouter(routers, context);
    }

    back(): void {
        if (ROUTE_CACHE.length == 1) {
            return;
        }
        ROUTE_CACHE.pop();
        const {url, params} = ROUTE_CACHE[ROUTE_CACHE.length - 1];
        this.jump(url, params);
    }


    jump(url: string, params: RouteParam, filter?: () => boolean | Promise<boolean>, animationType?: any): void {

        execute(filter, url, params).then(result => {
            console.log(result);
            ROUTE_CACHE.push({url, params});
            render(result);
        });
    }

}

async function execute(filter: Function, url: string, params: RouteParam) {
    let b = true;
    if (isFunction(filter)) {
        b = await  filter();
    }
    if (!b) {
        return false
    }
    return await  WEB_ROUTER.resolve({
        pathname: url,
        routeParams: params
    });

}