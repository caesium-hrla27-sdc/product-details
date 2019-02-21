import React from 'react';

import styles from './style.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div id={styles.container2}>
          <div>
            <div id={styles.container4}>
              <span id={styles.span} />
              <div id={styles.greetingBox}>
                <p id={styles.welcomeText}>Hi, Beautiful</p>
                <div id={styles.signInAndRegister}>
                  <button id={styles.signInButton} type="button">
                    Sign In
                  </button>
                  {' or '}
                  <button id={styles.registerButton} type="button">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
