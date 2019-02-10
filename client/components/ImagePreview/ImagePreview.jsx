import React from 'react';

import styles from './style.css';

class ImagePreview extends React.Component {
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
        onMouseEnter={this.toggleHover}
        onMouseMove={this.props.updateMouseCoordinates}
        onMouseLeave={this.toggleHover}
      >
        <svg width="300" height="300" ref={this.props.imagePreviewRef}>
          <image
            width="300"
            height="300"
            href={this.props.mediaItem.url}
            style={this.state.hover ? { mask: 'url(#mask)' } : {}}
          />
        </svg>
      </div>
    );
  }
}

export default ImagePreview;
