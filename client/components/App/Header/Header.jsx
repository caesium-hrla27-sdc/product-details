import React from 'react';

import styles from './style.css';

import TopMain from './TopMain/TopMain';
import BottomMain from './BottomMain/BottomMain';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.headerContainer}>
        <header id={styles.header}>
          <div id={styles.masthead}>
            <div id={styles.topbar} />
            <div id={styles.main}>
              <TopMain />
              <BottomMain />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
