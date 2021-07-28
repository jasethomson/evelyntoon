
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    modalBody,
    modalHeader,
    modalFooter
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className={"modalOpener"} onClick={toggle}>{buttonLabel}</button>
      <Modal isOpen={modal} modalTransition={{ timeout: 200 }} backdropTransition={{ timeout: 0 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{modalHeader}</ModalHeader>
        <ModalBody>
          {modalBody}
        </ModalBody>
        <ModalFooter>
          {modalFooter}
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
