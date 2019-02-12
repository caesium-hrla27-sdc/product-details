import React from 'react';

import ImageCarouselItem from './ImageCarouselItem/ImageCarouselItem';

import styles from './style.css';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      leftDisabled: true,
      rightDisabled: false
    };
    this.incrementPageNumber = this.incrementPageNumber.bind(this);
    this.decrementPageNumber = this.decrementPageNumber.bind(this);
  }

  decrementPageNumber() {
    if (!this.state.leftDisabled) {
      this.setState({
        pageNumber: this.state.pageNumber - 1,
        rightDisabled: false
      });
    }
    if (this.state.pageNumber === 1) {
      this.setState({ leftDisabled: true });
    }
  }

  incrementPageNumber() {
    if (!this.state.rightDisabled) {
      this.setState({
        pageNumber: this.state.pageNumber + 1,
        leftDisabled: false
      });
    }
    if (this.state.pageNumber === Math.floor(this.props.media.length / 3) - 1) {
      this.setState({ rightDisabled: true });
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
                  current={this.props.current === index}
                  clearCurrentHoverIndex={this.props.clearCurrentHoverIndex}
                  updateCurrentHoverIndex={this.props.updateCurrentHoverIndex}
                  updateCurrentMediaIndex={this.props.updateCurrentMediaIndex}
                />
              ))}
            </div>
          </div>
          <button
            style={this.props.media.length <= 3 ? { display: 'none' } : {}}
            disabled={this.state.leftDisabled}
            onClick={this.decrementPageNumber}
            className={`${styles.leftButton} ${styles.button}`}
          >
            {/* <img className={styles.imageArrow} src={leftArrow} /> */}
            <svg viewBox="0 0 16 32" className={styles.imageArrow}>
              <path d="M2.2 16.052l13.5-14.33c.1-.098.3-.397.3-.695 0-.498-.4-.995-.9-.995-.3 0-.5.2-.6.298L.4 15.256c-.2.298-.4.497-.4.796 0 .298.1.398.2.497l.1.1L14.5 31.67c.1.1.3.3.6.3.5 0 .9-.5.9-.996 0-.3-.2-.498-.3-.697L2.2 16.05z" />
            </svg>
          </button>
          <button
            style={this.props.media.length <= 3 ? { display: 'none' } : {}}
            disabled={this.state.rightDisabled}
            onClick={this.incrementPageNumber}
            className={`${styles.rightButton} ${styles.button}`}
          >
            <svg viewBox="0 0 16 32" className={styles.imageArrow}>
              <path d="M13.8 15.952L.3 30.28c-.1.1-.3.398-.3.697 0 .497.4.995.9.995.3 0 .5-.2.6-.3L15.6 16.75c.2-.298.4-.497.4-.796 0-.298-.1-.398-.2-.497l-.1-.1L1.5.33C1.4.23 1.2.032.9.032c-.5 0-.9.497-.9.995 0 .298.2.497.3.696l13.5 14.23z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
