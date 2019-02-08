import React from 'react';

import ImagePreview from '../ImagePreview/ImagePreview';
import ImageDirections from '../ImageDirections/ImageDirections';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import ImagePopup from '../ImagePopup/ImagePopup';

import styles from './style.css';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.imageViewerContainer}>
        <div id={styles.imageViewer}>
          <ImagePreview />
          <ImageDirections />
          <ImageCarousel />
          <ImagePopup />
        </div>
      </div>
    );
  }
}

export default ImageViewer;
