import React from 'react';

import MainCarousel from './MainCarousel/MainCarousel';
import ImageDirections from './ImageDirections/ImageDirections';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import ImagePopup from './ImagePopup/ImagePopup';
import ImageModal from './ImageModal/ImageModal';
import styles from './style.css';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMediaIndex: 0,
      currentHoverIndex: null,
      currentModalIndex: 0,
      mouseX: 0,
      mouseY: 0,
      displayPopup: false,
      displayModal: false,
      imagePreviewRef: React.createRef()
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateMouseCoordinates = this.updateMouseCoordinates.bind(this);
    this.clearCurrentHoverIndex = this.clearCurrentHoverIndex.bind(this);
    this.updateCurrentHoverIndex = this.updateCurrentHoverIndex.bind(this);
    this.updateCurrentMediaIndex = this.updateCurrentMediaIndex.bind(this);
    this.updateCurrentModalIndex = this.updateCurrentModalIndex.bind(this);
    this.previewClick = this.previewClick.bind(this);
    this.previewEnter = this.previewEnter.bind(this);
    this.previewLeave = this.previewLeave.bind(this);
    this.previewMove = this.previewMove.bind(this);
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

  toggleModal(index) {
    if (!index) {
      index = 0;
    }
    this.setState({
      displayModal: this.state.displayModal ? false : true,
      currentModalIndex: index
    });
  }

  updateCurrentModalIndex(index) {
    this.setState({ currentModalIndex: index });
  }

  updateCurrentHoverIndex(index) {
    this.setState({ currentHoverIndex: index });
  }

  updateCurrentMediaIndex(index) {
    this.setState({ currentMediaIndex: index });
  }

  clearCurrentHoverIndex() {
    this.setState({ currentHoverIndex: null });
  }

  previewEnter(index, event) {
    event.target.style.mask = 'url(#mask)';
    this.setState({
      displayPopup: this.state.displayPopup ? false : true
    });
  }

  previewMove(event) {
    this.setState({ mouseX: event.clientX, mouseY: event.clientY });
  }

  previewLeave(index, event) {
    event.target.style.mask = '';

    this.setState({ displayPopup: this.state.displayPopup ? false : true });
  }

  previewClick(index, event) {
    this.setState({
      currentModalIndex: index,
      displayModal: this.state.displayModal ? false : true
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
    let imagePreviewIndex = this.state.currentHoverIndex
      ? this.state.currentHoverIndex
      : this.state.currentMediaIndex;
    return (
      <div id={styles.imageViewerContainer}>
        <div id={styles.imageViewer}>
          <div id={styles.previewContainer1} ref={this.state.imagePreviewRef}>
            <div id={styles.previewContainer2}>
              <div id={styles.previewContainer3}>
                <MainCarousel
                  media={this.props.media}
                  current={imagePreviewIndex}
                  itemWidth={300}
                  imageWidth={300}
                  onMouseEnter={this.previewEnter}
                  onMouseLeave={this.previewLeave}
                  onMouseMove={this.previewMove}
                  onClick={this.previewClick}
                />
              </div>
            </div>
          </div>
          <ImageDirections />
          <ImageCarousel
            current={this.state.currentMediaIndex}
            media={this.props.media}
            clearCurrentHoverIndex={this.clearCurrentHoverIndex}
            updateCurrentHoverIndex={this.updateCurrentHoverIndex}
            updateCurrentMediaIndex={this.updateCurrentMediaIndex}
          />
          <ImagePopup
            displayPopup={this.state.displayPopup}
            mediaItem={this.props.media[this.state.currentMediaIndex]}
            translateX={500 - 5 * maskX}
            translateY={500 - 5 * maskY}
          />
          <ImageModal
            media={this.props.media}
            toggleModal={this.toggleModal}
            displayModal={this.state.displayModal}
            currentModalIndex={this.state.currentModalIndex}
            updateCurrentModalIndex={this.updateCurrentModalIndex}
          />
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
