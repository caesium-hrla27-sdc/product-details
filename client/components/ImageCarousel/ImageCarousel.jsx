import React from 'react';

import ImageCarouselItem from '../ImageCarouselItem/ImageCarouselItem';

import leftArrow from './leftArrow.svg';
import rightArrow from './rightArrow.svg';

import styles from './style.css';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.carouselContainer1}>
        <div id={styles.carouselContainer2}>
          <div id={styles.carouselContainer3}>
            <div id={styles.carouselContainer4}>
              {this.props.media.map((mediaItem, index) => (
                <ImageCarouselItem mediaItem={mediaItem} key={index} />
              ))}
            </div>
          </div>
          <button className={`${styles.leftButton} ${styles.button}`}>
            <img className={styles.imageArrow} src={leftArrow} />
          </button>
          <button className={`${styles.rightButton} ${styles.button}`}>
            <img className={styles.imageArrow} src={rightArrow} />
          </button>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
