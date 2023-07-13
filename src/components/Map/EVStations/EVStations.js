import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
import EVStation from './EVStation/EVStation'

import './EVStations.scss'

const EVStations = ({ show, onHide }) => {
  const evstations = [
    { id: 1, name: 'London EV Charging Station #1', location: 'A12 B34 London, UK', connector: 'Type 2 or CCS 2', distance: 1.8, time: 8 },
    { id: 2, name: 'London EV Charging Station #2', location: 'A12 B34 London, UK', connector: 'Type 2 or CCS 2', distance: 2.5, time: 15 },
    { id: 3, name: 'London EV Charging Station #3', location: 'A12 B34 London, UK', connector: 'Type 2 or CCS 2', distance: 5.4, time: 20 }
  ]

  return (
    <Modal show={show} onHide={onHide} backdrop={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className='bi bi-ev-station'></i>
          <span className='mx-2'>EV Stations Near You</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-primary bg-gradient d-flex justify-content-center align-items-center' style={{ height: 350 }}>
        <Carousel>
          {
            evstations.map(v => (
              <Carousel.Item key={v.id}>
                <EVStation
                  name={v.name}
                  location={v.location}
                  connector={v.connector}
                  distance={v.distance}
                  time={v.time}
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Modal.Body>
    </Modal>
  )
}

export default EVStations