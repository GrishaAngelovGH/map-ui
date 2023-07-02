import ButtonGroup from '../ButtonGroup'

import './Header.scss'

const Header = ({ onShowMarkers }) => (
  <div className='row g-0 bg-header justify-content-center text-center p-3'>
    <div className='col-md-6'>
      <h1 className='text-white'>Map UI</h1>
      <ButtonGroup onShowMarkers={onShowMarkers} />
    </div>
  </div>
)

export default Header