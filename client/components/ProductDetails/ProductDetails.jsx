import React from 'react';
import ImageViewer from '../ImageViewer/ImageViewer';
import ProductSummary from '../ProductSummary/ProductSummary';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ImageViewer />
        <ProductSummary />
      </div>
    );
  }
}

export default ProductDetails;
