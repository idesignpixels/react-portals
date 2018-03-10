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
            <p>This is a demonstration of React portals please see the related <a href="http://idesignpixels.com">blog post</a> or if you want to see the source code the <a href="https://github.com/idesignpixels/react-portals/tree/master">repository</a>.</p>
            <p>An example of a basic modal</p>
            <button onClick={this.openModal}>Modal</button>
            <Modal show={this.state.modal} backDropClick={this.closeModal}>
              <Card title="Modal">
                  <CardContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis elit sit amet nunc feugiat ornare. Aenean lobortis lobortis velit, sit amet molestie ipsum varius vitae.</p>
                  </CardContent>
                  <CardActions>
                    <CardAction label="Close" onClick={this.closeModal} />
                    <CardAction label="Confirm" />
                  </CardActions>
                </Card>
            </Modal>
            <br />
            <br />
            <p>An example of a animated modal that uses the fantastic <a href="https://github.com/chenglou/react-motion">React Motion</a> package</p>
            <button onClick={this.openAnimatedModal}>Animated Modal</button>
            <AnimatedModal show={this.state.animatedModal} backDropClick={this.closeAnimatedModal}>
              <Card title="Animated Modal">
                  <CardContent>
                    <p>Vivamus tortor arcu, suscipit non ipsum ut, egestas interdum dolor. Maecenas aliquam molestie nisl at porttitor.</p>
                  </CardContent>
                  <CardActions>
                    <CardAction label="Close" onClick={this.closeAnimatedModal} />
                    <CardAction label="Confirm" />
                  </CardActions>
                </Card>
            </AnimatedModal>
          </div>
        </div>
      </main>
    );
  }
}
