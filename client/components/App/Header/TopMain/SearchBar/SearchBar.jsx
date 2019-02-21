import React from 'react';

import styles from './style.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    
    <div id={styles.container1}>
      <div>
        <div>
          <div id={styles.container4}>
            <form id={styles.form}>
              <label id={styles.label}>Search</label>
              <div id={styles.container5}>
                <div>
                  <div id={styles.container7}>
                    <input id={styles.searchInput} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" maxLength="70" type="text" placeholder="Search"></input>
                  </div>
                </div>
                <svg id={styles.svgMagnifyingGlass} viewBox="174.6 541.6 12 12" >
                 <path d="M186.4 552.5l-3.5-3.5c.6-.8 1-1.8 1-2.8 0-2.6-2.1-4.6-4.6-4.6-2.6 0-4.6 2.1-4.6 4.6 0 2.6 2.1 4.6 4.6 4.6 1.1 0 2-.4 2.8-1l3.5 3.5c.1.1.3.2.5.2s.3-.1.5-.2c0-.1 0-.5-.2-.8zm-10.6-6.3c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4-3.4-1.6-3.4-3.4z"></path>
                </svg>
              </div>
            </ form>
          </div>
        </div>
      </div>
    </div>
      
      );
  }
}

export default SearchBar;
