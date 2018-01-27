import React, { Component } from 'react';

class App extends Component {
  componentDidMount(){
    setVolume({
      riftMic: 0,
      moboMic: 100
    })
  }

  setVolume(pkg){
    fetch('/setVolume', {
      method: "post",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pkg)
    });
  }

  render() {
    return (
      <div>
        APP GOES HERE
      </div>
    );
  }
}

export default App;
