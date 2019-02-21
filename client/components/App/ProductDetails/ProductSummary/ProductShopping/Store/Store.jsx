import React from 'react';

import styles from './style.css';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fillCheckbox: false
    };
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox(event) {
    this.setState({
      fillCheckbox: this.state.fillCheckbox ? false : true
    });
  }

  render() {
    return (
      <div id={styles.storeContainer}>
        <div data-comp="FindInStore">
          <label id={styles.storeLabel}>Find in store</label>
          <form method="post" id={styles.storeForm}>
            <div id={styles.storeInputContainer1}>
              <div id={styles.storeInputContainer2}>
                <input
                  type="text"
                  autoComplete="postal-code"
                  autoCorrect="off"
                  maxLength="10"
                  placeholder="Enter ZIP/Postal code"
                  name="zipCode"
                  id={styles.storeInput}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Store;
