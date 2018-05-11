
import {RouteHandler} from "../../route/RouteHandler";

/**
 * 路由视图
 * @param P 页面参数
 */
export interface RouteView<P> extends RouteHandler{

    /**
     * 解析参数
     * @returns {P} 参数
     */
    resolveQueryParams: () => P
}

