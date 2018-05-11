/**
 * weex官方提供的模块
 */
import {WeexNavigatorModule} from "weex/src/sdk/model/navigator";
import {WeexAnimationModule} from "weex/src/sdk/model/animation";
import {WeexWebSocketModule} from "weex/src/sdk/model/webSocket";
import {WeexPickerModule} from "weex/src/sdk/model/picker";
import {WeexClipboardModule} from "weex/src/sdk/model/clipboard";
import {WeexDomModule} from "weex/src/sdk/model/dom";
import {WeexModalModule} from "weex/src/sdk/model/modal";
import {WeexStorageModule} from "weex/src/sdk/model/storage";
import {WeexStreamModule} from "weex/src/sdk/model/stream";
import {WeexWebviewModule} from "weex/src/sdk/model/webview";
import {WeexGlobalEventModule} from "weex/src/sdk/model/globalEvent";

const navigator: WeexNavigatorModule = require('@weex-module/navigator');
const animation: WeexAnimationModule = require('@weex-module/animation');
const webSocket: WeexWebSocketModule = require('@weex-module/webSocket');
const picker: WeexPickerModule = require('@weex-module/picker');
const clipboard: WeexClipboardModule = require('@weex-module/clipboard');
const dom: WeexDomModule = require('@weex-module/dom');
const modal: WeexModalModule = require('@weex-module/modal');
const storage: WeexStorageModule = require('@weex-module/storage');
const stream: WeexStreamModule = require('@weex-module/stream');
const webview: WeexWebviewModule = require('@weex-module/webview');
const globalEvent: WeexGlobalEventModule = require('@weex-module/globalEvent');

export {
    animation,
    webSocket,
    picker,
    clipboard,
    dom,
    modal,
    navigator,
    storage,
    stream,
    webview,
    globalEvent
};


