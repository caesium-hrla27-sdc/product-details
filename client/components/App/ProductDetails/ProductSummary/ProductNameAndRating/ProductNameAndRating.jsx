import React from 'react';

import styles from './style.css';

class ProductNameAndRating extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.container}>
        <h1 id={styles.nameAndDescription}>
          <a id={styles.nameBox}>
            <span id={styles.name}>{this.props.product.name}</span>
          </a>
          <span id={styles.description}>{this.props.product.description}</span>
        </h1>
        <div id={styles.sizeAndNumberBox}>
          <span>
            {'SIZE ' + this.props.product.size}
            <span id={styles.sizeNumberSeparator} data-comp="Text Box">
              •
            </span>
          </span>
          {'ITEM ' + this.props.product.item_number}
        </div>
        <div id={styles.ratingsAndLovesBox}>
          <div id={styles.ratingsBox}>
            <button type="button" id={styles.ratingsButton}>
              <span id={styles.starsSpan}>
                <div id={styles.starsContainer}>
                  <div>
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                  </div>
                  <div
                    id={styles.starFill}
                    style={{
                      width: `${this.props.product.average_rating * 100}%`
                    }}
                  >
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                    <svg viewBox="0 0 32 32" className={styles.star}>
                      <path d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z" />
                    </svg>
                  </div>
                </div>
              </span>
              <span id={styles.reviewCount}>
                {this.props.product.review_count} reviews
              </span>
            </button>
          </div>
          <div id={styles.reviewLovesSeparator} />
          <span id={styles.lovesSpan}>
            <span id={styles.loveHeartSpan}>
              <svg viewBox="0 0 32 26" id={styles.loveHeartSvg}>
                <path d="M16.003 26c-.915 0-1.772-.354-2.417-1L2.364 13.78C.84 12.254 0 10.228 0 8.07 0 3.078 4.153-.012 8-.012c2.225 0 4.223.822 5.778 2.377L16 4.586l2.222-2.222C19.777.81 21.775-.013 24-.013c3.848 0 8 3.09 8 8.084 0 2.157-.84 4.184-2.364 5.708L18.413 25c-.643.645-1.5 1-2.41 1z" />
              </svg>
            </span>
            <span id={styles.loveCount}>{this.props.product.loves_count}</span>
            {' loves'}
          </span>
        </div>
      </div>
    );
  }
}

export default ProductNameAndRating;
