import React from 'react';

import styles from './style.css';

import ImagePreview from './ImagePreview/ImagePreview';
import ImageModal from '../ImageViewer/ImageModal/ImageModal';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      displayModal: false
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  updateSelected(index) {
    this.setState({ selectedIndex: index });
  }

  toggleModal() {
    this.setState({
      displayModal: this.state.displayModal ? false : true
    });
  }
  render() {
    return (
      <div id={styles.imageViewerContainer}>
        <ImagePreview
          media={this.props.product.media}
          selectedIndex={this.state.selectedIndex}
          updateSelected={this.updateSelected}
          toggleModal={this.toggleModal}
        />
        <ImageModal
          product={this.props.product}
          toggleModal={this.toggleModal}
          displayModal={this.state.displayModal}
          initialIndex={this.state.selectedIndex}
        />
      </div>
    );
  }
}

export default ImageViewer;
