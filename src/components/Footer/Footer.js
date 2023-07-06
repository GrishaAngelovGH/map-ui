import ButtonGroup from './ButtonGroup'

import './Footer.scss'

const Footer = ({ onShowUndergroundLocations }) => (
  <div className='row g-0 justify-content-center align-items-center'>
    <div className='col-10 col-md-4 bg-footer rounded border border-2 shadow p-2 d-flex justify-content-center'>
      <ButtonGroup onShowUndergroundLocations={onShowUndergroundLocations} />
    </div>
  </div>
)

export default Footer