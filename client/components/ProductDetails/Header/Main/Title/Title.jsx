import React from 'react';

const logo =
  'https://s3.us-east-2.amazonaws.com/ho-fec-product-details/logo.svg';

import styles from './style.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.container1}>
        <div>
          <div>
            <a href="/">
              <img alt="Sephora" src={logo} width="216" height="28" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
