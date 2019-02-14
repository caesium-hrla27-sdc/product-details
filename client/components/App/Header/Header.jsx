import React from 'react';
import axios from 'axios';

import styles from './style.css';

class Header extends React.Component {
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
    return (
      <div id={styles.headerContainer}>
        <header class="css-79elbk" id="Header" data-comp="Header">
          <div id="masthead">
            <div id="topbar" />
            <div id="main" />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
