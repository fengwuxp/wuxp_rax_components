import {render} from "rax";

/**
 * 在原生环境下渲染
 * @param {JSX.Element} e
 */
export function renderByNativeEnv(e: JSX.Element) {

    if (!process.env.IS_WEB) {
        render(e);
    }
}