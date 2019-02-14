import React from 'react';
import axios from 'axios';

import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import ProductDetailsMain from './ProductDetailsMain/ProductDetailsMain';
import Header from './Header/Header';

import styles from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
    let id = 2;
    axios.get('/product/' + id).then(({ data }) => {
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
          <Header />
          <div id={styles.contentContainer}>
            <main id={styles.main}>
              <div id={styles.content}>
                <div id={styles.productDetailsContainer1}>
                  <div id={styles.productDetailsContainer2}>
                    <Breadcrumbs breadcrumbs={this.state.product.breadcrumbs} />
                    <ProductDetailsMain product={this.state.product} />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default App;
