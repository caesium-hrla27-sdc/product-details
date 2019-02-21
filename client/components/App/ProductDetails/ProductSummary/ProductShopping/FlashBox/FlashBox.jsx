import React from 'react';

import styles from './style.css';

class FlashBox extends React.Component {
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
      <div id={styles.flashBox}>
        <label id={styles.flashLabel}>
          <input
            type="checkbox"
            id={styles.flashInput}
            value=""
            onClick={this.toggleCheckbox}
          />

          <div
            id={styles.checkboxFilled}
            style={
              this.state.fillCheckbox ? { backgroundColor: 'rgb(0, 0, 0)' } : {}
            }
          >
            <svg
              viewBox="0 0 32 32"
              id={styles.svgCheckbox}
              style={this.state.fillCheckbox ? {} : { display: 'none' }}
            >
              <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z" />
            </svg>
          </div>

          <div id={styles.checkboxLabelContainer1}>
            <div>
              <div>
                <div>
                  <button id={styles.checkboxLabelButton} type="button">
                    <p>
                      Yes, I want{' '}
                      <strong id={styles.strong}>FREE 2-Day Shipping</strong>{' '}
                      with Sephora FLASH. <ins id={styles.ins}>Learn More</ins>
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    );
  }
}

export default FlashBox;
