import { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import MapillaryViewer from 'components/Map/MapillaryViewer'

const StreetView = ({ show, onHide }) => {
  const [fullscreen, setFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen)
  }

  return (
    <Modal show={show} onHide={onHide} size='lg' fullscreen={fullscreen}>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className='bi bi-compass'></i>
          <span className='mx-2'>Street View</span>
          {
            fullscreen ?
              <i role='button' className='bi bi-fullscreen-exit mx-2' onClick={toggleFullscreen}></i> :
              <i role='button' className='bi bi-arrows-fullscreen mx-2' onClick={toggleFullscreen}></i>
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MapillaryViewer fullscreen={fullscreen} />
      </Modal.Body>
    </Modal>
  )
}

export default StreetView