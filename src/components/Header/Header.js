import ButtonGroup from '../ButtonGroup'

import './Header.scss'

const Header = ({ onShowLocations, onShowRoute }) => (
  <div className='row g-0 bg-header justify-content-between align-items-center text-center p-1'>
    <div className='col-md-2'>
      <h1 className='text-white'>Map UI</h1>
    </div>
    <div className='col col-md-4 col-lg-3'>
      <ButtonGroup
        onShowLocations={onShowLocations}
        onShowRoute={onShowRoute}
      />
    </div>
  </div>
)

export default Header