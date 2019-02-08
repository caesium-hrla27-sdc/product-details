import React from 'react';
import ImageViewer from '../ImageViewer/ImageViewer';
import ProductSummary from '../ProductSummary/ProductSummary';

import styles from './style.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.productDetails}>
        <ImageViewer
          image_urls={this.props.item.image_urls}
          video_urls={this.props.item.video_urls}
        />
        <ProductSummary />
      </div>
    );
  }
}

export default ProductDetails;
