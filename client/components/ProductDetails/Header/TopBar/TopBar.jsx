import React from 'react';

import MarketingMessage from './MarketingMessage/MarketingMessage';
import TopBarOptions from './TopBarOptions/TopBarOptions';

import styles from './style.css';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.container1}>
        <div id={styles.container2}>
          <div id={styles.container3}>
            <div id={styles.container4}>
              <MarketingMessage />
              <TopBarOptions />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
