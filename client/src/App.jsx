import React, { Component } from 'react';
import Header from './components/layout/header.jsx';
import Main from './hoc/main.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Main>
        <Header />
      </Main>
    );
  }
}

export default App;
