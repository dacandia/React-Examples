import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()
    this.state = { mouseX : 0, mouseY : 0}
  }
  handleMouseMove = (e) => {
    const { clientX, clientY} = e
    this.setState ({ mouseX : clientX, mouseY : clientY})
  }

  handleClick (e) {
    console.log(e);
    console.log(e.nativeEvent);
    alert('Hi here!');
  }

  render() {
    return (
      <div className="App">
        <h4>Events</h4>
        {/*
        * Events types
        * onClick event: directely on the event onClick call the funcion to execute
        * call handleClick:  returns a sintetic event, this wraps the native event to make it
        *   compatible with all browers that react supports
        * *If you want to know the support events for react visit: https://reactjs.org/docs/events.html
        */}
        <button onClick={() => alert('Hi there!')}>Direct event</button>
        <button onClick={this.handleClick}>Handler function</button>
        <div onMouseMove={this.handleMouseMove} style={{ border: '1px solid #000', marginTop: 10, padding: 10}}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>  
    );
  }
}

export default App;
