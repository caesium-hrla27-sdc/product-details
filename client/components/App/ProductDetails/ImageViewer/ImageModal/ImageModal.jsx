import React from 'react';

import styles from './style.css';

import ModalMainCarousel from './ModalMainCarousel/ModalMainCarousel';
import SecondaryCarousel from '../../../../SecondaryCarousel/SecondaryCarousel';

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null,
      hoverIndex: null
    };
    this.updateCurrentIndex = this.updateCurrentIndex.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.sPreviewClick = this.sPreviewClick.bind(this);
    this.sPreviewEnter = this.sPreviewEnter.bind(this);
    this.sPreviewLeave = this.sPreviewLeave.bind(this);
  }

  updateCurrentIndex(index) {
    this.setState({ currentIndex: index });
  }

  closeModal() {
    this.props.toggleModal();
    this.setState({ currentIndex: null });
  }

  sPreviewEnter(index, event) {
    let currentBorder = event.currentTarget.children[0].style.borderColor;
    if (currentBorder !== 'rgb(0, 0, 0)') {
      event.currentTarget.children[0].style.borderColor = '#969696';
    }
    this.setState({ hoverIndex: index });
  }

  sPreviewLeave(index, event) {
    let currentBorder = event.currentTarget.children[0].style.borderColor;
    if (currentBorder !== 'rgb(0, 0, 0)') {
      event.currentTarget.children[0].style.borderColor = 'transparent';
    }
    this.setState({ hoverIndex: null });
  }

  sPreviewClick(index, event) {
    this.updateCurrentIndex(index);
  }

  render() {
    let mainCarouselIndex = this.state.hoverIndex
      ? this.state.hoverIndex
      : this.state.currentIndex
      ? this.state.currentIndex
      : this.props.initialIndex;

    let selectedIndex = this.state.currentIndex
      ? this.state.currentIndex
      : this.props.initialIndex;
    return (
      <div
        id={styles.modalContainer1}
        style={this.props.displayModal ? {} : { display: 'none' }}
      >
        <div id={styles.modalContainer2}>
          <div id={styles.modalContainer3}>
            <div id={styles.modalContainer4}>
              <div id={styles.modalContainer5}>
                <div id={styles.modalContainer6}>
                  <div id={styles.modalHeaderContainer}>
                    <h2 id={styles.modalHeader}>
                      {this.props.product.name +
                        ' ' +
                        this.props.product.description}
                    </h2>
                  </div>
                  <div id={styles.modalBody}>
                    <div id={styles.modalBodyContainer}>
                      <ModalMainCarousel
                        media={this.props.product.media}
                        currentIndex={mainCarouselIndex}
                        updateCurrentIndex={this.updateCurrentIndex}
                      />
                      <div id={styles.divider} />
                      <SecondaryCarousel
                        media={this.props.product.media}
                        pageWidth={860}
                        onClick={this.sPreviewClick}
                        onMouseEnter={this.sPreviewEnter}
                        onMouseLeave={this.sPreviewLeave}
                        selectedIndex={selectedIndex}
                        pageSize={14}
                      />
                    </div>
                  </div>
                  <button
                    id={styles.closeButton}
                    className={styles.button}
                    onClick={this.closeModal}
                  >
                    <svg viewBox="0 0 17 17" id={styles.svgCloseButton}>
                      <path d="M17 7.5H9.5V0h-2v7.5H0v2h7.5V17h2V9.5H17" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id={styles.modalBackground} />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageModal;
