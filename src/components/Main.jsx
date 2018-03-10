import React from 'react';
import Modal from './Modal';
import AnimatedModal from './AnimatedModal';
import Card from './Card/Card';
import CardContent from './Card/CardContent';
import CardActions from './Card/CardActions';
import CardAction from './Card/CardAction';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openAnimatedModal = this.openAnimatedModal.bind(this);
    this.closeAnimatedModal = this.closeAnimatedModal.bind(this);
    this.state = {
      modal: false,
      animatedModal: false
    }
  }

  openModal() {
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  openAnimatedModal() {
    this.setState({ animatedModal: true });
  }

  closeAnimatedModal() {
    this.setState({ animatedModal: false });
  }

  render() {
    return (
      <main>
        <div className="main-wrapper wrapper">
          <div>
            <h1>React portals</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis elit sit amet nunc feugiat ornare. Aenean lobortis lobortis velit, sit amet molestie ipsum varius vitae.</p>
            <button onClick={this.openModal}>Modal</button>
            <Modal show={this.state.modal} backDropClick={this.closeModal}>
              <Card title="Modal">
                  <CardContent>
                    <p>Blah blah bah</p>
                  </CardContent>
                  <CardActions>
                    <CardAction label="Close" onClick={this.closeModal} />
                    <CardAction label="Confirm" />
                  </CardActions>
                </Card>
            </Modal>
            <br />
            <br />
            <p>Vivamus tortor arcu, suscipit non ipsum ut, egestas interdum dolor. Maecenas aliquam molestie nisl at porttitor.</p>
            <button onClick={this.openAnimatedModal}>Animated Modal</button>
            <AnimatedModal show={this.state.animatedModal} backDropClick={this.closeAnimatedModal}>
              <Card title="Animated Modal">
                  <CardContent>
                    <p>Blah blah bah</p>
                  </CardContent>
                  <CardActions>
                    <CardAction label="Close" onClick={this.closeAnimatedModal} />
                    <CardAction label="Confirm" />
                  </CardActions>
                </Card>
            </AnimatedModal>
            <br />
            <br />
            <p>Morbi volutpat tempus nibh, eget tempor justo ornare sed. Sed viverra aliquam dolor. Sed convallis ante libero, ac ultricies est lacinia in.</p>
            <button>Notification</button>
          </div>
        </div>
      </main>
    );
  }
}
