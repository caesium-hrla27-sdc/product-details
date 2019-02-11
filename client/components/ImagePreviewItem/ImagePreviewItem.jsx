import React from 'react';

import styles from './style.css';

class ImagePreviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover() {
    this.props.togglePopup();
    this.setState({
      hover: this.state.hover ? false : true
    });
  }
  render() {
    return (
      <div
        className={styles.previewItemContainer1}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className={styles.previewItemContainer2}>
          <svg width="300" height="300">
            <image
              width="300"
              height="300"
              href={this.props.mediaItem.url}
              style={this.state.hover ? { mask: 'url(#mask)' } : {}}
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default ImagePreviewItem;
