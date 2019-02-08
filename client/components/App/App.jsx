import React from 'react';
import axios from 'axios';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProductDetails from '../ProductDetails/ProductDetails';

import styles from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
    axios.get('/item').then(({ data }) => {
      console.log(data);
      this.setState({
        item: data
      });
    });
  }
  render() {
    if (Object.keys(this.state.item).length !== 0) {
      return (
        <div id={styles.app}>
          <Breadcrumbs breadcrumbs={this.state.item.breadcrumbs} />
          <ProductDetails />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default App;
