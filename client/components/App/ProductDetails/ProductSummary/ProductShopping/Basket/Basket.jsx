import React from 'react';

import styles from './style.css';

class Basket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={styles.basketContainer}>
        <div id={styles.aboveBasket} />
        <div id={styles.basketContainer2}>
          <button id={styles.basketButton} type="button">
            Add to Basket
          </button>
        </div>
      </div>
    );
  }
}

export default Basket;
