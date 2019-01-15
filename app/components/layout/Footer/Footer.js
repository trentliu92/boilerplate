import React from 'react';
import { Link } from 'react-router-dom';

// social media icons
import Twitter from './images/twitter.svg';
import LinkedIn from './images/linkedin.svg';
import Youtube from './images/youtube.svg';
import Facebook from './images/facebook.svg';
import Zigbee from './images/logo.svg';

import './style.scss';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderLinks = (data) => {
    let links = '';
    let hostname = 'localhost:3000';
    if (data) {
      links = data.map((item) => {
        if (this.props.config.status === 'production') {
          hostname = this.props.config[item.hostname];
        }
        return (
          <a className="footer-section-link" href={`http://${hostname}${item.src}`} key={item.label}>
            {item.label}
          </a>
        );
      });
    }
    return links;
  }

  renderFooterTiles = () => {
    const data = this.props.data;
    let footerTiles = '';
    if (data) {
      footerTiles = data.map((item) => {
        // if (item.header === "Shopping Zigbee") {
        //   return (
        //     <div key={item.header} id="footer-section-single" className="footer-section-container" >
        //       <div className="footer-section-header">
        //         {item.header}
        //       </div>
        //       <div className="footer-section-links-container">
        //         {this.renderLinks(item.menu)}
        //       </div>
        //     </div>
        //   );
        // }
        return (
          <div key={item.header} className="footer-section-container" >
            <div className="footer-section-header">
              {item.header}
            </div>
            <div className="footer-section-links-container">
              {this.renderLinks(item.menu)}
            </div>
          </div>
        );
      });
    }
    return (
      footerTiles
    );
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-social-container">
              <div className="footer-social">
                <a className="footer-social-link" src="https://twitter.com/ZigBeeAlliance" target="_blank" rel="noopener noreferrer"><img className="footer-social-image" src={Twitter} alt="twitter" /></a>
                <a className="footer-social-link" src="https://www.linkedin.com/company/zigbee-alliance/" target="_blank" rel="noopener noreferrer"><img className="footer-social-image" src={LinkedIn} alt="linkedin" /></a>
                <a className="footer-social-link" src="https://www.youtube.com/channel/UCTu8lnBY3JWxhyzLo9r57ww" target="_blank" rel="noopener noreferrer"><img className="footer-social-image" src={Youtube} alt="youtube" /></a>
                <a className="footer-social-link" src="https://www.facebook.com/thezigbeealliance/" target="_blank" rel="noopener noreferrer"><img className="footer-social-image" src={Facebook} alt="facebook" /></a>
              </div>
            </div>
            {this.renderFooterTiles()}
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <Link to="/" className="footer-logo-container">
                <img src={Zigbee} className="footer-logo" alt="footer" />
              </Link>
              <div className="footer-bottom-left-link-container">
                <Link to="" className="footer-bottom-link">Blog</Link>
                <Link to="" className="footer-bottom-link">News</Link>
                <Link to="" className="footer-bottom-link">Search</Link>
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="footer-copyright">
                Copyright © 2019 Zigbee
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
