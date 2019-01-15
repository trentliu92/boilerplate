import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from './images/Search Icon.svg';

import './style.scss';

class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function

  searchFocus = () => {
    // console.log("Focus");
  }

  renderPopularSearches = () => {
    let suggestions = '';
    suggestions = this.props.data.menu.map((item) => {
      return (
        <a className="search-suggestion-link" key={item.title} src={item.src}>
          {item.title}
        </a>
      );
    });
    return (
      <div className="search-suggestion-content">
        {suggestions}
      </div>
    );
  }

  render() {
    return (
      <div className="search">
        <div className="search-bar-container">
          <div className="search-bar-icon-container">
            <img src={SearchIcon} className="search-bar-icon" alt="search.svg" />
          </div>
          <input
            onClick={this.searchFocus()}
            className="search-input"
            name={'search'}
            type={'text'}
            placeholder={'Search'}
          />
        </div>
        <div className="search-suggestion-container">
          <div className="search-suggestion-header">
            Popular Searches
          </div>
          {this.renderPopularSearches()}
        </div>
      </div>
    );
  }
}

export default Search;
