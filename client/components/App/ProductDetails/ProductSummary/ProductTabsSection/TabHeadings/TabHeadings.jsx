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
          onClick={() => this.props.changeTab('details')}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 'details'
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
            style={
              this.props.currentTab === 'details' ? { borderColor: '#000' } : {}
            }
          >
            Details
          </span>
        </button>
        <button
          onClick={() => this.props.changeTab('how_to_use')}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 'how_to_use'
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
            style={
              this.props.currentTab === 'how_to_use'
                ? { borderColor: '#000' }
                : {}
            }
          >
            How to Use
          </span>
        </button>
        <button
          onClick={() => this.props.changeTab('ingredients')}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 'ingredients'
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
            style={
              this.props.currentTab === 'ingredients'
                ? { borderColor: '#000' }
                : {}
            }
          >
            Ingredients
          </span>
        </button>
        <button
          onClick={() => this.props.changeTab('about_the_brand')}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 'about_the_brand'
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
            style={
              this.props.currentTab === 'about_the_brand'
                ? { borderColor: '#000' }
                : {}
            }
          >
            About the Brand
          </span>
        </button>
        <button
          onClick={() => this.props.changeTab('shipping_returns')}
          className={styles.tabButton}
          type="button"
          style={
            this.props.currentTab === 'shipping_returns'
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
            style={
              this.props.currentTab === 'shipping_returns'
                ? { borderColor: '#000' }
                : {}
            }
          >
            Shipping &amp; Returns
          </span>
        </button>
      </div>
    );
  }
}

export default TabHeadings;
