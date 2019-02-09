import React from 'react';

import styles from './style.css';

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state;
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }
  onMouseEnter() {
    this.props.togglePopup();
  }
  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseMove={this.props.updateMouseCoordinates}
        onMouseLeave={this.props.togglePopup}
      >
        <svg width="300" height="300">
          <image
            width="300"
            height="300"
            href={this.props.url}
            id={styles.image}
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
        <svg>
          <defs>
            <mask id="mask">
              <rect x="0" y="0" width="300" height="300" fill="#4d4d4d" />
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="green"
                stroke="black"
              />
            </mask>
          </defs>
        </svg>
      </div>
    );
  }
}

export default ImagePreview;
