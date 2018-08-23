import React, { Component } from 'react';
import Main from '../../hoc/main.jsx';
import BannerImage01 from '../../images/peach.png';
import BannerImage02 from '../../images/pinkshot.png';
import BannerImage03 from '../../images/smurfsideshot.png';
import BannerImage04 from '../../images/brightwhite.png';

class HeroBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
      images: [
        BannerImage01,
        BannerImage02,
        BannerImage03,
        BannerImage04
      ],
      progress: 0,
      width: 5
    }
  }

  handleImageChange = () => {
    if (this.state.imgIndex >= 3) {
      this.setState({
        imgIndex: 0
      });
    } else {
      this.setState({
        imgIndex: this.state.imgIndex + 1
      })
    }
  }

  handleBarWidth = () => {
    this.setState({
      width: 5
    });

    let barWidth = setInterval(() => {
      if (this.state.width >= 200) {
        this.setState({
          width: 200,
        })
        clearInterval(barWidth);
      } else {
        this.setState({
          width: this.state.width + 1
        });
      }
    }, 26);
    return barWidth;
  }

  handleProgressBar = () => {
    this.handleImageChange();
    this.handleBarWidth();
    this.setState({
      progress: 0
    })

    let counting = setInterval(() => {
      if (this.state.progress >= 100) {
        this.setState({
          progress: 100
        })
        clearInterval(counting);
      } else {
        this.setState({
          progress: this.state.progress + 1
        })
      }
    }, 50);
    return counting;

  }

  componentDidMount() {
    this.handleProgressBar();
    let sequence = setInterval(() => {
      this.handleProgressBar();
    }, 7000);
    return sequence; 
  }


  render() {
    let { images, imgIndex, progress } = this.state;
    let bannerStyle = null;
    let barStyle = null;
    let imgProp = null;
    
    imgProp = this.props.size > 1000 ? "cover" : "contain";

    bannerStyle = {
      backgroundImage: "url(" + images[imgIndex] +")",
      backgroundSize: imgProp,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }
    barStyle = {
      width: this.state.width
    }

    return (
      <Main>
        <div className="hero-banner" style={bannerStyle}>
          <h1>
            Impossible <br/>
            is Nothing.
          </h1>
        </div>
        <div className="linear">
          <button onClick={() => this.props.handleScroll("women")}>Shop Now</button>
          <div className="line"></div>
        </div>
        <div className="img-progress-bar">
          <div className="dynamic-progress" style={barStyle}></div>
          <h4>{progress}%</h4>
        </div>
      </Main>
    );
  }
}

export default HeroBanner;