import React, { Component } from 'react';

// *This components are build using inheritance
class Button extends Component{
  constructor(props){
    super(props);
    this.borderColor = '#09f';
  }

  render() {
    return (
      <button style={{ borderColor: this.borderColor, display: 'block'}}>
        {this.props.label}
      </button>
    );
  }
}

class ButtonDanger extends Button{
  constructor(props){
    super(props);
    this.borderColor = 'red';
  }
}

class ButtonWithLegend extends Button {
  render() {
    return (
      <div>
        {super.render()}
    <small>{this.props.legend}</small>
      </div>
    );
  }
}

// This components are made using Composition
class ButtonComposition extends Component {
  render () {
    return (
      <button style= {{ borderColor: this.props.borderColor, display: 'block' }} >
        {this.props.label}
      </button>
    );
  }
}

ButtonComposition.defaultProps = {
  borderColor: '#09f'
}

class ButtonDangerComposition extends Component {
  render () {
    return <ButtonComposition borderColor='red' label={this.props.label} />
  }
}

class ButtonWithLegendComposition extends Component {
  render () {
    return(
      <div>
        <ButtonComposition label={this.props.label} borderColor={this.props.borderColor} />
        <small>{this.props.legend}</small>
      </div>
    );
  }
}

class App extends Component {
  render () {
    return(
      <div className='App'>
        <h4>Composicion vs Herencia</h4>
        <Button label='click with inheritance'/>
        <br/>
        <ButtonDanger label='danger! with inheritance' />
        <br/>
        <ButtonWithLegend 
          label='Button with explanation with inheritance'
          legend='click here to do something'
        />
        <br/>
        <ButtonComposition label='click with composition'/>
        <br/>
        <ButtonDangerComposition label='danger with composition!' />
        <br/>
        <ButtonWithLegendComposition 
          label='Button with explanation'
          legend='click here to do something'
        />
      </div>
    );
  }
}

export default App;
