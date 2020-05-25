import React, { Component } from 'react';
import './size.scss';

class Size extends Component {

    render() {
        return (
            <div>
                <div className="sizeBox">
                    <div className="sizeBox-header alert-warning">
                        <p>Size: {this.props.size}</p>
                    </div>
                    <div className="sizeBox-body">
                        <button className="button upSize" 
                        onClick={() => this.props.handleUp()}
                        >Tăng</button>
                        <button className="button downSize"
                        onClick={() => this.props.handleDown()}
                        >Giảm</button>
                    </div>
                </div>
                <button className="resetButton"
                onClick={() => this.props.handleReset()}
                >Reset</button>
            </div>
        );
    }
}

export default Size;
