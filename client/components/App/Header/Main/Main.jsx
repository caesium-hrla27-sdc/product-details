import React from 'react';

import styles from './style.css';

import SearchBar from './SearchBar/SearchBar';
import AccountDetails from './AccountDetails/AccountDetails';
import Title from './Title/Title';

class TopMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.topMain}>
        <SearchBar />
        <Title />
        <AccountDetails />
      </div>
    );
  }
}

export default TopMain;
