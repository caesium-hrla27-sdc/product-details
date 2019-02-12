import React from 'react';

import styles from './style.css';

import ModalMainCarousel from './ModalMainCarousel/ModalMainCarousel';

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                  <div id={styles.modalHeader} />
                  <div id={styles.modalBody}>
                    <div id={styles.modalBodyContainer}>
                      <ModalMainCarousel
                        media={this.props.media}
                        currentModalIndex={this.props.currentModalIndex}
                        updateCurrentModalIndex={
                          this.props.updateCurrentModalIndex
                        }
                      />
                      <div id={styles.divider} />
                      <div id={styles.secondaryCarousel} />
                    </div>
                  </div>
                  <button
                    id={styles.closeButton}
                    className={styles.button}
                    onClick={this.props.toggleModal}
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
