import Modal from 'react-bootstrap/Modal'
import Summary from './Summary'

const EVChargeHistory = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className='bi bi-ev-station'></i>
          <span className='mx-2'>EV Charge History</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Summary />
      </Modal.Body>
    </Modal>
  )
}

export default EVChargeHistory