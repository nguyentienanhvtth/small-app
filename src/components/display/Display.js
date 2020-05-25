import React, { Component } from 'react';
import './display.scss'

class Display extends Component {
    render() {
        return (
            <div>
                <div className="Detail setting">
                <p>Color : {this.props.color} - fontsize : {this.props.size}px</p>
                </div>
                <div className="dis-content" 
                style={{borderColor: this.props.color}}>
                    <p 
                    style={{fontSize: this.props.size, color: this.props.color}}
                    >
                        Noi dung setting
                    </p>
                </div>
            </div>
        );
    }
}

export default Display;
