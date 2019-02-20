import React from 'react';

import styles from './style.css';

class TabHeadings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.headingsContainer}>
        <button
          id="tab0"
          // tabIndex={0}
          onClick={() => this.props.changeTab(0)}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 0
              ? {
                  cursor: 'default',
                  fontWeight: '700',
                  borderColor: '#eee',
                  borderBottomColor: '#fff'
                }
              : {}
          }
        >
          <span
            className={styles.tabSpan}
            style={this.props.currentTab === 0 ? { borderColor: '#000' } : {}}
          >
            Details
          </span>
        </button>
        <button
          id="tab1"
          onClick={() => this.props.changeTab(1)}
          // tabIndex={1}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 1
              ? {
                  cursor: 'default',
                  fontWeight: '700',
                  borderColor: '#eee',
                  borderBottomColor: '#fff'
                }
              : {}
          }
        >
          <span
            className={styles.tabSpan}
            style={this.props.currentTab === 1 ? { borderColor: '#000' } : {}}
          >
            How to Use
          </span>
        </button>
        <button
          id="tab2"
          // tabIndex={2}
          onClick={() => this.props.changeTab(2)}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 2
              ? {
                  cursor: 'default',
                  fontWeight: '700',
                  borderColor: '#eee',
                  borderBottomColor: '#fff'
                }
              : {}
          }
        >
          <span
            className={styles.tabSpan}
            style={this.props.currentTab === 2 ? { borderColor: '#000' } : {}}
          >
            Ingredients
          </span>
        </button>
        <button
          id="tab3"
          // tabIndex={3}
          onClick={() => this.props.changeTab(3)}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 3
              ? {
                  cursor: 'default',
                  fontWeight: '700',
                  borderColor: '#eee',
                  borderBottomColor: '#fff'
                }
              : {}
          }
        >
          <span
            className={styles.tabSpan}
            style={this.props.currentTab === 3 ? { borderColor: '#000' } : {}}
          >
            About the Brand
          </span>
        </button>
        <button
          id="tab4"
          // tabIndex={4}
          onClick={() => this.props.changeTab(4)}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 4
              ? {
                  cursor: 'default',
                  fontWeight: '700',
                  borderColor: '#eee',
                  borderBottomColor: '#fff'
                }
              : {}
          }
        >
          <span
            className={styles.tabSpan}
            style={this.props.currentTab === 4 ? { borderColor: '#000' } : {}}
          >
            Shipping &amp; Returns
          </span>
        </button>
      </div>
    );
  }
}

export default TabHeadings;
