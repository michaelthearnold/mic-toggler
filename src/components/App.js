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

const MIC = {
  MUTED: 1,
  UNMUTED: 0
};

class App extends Component {
  state = {
    switched: false
  }

  setVolume(pkg){
    fetch('/muteSource', {
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
      [`MoboMic 2`]: switched ? MIC.UNMUTED : MIC.MUTED,
      [`RiftMic 3`]: switched ? MIC.MUTED : MIC.UNMUTED
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
