import React from 'react';

import styles from './style.css';

class ModalMainCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.container4}>
              <div className={styles.aboveImage} />
              <img className={styles.image} src={this.props.mediaItem.url} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalMainCarouselItem;
