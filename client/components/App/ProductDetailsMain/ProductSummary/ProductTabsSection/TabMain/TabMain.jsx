import React from 'react';

import styles from './style.css';

class TabMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.tabMainContainer}>
        <div>{this.props.product[this.props.currentTab]}</div>
      </div>
    );
  }
}

export default TabMain;
