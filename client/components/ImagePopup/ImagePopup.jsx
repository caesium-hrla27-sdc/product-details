import React from 'react';

import styles from './style.css';

class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: this.props.displayPopup ? 'inline' : 'none' }}>
        <div id={styles.popupContainer1}>
          <div id={styles.popupContainer2}>
            <div
              id={styles.popupContainer3}
              style={{
                transform: `translate(${this.props.translateX}px, ${
                  this.props.translateY
                }px) scale(3)`
              }}
            >
              <div id={styles.popupBox}>
                <div id={styles.abovePopup} />
                <img id={styles.popup} src={this.props.mediaItem.url} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagePopup;
