import React from 'react';

export default class CardActions extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="cardActions">
        {children}
      </div>
    );
  }
}
