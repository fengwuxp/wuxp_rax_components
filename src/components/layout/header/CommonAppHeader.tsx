import * as Rax from "rax";
import {CommonHeaderProps} from "./props/CommonHeaderProps";
import * as React from "react";
import {createElement, Component} from "rax";
import {isNullOrUndefined} from "util";
import * as FlexStyle from "../../../static/scss/base/flex.scss";

/**
 * app header
 * 支持iphonex适配
 */
export default class CommonAppHeader<P extends CommonHeaderProps, S> extends Component<P, S> {


    render(): React.ReactNode {
        let components = [];
        if (!isNullOrUndefined(this.props.leftComponent)) {
            components.push(this.props.leftComponent)
        }
        if (!isNullOrUndefined(this.props.centerComponent)) {
            components.push(this.props.centerComponent)
        }
        if (!isNullOrUndefined(this.props.rightComponent)) {
            components.push(this.props.rightComponent)
        }
        return <div style={FlexStyle.flex_row}>{...components}</div>
    }
}
