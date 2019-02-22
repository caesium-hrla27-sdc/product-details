import React from 'react';

import MainCarousel from '../MainCarousel/MainCarousel';
import ImageDirections from './ImageDirections/ImageDirections';
import ImagePopup from './ImagePopup/ImagePopup';
import SecondaryCarousel from '../SecondaryCarousel/SecondaryCarousel';

import styles from './style.css';

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverIndex: null,
      mouseX: 0,
      mouseY: 0,
      displayPopup: false,
      mainCarouselRef: React.createRef()
    };

    this.previewClick = this.previewClick.bind(this);
    this.previewEnter = this.previewEnter.bind(this);
    this.previewLeave = this.previewLeave.bind(this);
    this.previewMove = this.previewMove.bind(this);

    this.sPreviewClick = this.sPreviewClick.bind(this);
    this.sPreviewEnter = this.sPreviewEnter.bind(this);
    this.sPreviewLeave = this.sPreviewLeave.bind(this);
  }

  previewEnter(index, event) {
    event.currentTarget.style.mask = 'url(#mask)';
    this.setState({
      displayPopup: true
    });
  }

  previewMove(event) {
    this.setState({ mouseX: event.clientX, mouseY: event.clientY });
  }

  previewLeave(index, event) {
    event.currentTarget.style.mask = '';
    this.setState({ displayPopup: false });
  }

  previewClick(index, event) {
    this.setState({
      currentModalIndex: index,
      displayPopup: false
    });
    this.props.toggleModal();
  }

  sPreviewEnter(index, event) {
    let currentBorder = event.currentTarget.children[0].style.borderColor;
    if (currentBorder !== 'rgb(0, 0, 0)') {
      event.currentTarget.children[0].style.borderColor = '#969696';
    }
    this.setState({ hoverIndex: index });
  }

  sPreviewLeave(index, event) {
    let currentBorder = event.currentTarget.children[0].style.borderColor;
    if (currentBorder !== 'rgb(0, 0, 0)') {
      event.currentTarget.children[0].style.borderColor = 'transparent';
    }
    this.setState({ hoverIndex: null });
  }

  sPreviewClick(index, event) {
    this.props.updateSelected(index);
  }

  render() {
    let maskX = 0;
    let maskY = 0;
    if (this.state.mainCarouselRef.current) {
      let { x, y } = this.state.mainCarouselRef.current.getBoundingClientRect();
      maskX = this.state.mouseX - x - 50;
      maskY = this.state.mouseY - y - 50;
    }
    let currentPreviewIndex = this.props.selectedIndex;
    if (this.state.hoverIndex !== null) {
      currentPreviewIndex = this.state.hoverIndex;
    }
    return (
      <div id={styles.imagePreview}>
        <div id={styles.previewContainer1} ref={this.state.mainCarouselRef}>
          <div id={styles.previewContainer2}>
            <div id={styles.previewContainer3}>
              <MainCarousel
                media={this.props.media}
                currentIndex={currentPreviewIndex}
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
        <SecondaryCarousel
          media={this.props.media}
          pageWidth={252}
          onClick={this.sPreviewClick}
          onMouseEnter={this.sPreviewEnter}
          onMouseLeave={this.sPreviewLeave}
          selectedIndex={this.props.selectedIndex}
          pageSize={3}
        />

        <ImagePopup
          displayPopup={this.state.displayPopup}
          mediaItem={this.props.media[this.props.selectedIndex]}
          translateX={500 - 5 * maskX}
          translateY={500 - 5 * maskY}
        />
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

export default ImagePreview;
