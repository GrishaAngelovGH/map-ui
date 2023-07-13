import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import placeImg from 'images/map/sidebars/places-sidebar/place/place-modal/place.jpg'

const PlaceModal = ({ show, onHide, place }) => (
  <Modal show={show} backdrop={false} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>
        <span className='mx-2'>{place.title}</span>
        <span className='mx-2'>4.3 <i className='bi bi-star-fill text-warning'></i></span>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className='text-center'>
      <Image src={placeImg} rounded fluid />
      <p className='mt-3 fw-bold'>91 Knightsbridge, London SW1X 8ET</p>
      <p className='bg-primary text-white rounded p-3'>
        Contemporary European food, separate breakfast, afternoon tea, lunch
        and dinner menus.
      </p>
    </Modal.Body>
  </Modal>
)

export default PlaceModal