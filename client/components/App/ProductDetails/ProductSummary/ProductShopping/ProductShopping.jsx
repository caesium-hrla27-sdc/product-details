import React from 'react';

import styles from './style.css';

import FlashBox from './FlashBox/FlashBox';
import Dropdown from './Dropdown/Dropdown';
import Basket from './Basket/Basket';
import Loves from './Loves/Loves';

class ProductShopping extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={styles.container}>
        <FlashBox />
        <div id={styles.shoppingBottom}>
          <Dropdown />
          <div id={styles.bottomRightContainer}>
            <div id={styles.basketLoves}>
              <div>
                <Basket />
                <Loves />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductShopping;
