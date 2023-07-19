import Modal from 'react-bootstrap/Modal'
import MapillaryViewer from 'components/Map/MapillaryViewer'

const StreetView = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide} size='lg'>
    <Modal.Header closeButton>
      <Modal.Title>
        <i className='bi bi-compass'></i>
        <span className='mx-2'>Street View</span>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <MapillaryViewer />
    </Modal.Body>
  </Modal>
)

export default StreetView