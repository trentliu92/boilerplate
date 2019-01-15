import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

// {
//       "title": "Products",
//       "link": "/products",
//       "menu": [
//         {
//           "type": "link",
//           "title": "Featured Products",
//           "src": "",
//           "image": ""
//         },
//         {
//           "type": "product",
//           "image": "",
//           "src": "",
//           "title": "Echo Dot Plus",
//           "content": "Some content here"
//         },
//         {
//           "type": "span"
//         },
//         {
//           "type": "link",
//           "title": "Product Catalog",
//           "src": "",
//           "image": ""
//         }
//       ]
//     }

class Products extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderBlog = () => {

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
                  <a className="navitem-menu-title submenu-item" key={item.title} href={`${hostname}${item.src}`}>
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
          case 'product':
            return (
              <li>
                <div className="list-wrapper">
                  <div className="product">
                    <div className="product-left">
                      <img alt="" className="product-image" src={item.image} />
                    </div>
                    <div className="product-right">
                      <div className="product-right-inner">
                        <div className="product-title">
                          {item.title}
                        </div>
                        <div className="product-details">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
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
      <div className="products">
        {this.renderMenu()}
      </div>
    );
  }
}

export default Products;
