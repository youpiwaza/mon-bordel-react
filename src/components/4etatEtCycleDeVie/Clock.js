import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // // Sans state, booh
    // this.date = new Date();

    // Avec state, yay
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // // Sans state, booh
    // this.date = new Date();
    // console.log(this.date);
    // // Force a render without state change...
    // // A eviter aux max, on perd plein d'avantages de React
    // this.forceUpdate();

    // Avec state, yay
    // Subtilité ! Mise à jour de l'état !
    // Force le rendu HTML (la maj de l'affichage)
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        {/* Sans state, booh */}
        {/* <h2>Il est {this.date.toLocaleTimeString()}.</h2> */}
        {/* Avec state, yay */}
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export default Clock;