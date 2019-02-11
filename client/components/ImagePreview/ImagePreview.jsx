import React from 'react';

import styles from './style.css';

import ImagePreviewItem from '../ImagePreviewItem/ImagePreviewItem';

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    return (
      <div
        id={styles.previewContainer1}
        onMouseMove={this.props.updateMouseCoordinates}
        ref={this.props.imagePreviewRef}
      >
        <div id={styles.previewContainer2}>
          <div id={styles.previewContainer3}>
            <div
              id={styles.previewContainer4}
              style={{
                transform: `translate3d(${this.props.current *
                  -300}px, 0px, 0px)`
              }}
            >
              {this.props.media.map((mediaItem, index) => (
                <ImagePreviewItem
                  mediaItem={mediaItem}
                  index={index}
                  key={index}
                  togglePopup={this.props.togglePopup}
                  current={this.props.current}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagePreview;
