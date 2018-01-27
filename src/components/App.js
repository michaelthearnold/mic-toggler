import React, { Component } from 'react';
import Switch from 'react-toggle-switch'
import styled from 'styled-components';
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css";

const Container = styled.div`
  width: 300px;
`;

const StyledSwitch = styled(Switch)`
  width: 100%;
  height: 40px;
`;

const H1 = styled.h1`
  text-align: center;
  color: #AAA;
`;

class App extends Component {
  state = {
    switched: false
  }

  componentDidMount(){
    this.setVolume({
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

  toggleSwitch = () => {
    const switched = !this.state.switched;

    //contact server to change mic volumes
    const pkg = {
      MoboMic: switched ? 100 : 0,
      RiftMic: switched ? 0 : 100
    };
    this.setVolume(pkg);
    
    this.setState({switched});
  }

  render() {
    const {switched} = this.state;

    return (
      <Container>
        <H1>{switched ? "MIC" : "RIFT"}</H1>
        <StyledSwitch onClick={this.toggleSwitch} 
          on={switched}
        />
      </Container>
    );
  }
}

export default App;
