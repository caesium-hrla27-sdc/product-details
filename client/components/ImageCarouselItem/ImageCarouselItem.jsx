import React from 'react';

import styles from './style.css';

class ImageCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.carouselItemContainer1}>
        <div id={styles.carouselItemContainer2}>
          <div id={styles.carouselItemContainer3}>
            <div id={styles.carouselItemContainer4}>
              <img
                src={this.props.mediaItem.url}
                id={styles.imageCarouselMedia}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCarouselItem;
