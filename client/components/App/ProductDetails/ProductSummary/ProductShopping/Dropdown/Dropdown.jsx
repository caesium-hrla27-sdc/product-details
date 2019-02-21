import React from 'react';

import styles from './style.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.bottomLeftContainer}>
        <label id={styles.quantityLabel}>Quantity</label>
        <div id={styles.dropdownContainer1}>
          <div id={styles.dropdownContainer2}>
            <select id={styles.dropdown}>
              <option value="1" className={styles.option}>
                1
              </option>
              <option value="2" className={styles.option}>
                2
              </option>
              <option value="3" className={styles.option}>
                3
              </option>
              <option value="4" className={styles.option}>
                4
              </option>
              <option value="5" className={styles.option}>
                5
              </option>
              <option value="6" className={styles.option}>
                6
              </option>
              <option value="7" className={styles.option}>
                7
              </option>
              <option value="8" className={styles.option}>
                8
              </option>
              <option value="9" className={styles.option}>
                9
              </option>
              <option value="10" className={styles.option}>
                10
              </option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Dropdown;
