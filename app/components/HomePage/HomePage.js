/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import config from 'config.json';
import data from './data/data.json';

import EmailForm from 'components/EmailForm/EmailForm';
import InfoBlock from 'components/InfoBlock/InfoBlock';

import navData from './data/navData.json';
import footerData from './data/footerData.json';

// images 
import Button from './images/Button.svg';
import Background from './images/home-top.svg';
import TopImage from './images/Artboard 1 no borders 2.png';
import MiddleImage from './images/Forum.png';
import BottomImage from './images/Group 5902.svg';
import BottomSemiCircle from './images/Mask Group 9.svg';
import ContactBackground from './images/Mask Group 2 (1).svg';

import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  componentDidMount = () => {
    // this.setState({ isLoading: true });
    // fetch(config.server + '/homedata?')
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error('Error between the Express server and ReactJS ...');
    //   })
    //   .then((data) => this.setState({ data, isLoading: false }))
    //   .catch((error) => this.setState({ error, isLoading: false })
    //   );
  }

  renderInfoBlocks = (data) => {
    return (
      <div>
        <div className="info-tile" key={data[0].header}>
          <div className="info-image-container" id="top-image">
            <img alt="info-block" className="image" src={TopImage} />
          </div>
          <div className="text" id="top-text">
            <InfoBlock key={data[0].header} header={data[0].header} content={data[0].content} />
            <a className="home-auth-button" href={`http://${config.consumer}`}>
              <img src={Button} className="home-auth-button-image" alt="" />
              <div className="home-auth-button-label">
                Discover
              </div>
            </a>
          </div>
        </div>
        <div className="info-tile" key={data[1].header}>
          <div className="text" id="middle-text">
            <InfoBlock key={data[1].header} header={data[1].header} content={data[1].content} />
            <a className="home-auth-button" href={`http://${config.members}`}>
              <img src={Button} className="home-auth-button-image" alt="" />
              <div className="home-auth-button-label">
                Discover
              </div>
            </a>
          </div>
          <div className="info-image-container" id="middle-image">
            <img alt="info-block" className="image" src={MiddleImage} />
          </div>
        </div>
        <div className="info-bottom-tile-container">
          <div className="info-tile" key={data[2].header} id="info-tile-bottom">
            <div className="info-image-container" id="bottom-image">
              <img alt="info-block" className="image" src={BottomImage} />
            </div>
            <div className="text" id="bottom-text">
              <InfoBlock key={data[2].header} header={data[2].header} content={data[2].content} />
              <a className="home-auth-button" href={`http://${config.developer}`}>
                <img src={Button} className="home-auth-button-image" alt="" />
                <div className="home-auth-button-label">
                  Discover
                </div>
              </a>
            </div>
            <div className="bottom-semicircle-image-container">
              <img src={BottomSemiCircle} className="bottom-semicircle-image" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderBlogPosts = () => {
    const blogdata = [
      {
        title: 'Two Zigbee Projects Take Home Major Awards …',
        image: '',
        src: ''
      },
      {
        title: 'Step-by-Step Guide: Getting Started with Zigbee',
        image: '',
        src: ''
      },
      {
        title: 'Unlocking New Market Opportunities: A Fast Track …',
        image: '',
        src: ''
      }
    ];

    let posts = '';
    posts = blogdata.map((item) => {
      return (
        <li key={item.title} className="blog-posts">
          <div className="blog-posts-inner">
            <a className="blog-title" to={item.src}>
              {item.title}
            </a>
            <div className="blog-button-container">
              <a className="blog-button" to={item.src}>
                <div className="blog-button-image-container">
                  <img src={Button} className="blog-button-image" alt="button"/>
                </div>
                <div className="blog-button-label">
                 Read More
                </div>
              </a>
            </div>
          </div>
        </li>
      );
    });
    return posts;
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <div className="homepage">
        <div className="megasplash">
          <div className="megasplash-image-container-outer">
            <div className="megasplash-image-container">
              <img className="megasplash-image" src={Background} />
            </div>
          </div>
          <div className="homepage-header">
            <div className="homepage-header-inner">
              <div className="homepage-header-text">
                <div className="homepage-header-text-inner">
                  <div className="homepage-header-line">Making smart</div>
                  <div className="homepage-header-line">things possible</div> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="info-tile-container">
          {
            (this.state.data)
              ?
              (this.renderInfoBlocks(this.state.data))
              :
              null
          }
        </div>
        <div className="blog-section" >
          <div className="blog-header heading" >
            Latest blog posts
          </div>
          <ul className="blog-post-container" >
            { this.renderBlogPosts() }
          </ul>
          <div className="email-container">
            <EmailForm />
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};
