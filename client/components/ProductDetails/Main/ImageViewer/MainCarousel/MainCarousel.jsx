import React from 'react';

import MainCarouselItem from './MainCarouselItem/MainCarouselItem';

import styles from './style.css';

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id={styles.mainCarouselContainer}
        style={{
          transform: `translate3d(${this.props.currentIndex *
            -this.props.itemWidth}px, 0px, 0px)`
        }}
      >
        {this.props.media.map((mediaItem, index) => (
          <MainCarouselItem
            mediaItem={mediaItem}
            index={index}
            key={index}
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave}
            onMouseMove={this.props.onMouseMove}
            onClick={this.props.onClick}
            imageWidth={this.props.imageWidth}
          />
        ))}
      </div>
    );
  }
}

export default MainCarousel;
