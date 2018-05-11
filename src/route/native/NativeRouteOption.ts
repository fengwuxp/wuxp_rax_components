export interface NativeRouteOption {
    [k: string]: RouteOption
}

export interface RouteOption {
    meta?: RouteMeta,
    url: string
}

export interface RouteMeta {

    /**
     * 是否需要登录
     */
    requireAuth: boolean;

    /**
     * 是否为主页
     */
    main: boolean
}