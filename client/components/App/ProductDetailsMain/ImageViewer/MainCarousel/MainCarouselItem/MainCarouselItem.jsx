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
              onMouseEnter={event =>
                this.props.onMouseEnter(this.props.index, event)
              }
              onMouseLeave={event =>
                this.props.onMouseLeave(this.props.index, event)
              }
              onMouseMove={event => this.props.onMouseMove(event)}
              onClick={event => this.props.onClick(this.props.index, event)}
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default MainCarouselItem;
