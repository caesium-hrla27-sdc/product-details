import React from 'react';

import styles from './style.css';

class TabMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.headingsContainer}>
        <button id="tab0" className={styles.tabButton} type="button">
          <span class="css-jpw3l4 " data-comp="Box">
            Details
          </span>
        </button>
        <button id="tab1" className={styles.tabButton} type="button">
          <span class="css-1r1pql5 " data-comp="Box">
            How to Use
          </span>
        </button>
        <button id="tab2" className={styles.tabButton} type="button">
          <span class="css-1r1pql5 " data-comp="Box">
            Ingredients
          </span>
        </button>
        <button id="tab3" className={styles.tabButton} type="button">
          <span class="css-1r1pql5 " data-comp="Box">
            About the Brand
          </span>
        </button>
        <button
          id="tab4"
          aria-controls="tabpanel4"
          aria-selected="false"
          className={styles.tabButton}
          type="button"
          role="tab"
          tabindex="-1"
          data-comp="Link Box"
        >
          <span class="css-1r1pql5 " data-comp="Box">
            Shipping &amp; Returns
          </span>
        </button>
      </div>
    );
  }
}

export default TabMain;
