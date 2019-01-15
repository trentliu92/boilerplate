import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const localData = [
  {
    question: 'What is the difference between Zigbee the Alliance and Zigbee the technology standard?',
    src: ''
  },
  {
    question: 'Can I certify a product without joining the Alliance?',
    src: ''
  },
  {
    question: 'Do you offer programs for contractors to certify their services under the Zigbee Alliance?',
    src: ''
  }
];

class Support extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      faqData: ''
    };
  }

  componentDidMount = () => {
    this.setState({ faqData: localData });
  }

  renderFAQ = () => {
    const data = this.state.faqData;
    let faq = '';
    if (data) {
      faq = data.map((item, index) => {
        const key = 'support_faq_' + index;
        return (
          <div key={key} className="list-wrapper">
            <div className="support-faq-question">
              {item.question}
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        <div className="faq-header">
          Top Questions
        </div>
        <div>
          {faq}
        </div>
      </div>
    );
  }

  renderMenu = () => {
    const data = this.props.data.menu;
    let menu = '';
    let hostname = 'localhost:3000';
    if (data) {
      menu = data.map((item) => {
        switch (item.type) {
          case 'link':
            if (this.props.config.status === 'production') {
              hostname = this.props.config[item.hostname];
            }
            return (
              <li>
                <div className="list-wrapper">
                  <a className="navitem-menu-title submenu-item" key={item.title} href={`http://${hostname}${item.src}`}>
                    {item.title}
                  </a>
                </div>
              </li>
            );
          case 'span':
            return (
              <li>
                <div className="navitem-span-container">
                  <div className="navitem-span">
                  </div>
                </div>
              </li>
            );
          case 'faq':
            return (
              <li>
                <div className="support-faq-container">
                  {this.renderFAQ()}
                </div>
              </li>
            );
          default:
            return (null);
        }
      });
    }
    return menu;
  }
  render() {
    return (
      <div className="support">
        {this.renderMenu()}
      </div>
    );
  }
}

export default Support;
