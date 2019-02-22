import React from 'react';

import styles from './style.css';

class ProductPrice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.container}>
        <div id={styles.priceBox}>{'$' + this.props.product.price}</div>
        <p id={styles.message}>spend $50 for free shipping</p>
      </div>
    );
  }
}

export default ProductPrice;
