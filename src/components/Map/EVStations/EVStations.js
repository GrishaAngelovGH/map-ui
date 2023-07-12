import Modal from 'react-bootstrap/Modal'

const EVStations = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide} backdrop={false}>
    <Modal.Header closeButton>
      <Modal.Title>
        <i className='bi bi-ev-station'></i>
        <span className='mx-2'>EV Stations Near You</span>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    </Modal.Body>
  </Modal>
)

export default EVStations