import React from 'react';
import axios from 'axios';

import styles from './style.css';

import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Main from './Main/Main';
import Header from './Header/Header';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/productDetails').then(({ data }) => {
			
			data.breadcrumbs = data.breadcrumbs.split(" ")
			data.media = data.media.split(" ")
			for (let i =0; i < data.media.length; i++){
				data.media[i] = { type:"image", url: "https://picsum.photos/1920?image=" + data.media[i]}
			}
			data.average_rating = data.average_rating/1000
			data.price = Math.floor(data.price/100)/100
			console.log(data)


      this.setState({
        product: data
      });
    });
  }

  render() {
    if (this.state.product !== undefined) {
      return (
        <div id={styles.app}>
          <Header />
          <div id={styles.contentContainer}>
            <main id={styles.main}>
              <div id={styles.content}>
                <div id={styles.productDetailsContainer1}>
                  <div id={styles.productDetailsContainer2}>
                    <Breadcrumbs breadcrumbs={this.state.product.breadcrumbs} />
                    <Main product={this.state.product} />
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

export default ProductDetails;
