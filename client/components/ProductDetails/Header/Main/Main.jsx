import React from 'react';

import SearchBar from './SearchBar/SearchBar';
import AccountDetails from './AccountDetails/AccountDetails';
import Title from './Title/Title';

import styles from './style.css';

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
