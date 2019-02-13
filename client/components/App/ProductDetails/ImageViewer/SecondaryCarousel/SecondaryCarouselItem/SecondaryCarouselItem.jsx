import React from 'react';

import styles from './style.css';

class SecondaryCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={styles.carouselItemContainer1}
        style={{ width: `${100 / this.props.pageSize}%` }}
        onMouseEnter={this.props.onMouseEnter.bind(null, this.props.index)}
        onMouseLeave={this.props.onMouseLeave.bind(null, this.props.index)}
        onClick={event => this.props.onClick(this.props.index, event)}
      >
        <div
          className={styles.carouselItemContainer2}
          style={
            this.props.selected
              ? { borderColor: 'rgb(0, 0, 0)' }
              : { borderColor: 'transparent' }
          }
        >
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

export default SecondaryCarouselItem;
