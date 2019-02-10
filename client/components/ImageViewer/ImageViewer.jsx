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
      displayPopup: false,
      imagePreviewRef: React.createRef()
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.updateMouseCoordinates = this.updateMouseCoordinates.bind(this);
  }

  togglePopup() {
    this.setState({ displayPopup: this.state.displayPopup ? false : true });
  }

  updateMouseCoordinates(event) {
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY
    });
  }

  render() {
    let maskX = 0;
    let maskY = 0;
    if (this.state.imagePreviewRef.current) {
      let { x, y } = this.state.imagePreviewRef.current.getBoundingClientRect();
      maskX = this.state.mouseX - x - 50;
      maskY = this.state.mouseY - y - 50;
    }
    return (
      <div id={styles.imageViewerContainer}>
        <div id={styles.imageViewer}>
          <ImagePreview
            mediaItem={this.props.media[this.state.currentMediaIndex]}
            togglePopup={this.togglePopup}
            updateMouseCoordinates={this.updateMouseCoordinates}
            imagePreviewRef={this.state.imagePreviewRef}
          />
          <ImageDirections />
          <ImageCarousel
            media={this.props.media.slice(
              this.state.currentCarouselStart,
              this.state.currentCarouselStart + 3
            )}
          />
          <ImagePopup
            displayPopup={this.state.displayPopup}
            mediaItem={this.props.media[this.state.currentMediaIndex]}
            translateX={500 - 5 * maskX}
            translateY={500 - 5 * maskY}
          />
          <ImageModal />
        </div>
        <svg>
          <defs>
            <mask id="mask">
              <rect x="0" y="0" width="300" height="300" fill="#4d4d4d" />
              <rect
                x={maskX}
                y={maskY}
                width="100"
                height="100"
                fill="white"
                stroke="black"
              />
            </mask>
          </defs>
        </svg>
      </div>
    );
  }
}

export default ImageViewer;
