import React from 'react';

import styles from './style.css';

import Main from './Main/Main';
import HeaderTabs from './HeaderTabs/HeaderTabs';
import TopBar from './TopBar/TopBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.headerContainer}>
        <header id={styles.header}>
          <div id={styles.masthead}>
            <TopBar />
            <div id={styles.main}>
              <Main />
              <HeaderTabs />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
