import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h3>Au revoir, {this.props.name}</h3>
        <p>{new Date().toLocaleTimeString()}</p>
        <p>Le commentaire {this.props.poil}</p>
      </div>
    );
  }
}

export default Welcome;
