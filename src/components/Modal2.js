import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Card2 from "./Card"
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Detalle</Button>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <Card2/>
          
          </ModalBody>
              
          <ModalFooter>
            <Button outline color="danger" onClick={this.toggle}>Cerrar</Button>{' '}
            <Button color="danger" onClick={this.toggle}>just like that</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modal2;