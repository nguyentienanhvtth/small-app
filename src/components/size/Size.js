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
                        <div className="button upSize" 
                        onClick={() => this.props.handleUp()}
                        >Tăng</div>
                        <div className="button downSize"
                        onClick={() => this.props.handleDown()}
                        >Giảm</div>
                    </div>
                </div>
                <div className="resetButton"
                onClick={() => this.props.handleReset()}
                >Reset</div>
            </div>
        );
    }
}

export default Size;
