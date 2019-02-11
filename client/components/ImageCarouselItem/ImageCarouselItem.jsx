import React from 'react';

import styles from './style.css';

class ImageCarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.updateCurrentMediaIndex = this.updateCurrentMediaIndex.bind(this);
  }
  toggleHover() {
    if (this.state.hover) {
      this.props.clearCurrentHoverIndex();
    } else {
      this.props.updateCurrentHoverIndex(this.props.index);
    }
    this.setState({
      hover: this.state.hover ? false : true
    });
  }

  updateCurrentMediaIndex() {
    this.props.updateCurrentMediaIndex(this.props.index);
  }

  render() {
    let borderStyle = { borderColor: 'transparent' };
    if (this.state.hover) {
      borderStyle = { borderColor: 'rgb(150, 150, 150)' };
    }
    if (this.props.current) {
      borderStyle = { borderColor: '#000' };
    }
    return (
      <div
        className={styles.carouselItemContainer1}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={this.updateCurrentMediaIndex}
      >
        <div className={styles.carouselItemContainer2} style={borderStyle}>
          <div className={styles.carouselItemContainer3}>
            <div className={styles.carouselItemContainer4}>
              <img
                src={this.props.mediaItem.url}
                className={styles.carouselItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCarouselItem;
