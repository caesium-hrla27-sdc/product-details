import React from 'react';

import styles from './style.css';

import TabHeadings from './TabHeadings/TabHeadings';

class ProductTabsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(index) {
    this.setState({ currentTab: index });
  }
  render() {
    return (
      <div id={styles.tabsContainer}>
        <TabHeadings
          currentTab={this.state.currentTab}
          changeTab={this.changeTab}
        />
        {/* <TabMain /> */}
      </div>
    );
  }
}

export default ProductTabsSection;
