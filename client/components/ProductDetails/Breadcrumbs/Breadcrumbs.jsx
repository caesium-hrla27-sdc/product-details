import React from 'react';

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
                <svg className={styles.arrow} viewBox="0 95 57 95">
                  <path d="M57 142.5L9.5 95 0 104.5l38 38-38 38 9.5 9.5L57 142.5z" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
}

export default Breadcrumbs;
