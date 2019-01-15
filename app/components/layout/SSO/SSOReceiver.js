import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';


class SSOReceiver extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount = () => {
    // console.log(this.props.href);
    // const data = JSON.parse(decodeURI(this.props.href));
    const data = decodeURI(this.props.href.substr(1));
    const auth = JSON.parse(data);
    Cookies.set(
      'zb-alliance-login',
      {
        sessionID: auth.session_id,
        notBefore: auth.start,
        notOnOrAfter: auth.end
      },
      { expires: 1 }
    );
    const login = document.createElement('a');
    login.setAttribute('href', auth.relay);
    login.click();
  }

  render() {
    return (
      <div className="sso">
      </div>
    );
  }
}

export default SSOReceiver;

