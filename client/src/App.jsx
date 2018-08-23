import React, { Component } from 'react';
import Header from './components/layout/header.jsx';
import HeroBanner from './components/hero/mainHero.jsx';
import Main from './hoc/main.jsx';
import Divider from './components/layout/divider.jsx';
import WomensHero from './components/hero/womensHero.jsx'
import MensHero from './components/hero/mensHero.jsx';
import ProductList from './components/layout/productList.jsx';
import Footer from './components/layout/footer.jsx';
import Scroll from 'react-scroll';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      adidasWomen: '',
      adidasMen: '',
      productInfo: '',
      windowSize: '',
    } 
  }

  getProducts = (category) => {
    let results = null;
    let product = null;
    let catalog = [];

    axios.get(`/footwear/${category}`)
    .then(res => {
      results = res.data.results.searchItems;

      results.map(item => {
        item.caption = item.caption.split(' ').slice(1, item.caption.length).join(' ');
        if (item.catalogName === "Barneys New York") {
          catalog.push(item);
        }
        return results;
      });
      
      product = catalog.reverse().slice(0, 9);
      
      category === "women" ?
      this.setState({ adidasWomen: product })
      : this.setState({ adidasMen: product });
    })
    .catch(err => console.log(err));
  }

  handleWindowSize = (e) => {
    console.log(e.target.innerWidth);
    this.setState({ windowSize: e.target.innerWidth })
  }

  handleScroll = (elem) => {
    let scroller = Scroll.scroller;
    let scrollOffset = null;

    scrollOffset = elem === "women" ? -350 : -200;

    scroller.scrollTo(elem, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: scrollOffset,
    });
  }

  async componentDidMount() {
    window.addEventListener('resize', this.handleWindowSize);
    await this.getProducts("women");

    await setTimeout(() => {
      this.getProducts("men");
    }, 2000);
  
  }


  render() {
    let { adidasMen, adidasWomen, productInfo, windowSize } = this.state;
    let Element = Scroll.Element;
    
    return (
      <Main>
        <Header handleScroll={this.handleScroll}/>
        <HeroBanner size={windowSize} handleScroll={this.handleScroll}/>
        <Divider category="Women" num="01"/> 
        <WomensHero />
        <Element name="women">
          <ProductList 
            footwear={adidasWomen} 
            category="women"
          />
        </Element>
        <Divider category="Men" num="02" id="m"/>
        <MensHero />
        <Element name="men">
          <ProductList 
            id="mens" 
            footwear={adidasMen} 
            category="men"
          />
        </Element>
        <Footer />
      </Main>
    );
  }
}

export default App;
