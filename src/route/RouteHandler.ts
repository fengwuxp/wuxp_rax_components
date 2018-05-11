

/**
 * 路由处理者
 */
export interface RouteHandler {

    /**
     * 返回上一页
     */
    back(): void

    /**
     * 页面跳转
     * @param {string} uri
     * @param {RouteParam} params
     * @param {() => (boolean | Promise<boolean>)} filter
     * @param animationType
     */
    jump(uri: string, params?: RouteParam, filter?: () => boolean | Promise<boolean>, animationType?: any): void;
}

/**
 * 路由参数
 */
export interface RouteParam {
    [k: string]: any
}