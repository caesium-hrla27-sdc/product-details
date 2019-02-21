import React from 'react';

import styles from './style.css';

import SignIn from './SignIn/SignIn';
import LovesList from './LovesList/LovesList';
import Basket from './Basket/Basket';

class AccountDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.container1}>
        <div id={styles.container2}>
          <SignIn />
          <LovesList />
          <Basket />
        </div>
      </div>
    );
  }
}

export default AccountDetails;
