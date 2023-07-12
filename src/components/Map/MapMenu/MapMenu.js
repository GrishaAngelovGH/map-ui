import ButtonGroup from './ButtonGroup'

import './MapMenu.scss'

const MapMenu = ({ onShowUndergroundLocations, onShowBoroughs, onShowEVStations }) => (
  <div className='row g-0 justify-content-center align-items-center'>
    <div className='col-10 col-md-4 bg-map-menu rounded border border-2 shadow p-2 d-flex justify-content-center'>
      <ButtonGroup
        onShowUndergroundLocations={onShowUndergroundLocations}
        onShowBoroughs={onShowBoroughs}
        onShowEVStations={onShowEVStations}
      />
    </div>
  </div>
)

export default MapMenu