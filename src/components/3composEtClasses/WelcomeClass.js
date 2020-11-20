import React from 'react';

class WelcomeClass extends React.Component {
  render() {
    return <h4>Bonjour {this.props.name}, depuis une classe</h4>;
  }
}

export default WelcomeClass;