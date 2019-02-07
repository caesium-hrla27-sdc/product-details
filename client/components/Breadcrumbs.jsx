import React from 'react';

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.breadcrumbs.map((crumb, index) => {
          if (index !== this.props.breadcrumbs.length - 1) {
            return (
              <li key={index}>
                <p>{crumb}</p>
                <svg>
                  <path d="M57 142.5L9.5 95 0 104.5l38 38-38 38 9.5 9.5L57 142.5z" />
                </svg>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <p>{crumb}</p>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default Breadcrumbs;
