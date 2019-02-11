import React from 'react';

import ImageCarouselItem from '../ImageCarouselItem/ImageCarouselItem';

import leftArrow from './leftArrow.svg';
import rightArrow from './rightArrow.svg';

import styles from './style.css';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0
    };
    this.incrementPageNumber = this.incrementPageNumber.bind(this);
    this.decrementPageNumber = this.decrementPageNumber.bind(this);
  }

  decrementPageNumber() {
    if (this.state.pageNumber > 0) {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  }

  incrementPageNumber() {
    if (this.state.pageNumber < Math.floor(this.props.media.length / 3)) {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }
  }

  render() {
    return (
      <div id={styles.carouselContainer1}>
        <div id={styles.carouselContainer2}>
          <div id={styles.carouselContainer3}>
            <div
              id={styles.carouselContainer4}
              style={{
                transform: `translate3d(${this.state.pageNumber *
                  -252}px, 0px, 0px)`
              }}
            >
              {this.props.media.map((mediaItem, index) => (
                <ImageCarouselItem
                  mediaItem={mediaItem}
                  key={index}
                  index={index}
                  current={this.props.currentMediaIndex === index}
                  clearCurrentHoverIndex={this.props.clearCurrentHoverIndex}
                  updateCurrentHoverIndex={this.props.updateCurrentHoverIndex}
                  updateCurrentMediaIndex={this.props.updateCurrentMediaIndex}
                />
              ))}
            </div>
          </div>
          <button
            onClick={this.decrementPageNumber}
            className={`${styles.leftButton} ${styles.button}`}
          >
            <img className={styles.imageArrow} src={leftArrow} />
          </button>
          <button
            onClick={this.incrementPageNumber}
            className={`${styles.rightButton} ${styles.button}`}
          >
            <img className={styles.imageArrow} src={rightArrow} />
          </button>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
