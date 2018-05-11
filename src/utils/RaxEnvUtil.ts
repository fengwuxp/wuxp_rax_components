let WEEX_ENV_PLATFORM_NAME = navigator.platform;//__weex_env__.platform.toLocaleLowerCase();

/**
 * 是否为浏览器
 * @return {boolean}
 */
const isWeb = (): boolean => {

    return WEEX_ENV_PLATFORM_NAME === 'web';
};

/**
 * 是否为安卓
 * @return {boolean}
 */
const isAndroid = (): boolean => {
    return WEEX_ENV_PLATFORM_NAME === 'android';
};

/**
 * 是否为ios
 * @return {boolean}
 */
const isIos = (): boolean => {

    return WEEX_ENV_PLATFORM_NAME === 'ios';
};
/**
 * 是否为 iphoneX
 * @return {boolean}
 */
const isIphoneX = (): boolean => {


    return isIos() && screen.height === 2436;// __weex_env__.deviceHeight === 2436;
};

export {
    isAndroid,
    isWeb,
    isIos,
    isIphoneX
}
