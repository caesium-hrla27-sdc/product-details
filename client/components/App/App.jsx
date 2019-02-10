import React from 'react';
import axios from 'axios';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProductDetails from '../ProductDetails/ProductDetails';

import styles from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
    axios.get('/product').then(({ data }) => {
      console.log(data);
      this.setState({
        product: data
      });
    });
  }
  render() {
    if (Object.keys(this.state.product).length !== 0) {
      return (
        <div id={styles.app}>
          <Breadcrumbs breadcrumbs={this.state.product.breadcrumbs} />
          <ProductDetails product={this.state.product} />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default App;
