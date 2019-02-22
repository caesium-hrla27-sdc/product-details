import React from 'react';

import styles from './style.css';


class TabHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tabHeadings: ['Shop', 'New', 'Brands', 'Gifts', 'Quizzes', 'Community', 'Happening In Store']
    }
  }
  render() {
    return (
     <div id={styles.container1}>
     <div id={styles.container2}>
     <div id={styles.container3}>
     <div id={styles.container4}>
     <div id={styles.container5}>
{this.props.heading}</div>
</div>
</div>
</div>
</div>


    );
  }
}

export default TabHeading;
