import React, { Component } from 'react';
import classNames from 'classnames'
import './colorPicker.scss'; 
class ColorPicker extends Component {
    render() {
        return (
            <div>
                <div className="colorPicker-box">
                    <div className="colorPicker-header alert-primary" >
                        <p>Color Picker</p>
                    </div>
                    <div className="colorPicker-body">
                        <div className={classNames('red-box','color-box', {
                            active: this.props.isColor === 'Red'})}
                            onClick={() => this.props.changeColor('Red')}
                            ></div>
                        <div className={classNames('green-box','color-box', {
                            active: this.props.isColor === 'Green'})}
                            onClick={() => this.props.changeColor('Green')}
                            ></div>
                        <div className={classNames('blue-box','color-box', {
                            active: this.props.isColor === 'Blue'})}
                            onClick={() => this.props.changeColor('Blue')}
                            ></div>
                        <div className={classNames('gray-box','color-box', {
                            active: this.props.isColor === 'Gray'})}
                            onClick={() => this.props.changeColor('Gray')}
                            ></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
