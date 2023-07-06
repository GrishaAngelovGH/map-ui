import ButtonGroup from './ButtonGroup'

import './Footer.scss'

const Footer = ({ onShowUndergroundLocations }) => (
  <div className='row g-0 justify-content-center align-items-center bg-footer p-2'>
    <div className='col-2 col-md-2'>
      <ButtonGroup onShowUndergroundLocations={onShowUndergroundLocations} />
    </div>
  </div>
)

export default Footer