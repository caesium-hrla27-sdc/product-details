import React from 'react';

import styles from './style.css';

class MainCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.previewItemContainer1}>
        <div className={styles.previewItemContainer2}>
          <svg width={this.props.imageWidth} height={this.props.imageWidth}>
            <image
              width={this.props.imageWidth}
              height={this.props.imageWidth}
              href={this.props.mediaItem.url}
              onMouseEnter={this.props.onMouseEnter.bind(
                null,
                this.props.index
              )}
              onMouseLeave={this.props.onMouseLeave.bind(
                null,
                this.props.index
              )}
              onMouseMove={this.props.onMouseMove}
              onClick={this.props.onClick.bind(null, this.props.index)}
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default MainCarouselItem;
