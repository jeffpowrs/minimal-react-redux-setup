import React, { Component } from 'react';

import styled from 'styled-components';

const Greeting = styled.main`
  font-size: 100px;
`;

export default class App extends Component {
  render() {
    return (
      <Greeting> 👋 🌏</Greeting>
    );
  }
}
