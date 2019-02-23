import React from 'react';

import arrow from './arrow.svg';

import styles from './style.css';

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const breadcrumbs = this.props.breadcrumbs;
    return (
      <nav>
        <ol id={styles.breadcrumbs}>
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className={styles.crumb}>
              <a>{crumb}</a>
              {index === breadcrumbs.length - 1 ? null : (
                <img className={styles.arrow} src={arrow} />
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
}

export default Breadcrumbs;
