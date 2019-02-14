import React from 'react';

import styles from './style.css';

import ProductNameAndRating from './ProductNameAndRating/ProductNameAndRating';
import ProductPrice from './ProductPrice/ProductPrice';
import ProductShopping from './ProductShopping/ProductShopping';
import ProductTabsSection from './ProductTabsSection/ProductTabsSection';

class ProductSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.productSummaryContainer}>
        <div id={styles.ProductSummaryTop}>
          <ProductNameAndRating product={this.props.product} />
          {/* <ProductPrice product={this.props.product} /> */}
          {/* <ProductShopping product={this.props.product} /> */}
        </div>
        {/* <ProductTabsSection product={this.props.product} /> */}
      </div>
    );
  }
}

export default ProductSummary;
