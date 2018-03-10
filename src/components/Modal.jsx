import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  componentWillMount() {
    this.modalRoot = document.getElementById('modal-root');
  }

  render() {
    const { show, children, backDropClick } = this.props;
    if (show) {
      return ReactDOM.createPortal((
        <div className="backdrop" onClick={backDropClick}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
      ), this.modalRoot);
    } else {
      return null;
    }
  }
}
