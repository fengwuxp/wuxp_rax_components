import {AppHeaderProps} from "./props/AppHeaderProps";
import * as React from "react";
import {createElement} from "rax";
import {isFunction, isNullOrUndefined} from "util";
import Image from "rax-image";
import * as FlexStyle from "../../../static/scss/base/flex.scss";
import Text from "rax-text";
import {getIosTopHeight, getViewHeaderHeight} from "../../../utils/FlexViewUtils";
import CommonUtils from "../../../utils/CommonUtils";
import {isIos} from "../../../utils/RaxEnvUtil";

/**
 * 默认appHeader高度
 * @type {number}
 */
const DEFAULT_HEADER_HEIGHT: number = 100;

const DEFAULT_HEADER_WIDTH: number = 750;

const positionStyle = {
    height: DEFAULT_HEADER_HEIGHT,
    position: "absolute",
    top: 0,
};
const AppHeaderStyle = {
    left: {
        ...positionStyle,
        width: 100,
        left: 0
    },
    titleStyle: {
        fontSize: 36,
        textAlign: "center"
    },
    centerStyle: {
        height: DEFAULT_HEADER_HEIGHT,
        width: DEFAULT_HEADER_WIDTH,
        textAlign: "center"
    },
    rightStyle: {
        ...positionStyle,
        right: 0
    }
};

let IS_IOS: boolean;

let iosTopStyle: React.CSSProperties;

let defaultStyle = {
    width: DEFAULT_HEADER_WIDTH,
    height: getViewHeaderHeight()
};

/**
 * 通用appHeader
 */
export default class AppHeader extends React.Component<AppHeaderProps, any> {


    componentWillMount(): void {
        if (isIos()) {
            IS_IOS = true;
            iosTopStyle = {
                height: getIosTopHeight(),
            }
        }

    }


    render(): React.ReactNode {



        //样式处理
        let headerStyle: React.CSSProperties;
        if (isNullOrUndefined(this.props.style)) {
            headerStyle = defaultStyle
        } else {
            headerStyle = Object.assign({}, this.props.style, defaultStyle);
        }

        const components = [];

        //ios处理
        if (IS_IOS) {
            components.push(<div style={iosTopStyle}></div>);
        }
        components.push(<div
            style={[FlexStyle.flex_row, FlexStyle.flex_cell]}>{...this.getCommponents()}</div>);

        //处理背景图
        if (CommonUtils.hasText(this.props.bgIcon)) {
            return <Image source={{uri: this.props.bgIcon}}
                          style={[headerStyle]}>{...components}</Image>;
        } else {
            return <div style={[headerStyle]}>{...components}</div>;
        }


    }

    private getCommponents(): Array<JSX.Element> {
        let leftComponent,
            centerComponent,
            rightComponent;

        let clickLeft: Function = isFunction(this.props.clickLeft) ? this.props.clickLeft : () => {
        };
        let clickRight: Function = isFunction(this.props.clickRight) ? this.props.clickLeft : () => {
        };
        if (!isNullOrUndefined(this.props.leftIcon)) {

            leftComponent = (
                <div onClick={() => {
                    clickLeft();
                }} style={[FlexStyle.flex_center, AppHeaderStyle.left]}>
                    <Image source={{uri: this.props.leftIcon}} style={this.props.leftStyle}/>
                </div>
            )
        }

        centerComponent = (
            <div
                style={[FlexStyle.flex_center, FlexStyle.flex_cell, AppHeaderStyle.centerStyle, this.props.rightStyle]}>
                <Text style={AppHeaderStyle.titleStyle} numberOfLines={1}>{this.props.title}</Text>
            </div>
        );

        if (!isNullOrUndefined(this.props.rightIcon)) {
            rightComponent = (
                <div onClick={() => {
                    clickRight();
                }} style={[FlexStyle.flex_center, AppHeaderStyle.rightStyle, this.props.rightStyle]}>
                    <Image style={this.props.rightIconStyle} source={{uri: this.props.rightIcon}}/>
                </div>
            )
        }
        let components: Array<JSX.Element> = [
            leftComponent,
            centerComponent,
            rightComponent];
        return components;
    }
}