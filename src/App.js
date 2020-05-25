import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ColorPicker from './components/colorPicker/ColorPicker';
import Size from './components/size/Size';
import Display from './components/display/Display'
import './App.scss';

class App extends Component{
  constructor() {
    super();
    this.state = {
      size : 16,
      isColor: 'Red'
    }
    this.upSize = this.upSize.bind(this);
    this.downSize = this.downSize.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  upSize(){
    this.setState({
      size: this.state.size + 1,
    },console.log(this.state.size))
  }

  downSize(){
    this.setState({
      size: this.state.size - 1,
    },console.log(this.state.size))
  }

  changeColor(item){
    this.setState({
      isColor: item,
    })
  }

  handleReset(){
    this.setState({
      size : 16,
      isColor: 'Red'
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs={6}>
              <ColorPicker 
              isColor={this.state.isColor}
              changeColor = {(item) => this.changeColor(item)}
              />
            </Col>
            <Col xs={6}><Size 
            handleUp = {this.upSize}
            handleDown = {this.downSize}
            size={this.state.size}
            handleReset = {this.handleReset}
            /></Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Display 
              size={this.state.size} 
              color={this.state.isColor}/>
            </Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
