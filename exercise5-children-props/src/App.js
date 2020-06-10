import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Box extends Component{
  render () {
    return (
      <div style={{ border : '1px solid #09f', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends Component{

  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render() {
    const { author, children, date, title } = this.props;
    return(
      <section>
        <h2>{title}</h2>
        <p><em>Written by: {author}</em></p>
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return(
      <div>
        <h4>Children props</h4>
        <Article 
          author='Miguel'
          date={new Date().toLocaleDateString()}
          title='Article about prop children'
        >
          <p>The content that is wrapped into the component Article will be send to the component as this.props.children.</p>
          <strong>And keep inside tags and components</strong>
        </Article>

        <Article 
          author='Daniel'
          date={new Date().toLocaleDateString()}
          title='Article 2'
        >
          <p>The content that is wrapped into the component Article will be send to the component as this.props.children.</p>
          <strong>And keep inside tags and components</strong>
        </Article>

        <Article 
          author='Pedro'
          date={new Date().toLocaleDateString()}
          title='Another Article'
        >
          <p>The content that is wrapped into the component Article will be send to the component as this.props.children.</p>
          <strong>And keep inside tags and components</strong>
        </Article>
      </div>
    );
  }
}

export default App;
