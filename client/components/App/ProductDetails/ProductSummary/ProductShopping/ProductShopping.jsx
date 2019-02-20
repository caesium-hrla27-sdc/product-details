import React from 'react';

import styles from './style.css';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

class ProductShopping extends React.Component {
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
      <div id={styles.container}>
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
                this.state.fillCheckbox
                  ? { backgroundColor: 'rgb(0, 0, 0)' }
                  : {}
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

            <div>
              <div>
                <div>
                  <div>
                    <button id={styles.checkboxLabelButton} type="button">
                      <p>
                        Yes, I want <strong>FREE 2-Day Shipping</strong>
                        with Sephora FLASH. <ins>Learn More</ins>
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div id={styles.shoppingBottom}>
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
          <div id={styles.bottomRightContainer}>
            <div id={styles.basketLoves}>
              <div>
                <div id={styles.basketContainer}>
                  <div id={styles.aboveBasket} />
                  <div id={styles.basketContainer2}>
                    <button id={styles.basketButton} type="button">
                      Add to Basket
                    </button>
                  </div>
                </div>
                <div id={styles.lovesContainer}>
                  <button type="button" id={styles.lovesButton}>
                    <svg viewBox="0 0 32 26" id={styles.svgLove}>
                      <path d="M16.003 26c-.915 0-1.772-.354-2.417-1L2.364 13.78C.84 12.254 0 10.228 0 8.07 0 3.078 4.153-.012 8-.012c2.225 0 4.223.822 5.778 2.377L16 4.586l2.222-2.222C19.777.81 21.775-.013 24-.013c3.848 0 8 3.09 8 8.084 0 2.157-.84 4.184-2.364 5.708L18.413 25c-.643.645-1.5 1-2.41 1zM8 1.988c-2.886 0-6 2.326-6 6.084 0 1.623.63 3.147 1.778 4.294L15 23.587c.533.533 1.463.535 2 0L28.22 12.364C29.368 11.217 30 9.694 30 8.07c0-3.757-3.114-6.083-6-6.083-1.174 0-2.884.31-4.364 1.792l-2.93 2.928c-.39.39-1.022.39-1.413 0l-2.93-2.93C10.884 2.3 9.174 1.99 8 1.99z" />
                    </svg>
                    Add to Loves
                  </button>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default ProductShopping;
