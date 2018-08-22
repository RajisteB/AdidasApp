import React, { Component } from 'react';
import Header from './components/layout/header.jsx';
import HeroBanner from './components/hero/mainHero.jsx';
import Main from './hoc/main.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Main>
        <Header />
        <HeroBanner />
      </Main>
    );
  }
}

export default App;
