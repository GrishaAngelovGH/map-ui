import Image from 'react-bootstrap/Image'

import { Popup } from 'react-leaflet'
import './Popup.scss'

import londonImg from './london.jpg'

const CoordinatesRow = () => (
  <div className='row text-center'>
    <div className='col-md-6'>
      <p className='fw-bold m-0'>Latitude: 51.325</p>
    </div>
    <div className='col-md-6'>
      <p className='fw-bold m-0'>Longitude: 32.325</p>
    </div>
  </div>
)

const AddressRow = () => (
  <div className='row mt-3'>
    <div className='col-md-12'>
      <i className='bi bi-geo-alt-fill mx-2'></i>
      <span className='m-0'>40 New Street London W38 5EZ</span>
    </div>
  </div>
)

const PhoneRow = () => (
  <div className='row mt-3'>
    <div className='col-md-12'>
      <i className='bi bi-telephone-fill mx-2'></i>
      <span className='m-0'>+44 (0) 20 7234 3456</span>
    </div>
  </div>
)

const PopupWrapper = () => (
  <Popup>
    <CoordinatesRow />
    <AddressRow />
    <PhoneRow />
    <Image src={londonImg} rounded thumbnail className='mt-1' />
  </Popup>
)

export default PopupWrapper