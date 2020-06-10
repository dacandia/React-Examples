import React, { Component } from 'react';

class App extends Component{
  // *Conctructor
  // Runs before the component is mounted
  // Initialize the state of the component
  // !You should not call the setState
  constructor(props) {
    super(props);
    this.state = {initialMessage: 'initial message', scroll: 0}
  }

  handleClick = () => {
    this.setState({ initialMessage: 'message changed'})
  }

  // *component Will Mount
  // Runs only once
  // It's invoked before the component is mounted and before the render
  // setState could be used without causing a other render
  // !You should use the constructor instead of componentWillMount
  componentWillMount () {
    console.log('componentWillMount');
    this.setState({initialMessage: 'modified message'});
  }

  // *componentDidMount
  // It runs after render the component
  // It's used to add calls to recover data from server and listen events
  // setState could be used.
  componentDidMount () {
    console.log('componentDidMount');
    document.addEventListener('scroll', () => {
      this.setState({scroll: window.scrollY})
    })
  }

  // *render
  // This is mandatory
  // Returns the elements to show in the interface
  // !You should not call setState, it could cause an infinite loop
  render() {
    return(
      <div className="App">
        <h4>Mount cycle</h4>
        <p>Scroll: {this.state.scroll}</p>
        {this.state.initialMessage}
        <button onClick={this.handleClick}>
          Change message
        </button>
      </div>
    );
  }
}

export default App;
