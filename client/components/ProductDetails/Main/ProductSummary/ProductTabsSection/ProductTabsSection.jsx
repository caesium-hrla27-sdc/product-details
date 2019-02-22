import React from 'react';

import styles from './style.css';

import TabHeadings from './TabHeadings/TabHeadings';
import TabMain from './TabMain/TabMain';

class ProductTabsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'details'
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(newTab) {
    this.setState({ currentTab: newTab });
  }
  render() {
    return (
      <div id={styles.tabsContainer}>
        <TabHeadings
          currentTab={this.state.currentTab}
          changeTab={this.changeTab}
        />
        <TabMain
          product={this.props.product}
          currentTab={this.state.currentTab}
        />
      </div>
    );
  }
}

export default ProductTabsSection;
