import React from 'react';

import ImagePreview from '../ImagePreview/ImagePreview';
import ImageDirections from '../ImageDirections/ImageDirections';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import ImagePopup from '../ImagePopup/ImagePopup';
import ImageModal from '../ImageModal/ImageModal';
import styles from './style.css';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMediaIndex: 0,
      currentCarouselStart: 0
    };
  }
  render() {
    return (
      <div id={styles.imageViewerContainer}>
        <div id={styles.imageViewer}>
          <ImagePreview
            url={this.props.media_urls[this.state.currentMediaIndex]}
          />
          <ImageDirections />
          <ImageCarousel />
          <ImagePopup />
          <ImageModal />
        </div>
      </div>
    );
  }
}

export default ImageViewer;
