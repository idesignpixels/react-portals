import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const { children, className, title } = this.props;
    return (
      <div className={[className, 'card'].join(' ')}>
        {title &&
          <div className="cardHeader">{title}</div>
        }
        {children}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
};
