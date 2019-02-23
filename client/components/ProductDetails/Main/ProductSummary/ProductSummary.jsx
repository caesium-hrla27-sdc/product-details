import React from 'react';

import ProductNameAndRating from './ProductNameAndRating/ProductNameAndRating';
import ProductPrice from './ProductPrice/ProductPrice';
import ProductShopping from './ProductShopping/ProductShopping';
import ProductTabsSection from './ProductTabsSection/ProductTabsSection';

import styles from './style.css';

class ProductSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.productSummaryContainer}>
        <div id={styles.productSummaryTop}>
          <ProductNameAndRating product={this.props.product} />
          <ProductPrice product={this.props.product} />
          <ProductShopping product={this.props.product} />
        </div>
        <ProductTabsSection product={this.props.product} />
      </div>
    );
  }
}

export default ProductSummary;
