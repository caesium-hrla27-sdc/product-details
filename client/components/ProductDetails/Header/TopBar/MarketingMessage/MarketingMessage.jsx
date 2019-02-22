import React from 'react';

import styles from './style.css';

class MarketingMessage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <div id={styles.container2}>
      <div >
      <div >
      <a id={styles.a} >
      Free 3-Day Shipping over $50</a>
      </div>
      </div>
      </div>
      </div>
    );

  }


}

export default MarketingMessage;