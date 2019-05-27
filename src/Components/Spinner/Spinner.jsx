import React, { Component } from 'react';
import './spinner.scss';

export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <div style={{ width: `${this.props.size}px`, height: `${this.props.size}px`, display: this.props.visible ? 'block' : 'none' }}></div>
            </div>
        );
    }
}