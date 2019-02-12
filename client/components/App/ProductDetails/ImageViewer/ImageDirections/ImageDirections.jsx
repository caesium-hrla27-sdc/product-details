import React from 'react';

import styles from './style.css';

class IamgeDirections extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id={styles.direction}>Roll over or click image to zoom in</div>;
  }
}

export default IamgeDirections;
