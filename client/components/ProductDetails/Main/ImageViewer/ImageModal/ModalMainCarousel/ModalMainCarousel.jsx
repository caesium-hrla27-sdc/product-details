import React from 'react';

import MainCarousel from '../../MainCarousel/MainCarousel';

import styles from './style.css';

class ModalMainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveLeft() {
    this.props.updateCurrentIndex(this.props.currentIndex - 1);
  }

  moveRight() {
    this.props.updateCurrentIndex(this.props.currentIndex + 1);
  }

  render() {
    return (
      <div id={styles.mainCarousel}>
        <div id={styles.mainCarouselContainer1}>
          <div id={styles.mainCarouselContainer2}>
            <MainCarousel
              media={this.props.media}
              currentIndex={this.props.currentIndex}
              itemWidth={852}
              onMouseMove={() => {}}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              onClick={() => {}}
              imageWidth={583}
            />
          </div>
          <button
            id={styles.leftButton}
            className={styles.button}
            onClick={this.moveLeft}
            style={this.props.media.length < 2 ? { display: 'none' } : {}}
            disabled={!(this.props.currentIndex > 0)}
          >
            <svg viewBox="0 0 16 32" className={styles.imageArrow}>
              <path d="M2.2 16.052l13.5-14.33c.1-.098.3-.397.3-.695 0-.498-.4-.995-.9-.995-.3 0-.5.2-.6.298L.4 15.256c-.2.298-.4.497-.4.796 0 .298.1.398.2.497l.1.1L14.5 31.67c.1.1.3.3.6.3.5 0 .9-.5.9-.996 0-.3-.2-.498-.3-.697L2.2 16.05z" />
            </svg>
          </button>
          <button
            id={styles.rightButton}
            className={styles.button}
            onClick={this.moveRight}
            style={this.props.media.length < 2 ? { display: 'none' } : {}}
            disabled={!(this.props.currentIndex < this.props.media.length - 1)}
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

export default ModalMainCarousel;
