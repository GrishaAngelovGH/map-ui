import Modal from 'react-bootstrap/Modal'

const TrafficReport = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>Modal Body</Modal.Body>
  </Modal>
)

export default TrafficReport