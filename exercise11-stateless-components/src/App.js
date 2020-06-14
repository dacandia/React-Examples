import React, { Component } from 'react';
import PropTypes from 'prop-types';

//class Article extends Component{
//  render() {
//    return(
//      <section>
//        <h2>{this.props.title}</h2>
//        <p><em>Written by: {this.props.author}</em></p>
//        <date>{this.props.date}</date>
//        <article>
//            {this.props.children}
//        </article>
//      </section>
//    );
//  }
//}

//class Button extends Component {
//  render () {
//    return (
//      <button style={{borderColor: this.props.borderColor, display: 'block'}}>
//        {this.props.label}
//      </button>
//    );
//  }
//}

function Article(props) {
  return(
    <section>
      <h2>{props.title}</h2>
      <p><em>Written by: {props.author}</em></p>
      <date>{props.date}</date>
      <article>
        {props.children}
      </article>
    </section>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.any
}

const Button = ({ borderColor = 'red', label }) => (
  <button style={{borderColor, display:'block'}}>
    {label}
  </button>
)

Button.propTypes = {
  borderColor: PropTypes.string,
  label: PropTypes.string.isRequired
}

class App extends Component{
  render () {
    return(
      <div className='App'>
        <h4>Stateless components</h4>
        <Article 
          author='Daniel'
          date={new Date().toLocaleDateString()}
          title='Article about props'
        >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id semper risus. Vivamus et nisi pretium, facilisis justo ut, feugiat magna. Nulla interdum ipsum libero, et tempor diam varius at. Vestibulum commodo erat ex, sit amet commodo enim condimentum vitae. Proin convallis elit nulla, at fermentum eros congue ut. Vestibulum eget justo eu massa luctus suscipit non ac nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean vitae tellus euismod, convallis lectus nec, imperdiet nisi. Duis luctus nisi quam, sed dignissim sem mollis in. Donec pharetra rutrum leo, sed dapibus nunc pellentesque et. </p>
        <strong>Curabitur sed nunc libero. Cras eu velit pulvinar, molestie odio ut, vulputate orci. In purus leo, posuere sit amet tellus ut, consectetur fringilla turpis. Donec id lectus sollicitudin lacus fermentum laoreet. Fusce nec rutrum velit, eu varius orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vel sem vel dui convallis maximus. Mauris nisl magna, ultrices sed tempus accumsan, lacinia id neque. Nullam a elit mi. </strong>
        </Article>
        <br />
        <Button label='Comment Article'/>
      </div>
    );
  }
}

export default App;
