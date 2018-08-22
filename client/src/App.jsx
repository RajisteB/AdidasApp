import React, { Component } from 'react';
import Header from './components/layout/header.jsx';
import HeroBanner from './components/hero/mainHero.jsx';
import Main from './hoc/main.jsx';
import Divider from './components/layout/divider.jsx';
import WomensHero from './components/hero/womensHero.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <Main>
        <Header />
        <HeroBanner />
        <Divider category="Women"/>
        <WomensHero />
      </Main>
    );
  }
}

export default App;
