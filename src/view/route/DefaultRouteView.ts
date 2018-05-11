import {RouteView} from "./RouteView";
import {URLArgumentsResolve} from "../../route/URLArgumentsResolve";
import {RouteHandler, RouteParam} from "../../route/RouteHandler";
import {buildRouterHandler} from "../../route/DefaultRouteHandlerBuild";

const routeHandler: RouteHandler = buildRouterHandler();

/**
 * 默认路由视图
 */
export abstract class DefaultRouteView<P> implements RouteView<P> {


    back(): void {
        routeHandler.back()
    }

    jump(uri: string, params: RouteParam, filter?: () => (boolean | Promise<boolean>), animationType?: any): void {
        routeHandler.jump(uri, params, filter, animationType);
    }

    /**
     * 解析查询参数
     * @returns {P}
     */
    resolveQueryParams = (): P => {
        return URLArgumentsResolve.parseArguments(location.href, true);
    };


}