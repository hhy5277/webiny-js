import React from 'react';
import { Component } from 'webiny-client';

@Component()
class RowDetailsList extends React.Component {
    render() {
        if (this.props.render) {
            return this.props.render.call(this);
        }

        let content = this.props.children;
        if (typeof this.props.children === "function") {
            content = this.props.children.call(this, { data: this.props.data, $this: this });
        }

        return <div>{content}</div>;
    }
}

export default RowDetailsList;