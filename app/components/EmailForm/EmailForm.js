import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';

import AllianceLogo from 'components/EmailForm/images/Group 137.svg';

import './style.scss';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed: false,
      data: '',
      required: 'not-required',
      EMAIL: '',
      post: '',
      loaded: false,
      isLoading: false,
      error: null,
    }
  }

  clickSubscribe = () => {
    if (this.state.EMAIL.split('@').length === 2) {
      this.handleGA();
      this.setState({
        post: 'post'
      });
      // timeout is needed to call the setState asynchronously and allow form to be submitted
      setTimeout(function () {
        this.setState({
          subscribed: true
        });
      }.bind(this), 10);

      // ReactGA.event({
      //   category: 'button',
      //   action: 'clicked',
      //   label: "Submitted form from " + this.props.item
      // });
    }
    this.setState({ required: 'required' });
  }

  handleGA = () => {
    ReactGA.event({
      category: 'home contact',
      action: 'submit',
      label: 'contact info',

    });
  }

  renderInput = () => {
    const data = [
      {
        name: 'NAME',
        type: 'text',
        placeholder: 'Name'
      },
      {
        name: 'EMAIL',
        type: 'text',
        placeholder: 'Email'
      }
    ];

    let input = '';
    const that = this;
    const requiredClass = `contact-required ${that.state.required}`;

    input = data.map((item) => {
      if (item.name === 'EMAIL') {
        return (
          <div className="emailform-input-outer">
            <div className={requiredClass}>
              * Required Field
            </div>
            <input
              id="emailform-email"
              className="emailform-input"
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              value={that.state.EMAIL}
              onChange={(e) => that.handleChange(e)}
            />
          </div>
        );
      }
      return (
        <div key={item.name} className="emailform-input-outer">
          <input
            className="emailform-input"
            name={item.name}
            type={item.type}
            placeholder={item.placeholder}
          />
        </div>
      );
    });
    return input;
  }

  render() {
    if (this.state.subscribed) {
      return (<div className="subscribe-thanks"> Thank you. </div>);
    }
    return (
      <div className="emailform">
        <div className="emailform-left">
          <h3 className="emailform-header heading">
            Ready to get creative with IOT?
          </h3>
          <div className="emailform-header-button-container">
            <Button src={''} label={'Learn More'} />
            <Button src={''} label={'Join Zigbee'} />
          </div>
          <form className="emailform-container" action="https://securecircle.us16.list-manage.com/subscribe/post?u=33a53e69e067a89bd2dfe8cd9&amp;id=91b574707c" method={this.state.post} target="mailchimpframe">
            {this.renderInput()}
            <div className="emailform-bottom-button-container">
              <Button src={''} label={'Submit'} type="submit" value="Subscribe" name="subscribe" onClick={() => this.clickSubscribe()} />
            </div>
            <iframe
              title="mailchimpframe"
              name="mailchimpframe"
              className="hidden"
            >
            </iframe>
          </form>
        </div>
        <div className="emailform-right">
          <img alt="emailform-banner" className="emailform-image" src={AllianceLogo} />
        </div>
      </div>
    );
  }
}

export default EmailForm;
