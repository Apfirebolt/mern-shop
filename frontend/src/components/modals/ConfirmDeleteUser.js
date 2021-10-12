import { Button, Modal } from "react-bootstrap";

const ConfirmDeleteUser = (props) => {
  return (
    <>
      <Modal show={props.showModal} onHide={() => {props.hideModalFunction()}}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {props.hideModalFunction()}}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {props.deleteUser(props.userId)}}>
            Delete User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmDeleteUser;
