import ButtonGroup from '../ButtonGroup'

import './Header.scss'

const Header = ({ onShowMarkers, onShowRoute }) => (
  <div className='row g-0 bg-header justify-content-between align-items-center text-center p-1'>
    <div className='col-md-2'>
      <h1 className='text-white'>Map UI</h1>
    </div>
    <div className='col-md-3'>
      <ButtonGroup
        onShowMarkers={onShowMarkers}
        onShowRoute={onShowRoute}
      />
    </div>
  </div>
)

export default Header