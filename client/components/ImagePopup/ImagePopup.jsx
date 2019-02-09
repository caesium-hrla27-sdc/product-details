import React from 'react';

import styles from './style.css';

class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id={styles.popupContainer}
        style={{ display: this.props.displayPopup ? 'inline' : 'none' }}
      >
        <img id={styles.popup} src={this.props.url} />
      </div>
    );
  }
}

export default ImagePopup;
