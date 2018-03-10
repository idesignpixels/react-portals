import React from 'react';

export default class CardContent extends React.PureComponent {
  render() {
    const { children, className } = this.props;
    return (
      <div className={[className, 'cardContent'].join(' ')}>
        {children}
      </div>
    );
  }
}
