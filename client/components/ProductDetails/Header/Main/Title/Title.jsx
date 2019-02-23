import React from 'react';

import logo from './logo.svg';

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
