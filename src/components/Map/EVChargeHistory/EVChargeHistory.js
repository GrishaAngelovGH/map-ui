import Modal from 'react-bootstrap/Modal'
import Summary from './Summary'
import BatteryMeasure from './BatteryMeasure'

const EVChargeHistory = ({ show, onHide }) => {
  const history = [
    { location: { city: 'London', country: 'England, UK' }, battery: 100 },
    { location: { city: 'London', country: 'England, UK' }, battery: 90 },
    { location: { city: 'London', country: 'England, UK' }, battery: 80 },
  ]

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className='bi bi-ev-station'></i>
          <span className='mx-2'>EV Charge History</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='overflow-auto' style={{ height: 500 }}>
        <Summary />

        <div className='p-3'>
          {
            history.map((v, i) => (<BatteryMeasure key={i} measure={v} />))
          }
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default EVChargeHistory