import Modal from 'react-bootstrap/Modal'
import TrafficStatus from './TrafficStatus'

const TrafficReport = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>
        <i className='bi bi-geo-alt-fill text-primary border border-3 border-primary rounded'></i>
        <span className='mx-2'>91 Knightsbridge, London</span>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className='m-0 text-center'>91 Knightsbridge, London SW1X 8ET</p>
      <p className='m-0 text-secondary text-center'>Fastest route now due to traffic conditions</p>

      <TrafficStatus status='low' />
      <TrafficStatus status='high' />
      <TrafficStatus status='normal' />
    </Modal.Body>
  </Modal>
)

export default TrafficReport