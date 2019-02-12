import React from 'react';

import styles from './style.css';

import ModalMainCarouselItem from '../ModalMainCarouselItem/ModalMainCarouselItem';

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
                      <div id={styles.mainCarousel}>
                        <div id={styles.mainCarouselContainer1}>
                          <div id={styles.mainCarouselContainer2}>
                            <div id={styles.mainCarouselContainer3}>
                              {this.props.media.map((mediaItem, index) => (
                                <ModalMainCarouselItem
                                  mediaItem={mediaItem}
                                  index={index}
                                  key={index}
                                />
                              ))}
                            </div>
                          </div>
                          <button
                            id={styles.leftButton}
                            className={styles.button}
                          >
                            <svg
                              viewBox="0 0 16 32"
                              className={styles.imageArrow}
                            >
                              <path d="M2.2 16.052l13.5-14.33c.1-.098.3-.397.3-.695 0-.498-.4-.995-.9-.995-.3 0-.5.2-.6.298L.4 15.256c-.2.298-.4.497-.4.796 0 .298.1.398.2.497l.1.1L14.5 31.67c.1.1.3.3.6.3.5 0 .9-.5.9-.996 0-.3-.2-.498-.3-.697L2.2 16.05z" />
                            </svg>
                          </button>
                          <button
                            id={styles.rightButton}
                            className={styles.button}
                          >
                            <svg
                              viewBox="0 0 16 32"
                              className={styles.imageArrow}
                            >
                              <path d="M13.8 15.952L.3 30.28c-.1.1-.3.398-.3.697 0 .497.4.995.9.995.3 0 .5-.2.6-.3L15.6 16.75c.2-.298.4-.497.4-.796 0-.298-.1-.398-.2-.497l-.1-.1L1.5.33C1.4.23 1.2.032.9.032c-.5 0-.9.497-.9.995 0 .298.2.497.3.696l13.5 14.23z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div id={styles.divider} />
                      <div id={styles.secondaryCarousel} />
                    </div>
                  </div>
                  <button id={styles.closeButton} className={styles.button}>
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
