import Modal from 'react-bootstrap/Modal'
import BatteryMeasure from './BatteryMeasure'
import ChargeDuration from './ChargeDuration'
import Summary from './Summary'

const EVChargeHistory = ({ show, onHide }) => {
  const history = [
    { id: 1, location: { city: 'London', country: 'England, UK' }, battery: 100, charge: false, distanceInKm: 20, durationTimeInMin: 30 },
    { id: 2, location: { city: 'London', country: 'England, UK' }, battery: 90, charge: false, distanceInKm: 24, durationTimeInMin: 28 },
    { id: 3, location: { city: 'London', country: 'England, UK' }, battery: 70, charge: false, distanceInKm: 46, durationTimeInMin: 55 },
    { id: 4, location: { city: 'London', country: 'England, UK' }, currentBatteryCharge: 85, prevBatteryCharge: 70, durationTimeInMin: 35, charge: true, name: 'ChargePoint - 123 Road', address: 'A12 B34 London, UK' },
    { id: 5, location: { city: 'London', country: 'England, UK' }, battery: 65, charge: false, distanceInKm: 32, durationTimeInMin: 40 },
    { id: 6, location: { city: 'London', country: 'England, UK' }, battery: 60, charge: false, distanceInKm: 5, durationTimeInMin: 10 },
    { id: 7, location: { city: 'London', country: 'England, UK' }, currentBatteryCharge: 95, prevBatteryCharge: 60, durationTimeInMin: 75, charge: true, name: 'ChargePoint - 123 Road', address: 'A12 B34 London, UK' }
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
        <Summary history={history} />

        <div className='p-3'>
          {
            history.map(v => (
              v.charge ?
                <ChargeDuration key={v.id} duration={v} /> :
                <BatteryMeasure key={v.id} measure={v} />
            ))
          }
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default EVChargeHistory