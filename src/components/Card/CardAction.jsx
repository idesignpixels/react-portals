import React from 'react';
import PropTypes from 'prop-types';

export default class CardAction extends React.Component {
  render() {
    const { onClick, label, primary, danger } = this.props;
    const actionClassNames = [
      'cardAction',
      primary && 'cardActionPrimary',
      danger && 'cardActionDanger',
    ].join(' ');

    return (
      <button className={actionClassNames} onClick={onClick}>
        {label}
      </button>
    );
  }
}

CardAction.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
};

CardAction.defaultProps = {
  to: null,
  link: null,
  back: false,
  label: PropTypes.string.isRequired,
  primary: false,
  danger: false,
};
