import * as React from "react";


export interface AppHeaderProps {

    style?: React.CSSProperties;

    /**
     * 标题
     */
    title: string;

    /**
     * 标题样式
     */
    titleStyle?: React.CSSProperties;

    /**
     * 左侧图标
     */
    leftIcon?: string;

    /**
     * 左侧样式
     */
    leftStyle?: React.CSSProperties;

    /**
     * 点击左侧
     */
    clickLeft?: () => void;

    /**
     * 右侧图标
     */
    rightIcon?: string;

    /**
     * 右侧样式
     */
    rightStyle?: React.CSSProperties;

    /**
     * 右侧图标样式
     */
    rightIconStyle?: React.CSSProperties;

    /**
     * 点击右侧
     */
    clickRight?: () => void;

    /**
     * 背景图
     */
    bgIcon?: string;

}