import React from 'react';

import styles from './style.css';

class ProductShopping extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.container}>
        <div id={styles.flashBox}>
          <label id={styles.flashLabel}>
            <input type="checkbox" id={styles.flashInput} value="" />
            <div id={styles.checkboxBoxFilled}>
              <svg viewBox="0 0 32 32" id={styles.svgCheckbox}>
                <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z" />
              </svg>
            </div>
            <div id={styles.checkboxLabel1}>
              <div id={styles.checkboxLabel2}>
                <div id={styles.checkboxLabel3}>
                  <div id={styles.checkboxLabel4}>
                    <button id={styles.checkboxLabelButton} type="button">
                      <p>
                        Yes, I want <strong>FREE 2-Day Shipping</strong> with
                        Sephora FLASH. <ins>Learn More</ins>
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    );
  }
}

export default ProductShopping;
