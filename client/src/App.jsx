import React, { Component } from 'react';
import Header from './components/layout/header.jsx';
import HeroBanner from './components/hero/mainHero.jsx';
import Main from './hoc/main.jsx';
import Divider from './components/layout/divider.jsx';
import WomensHero from './components/hero/womensHero.jsx'
import MensHero from './components/hero/mensHero.jsx';
import ProductList from './components/layout/productList.jsx';
import Footer from './components/layout/footer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Main>
        <Header />
        <HeroBanner />
        <Divider category="Women" num="01"/> 
        <WomensHero />
        <ProductList />
        <Divider category="Men" num="02" id="m"/>
        <MensHero />
        <ProductList id="mens"/>
        <Footer />
      </Main>
    );
  }
}

export default App;
