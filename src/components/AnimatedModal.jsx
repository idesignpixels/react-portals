import React from 'react';
import ReactDOM from 'react-dom';
import { TransitionMotion, spring } from 'react-motion';

export default class AnimatedModal extends React.Component {
  componentWillMount() {
    this.modalRoot = document.getElementById('modal-root');
  }

  render() {
    const { show, children, backDropClick } = this.props;
    const willLeave = () => ({ opacity: spring(0) });
    const willEnter = () => ({ opacity: 0 });

    return ReactDOM.createPortal((
      <TransitionMotion
        willLeave={willLeave}
        willEnter={willEnter}
        styles={
          show ? [{
            key: 'a',
            style: {
              opacity: spring(1),
            },
          }] : []
        }
      >
        {(items) => {
          if (items.length) {
            const { key, style } = items[0];
            return (
              <div className="backdrop" key={key} style={{ ...style }} onClick={backDropClick}>
                <div className="modal" onClick={e => e.stopPropagation()}>
                  {children}
                </div>
              </div>
            );
          }
          return null;
        }}
      </TransitionMotion>
    ), this.modalRoot);
  }
}
