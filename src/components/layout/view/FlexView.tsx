import {createElement} from "rax";
import * as React from "react";
import {isNullOrUndefined} from "util";
import * as FlexStyle from "../../../static/scss/base/flex.scss";


/**
 * FlexViewProps
 */
export interface FlexViewProps {
    bodyBackgroundColor: string,
    header?: React.ReactNode;
    footer?: React.ReactNode;
}


export default class FlexView extends React.Component<FlexViewProps, any> {

    constructor(props: FlexViewProps, context: any, state: any = {}) {
        super(props, context);
        this.state = state;
    }

    render(): React.ReactNode {

        const childrenList: Array<any> = [];
        let header: React.ReactNode = this.props.header;
        if (!isNullOrUndefined(header)) {
            childrenList.push(header);
        }
        childrenList.push(<div style={[FlexStyle.flex_cell]}>{this.props.children}</div>);
        if (!isNullOrUndefined(this.props.footer)) {
            childrenList.push(this.props.footer);
        }

        return (
            <div style={FlexStyle.flex_cell}>{...childrenList}</div>
        )
    }
}
