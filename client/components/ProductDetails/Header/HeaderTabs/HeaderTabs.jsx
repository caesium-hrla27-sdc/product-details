import React from 'react';

import TabHeading from './TabHeading/TabHeading';

import styles from './style.css';

class HeaderTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabHeadings: [
        'Shop',
        'New',
        'Brands',
        'Gifts',
        'Quizzes',
        'Community',
        'Happening In Store'
      ]
    };
  }
  render() {
    return (
      <div>
        <nav id={styles.nav}>
          {this.state.tabHeadings.map((heading, index) => (
            <TabHeading key={index} heading={heading} />
          ))}
        </nav>
      </div>
    );
  }
}

export default HeaderTabs;
