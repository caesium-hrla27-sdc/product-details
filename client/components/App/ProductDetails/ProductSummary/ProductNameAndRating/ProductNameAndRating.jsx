import React from 'react';

import styles from './style.css';

class ProductNameAndRating extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.container1}>
        <h1 id={styles.nameAndDescription}>
          <a id={styles.nameBox}>
            <span id={styles.name}>{this.props.product.name}</span>
          </a>

          <span id={styles.description}>{this.props.product.description}</span>
        </h1>
      </div>
    );
  }
}

export default ProductNameAndRating;
