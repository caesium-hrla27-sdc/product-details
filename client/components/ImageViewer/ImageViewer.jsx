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
      currentCarouselStart: 0,
      mouseX: 0,
      mouseY: 0,
      displayPopup: false
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.updateMouseCoordinates = this.updateMouseCoordinates.bind(this);
  }

  togglePopup() {
    this.setState({ displayPopup: this.state.displayPopup ? false : true });
  }

  updateMouseCoordinates(event) {
    this.setState({
      mouseX: event.screenX,
      mouseY: event.screenY
    });
  }

  render() {
    return (
      <div id={styles.imageViewerContainer}>
        <div id={styles.imageViewer}>
          <ImagePreview
            url={this.props.media_urls[this.state.currentMediaIndex]}
            togglePopup={this.togglePopup}
            updateMouseCoordinates={this.updateMouseCoordinates}
          />
          <ImageDirections />
          <ImageCarousel />
          <ImagePopup
            displayPopup={this.state.displayPopup}
            url={this.props.media_urls[this.state.currentMediaIndex]}
          />
          <ImageModal />
        </div>
      </div>
    );
  }
}

export default ImageViewer;
