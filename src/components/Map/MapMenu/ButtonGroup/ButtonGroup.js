import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ldnUndergroundIcon from 'images/map/map-menu/button-group/ldn-underground.png'
import mapIcon from 'images/map/map-menu//button-group/map.png'
import chargingStationIcon from 'images/map/map-menu//button-group/charging-station.png'

const ButtonGroupWrapper = ({ onShowUndergroundLocations, onShowBoroughs, onShowEVStations }) => (
  <ButtonGroup>
    <Button variant='outline-success' title='Underground Locations' onClick={onShowUndergroundLocations}>
      <Image src={ldnUndergroundIcon} width={40} />
    </Button>
    <Button variant='outline-success' title='London Boroughs' onClick={onShowBoroughs}>
      <Image src={mapIcon} width={40} />
    </Button>
    <Button variant='outline-success' title='EV Stations' onClick={onShowEVStations}>
      <Image src={chargingStationIcon} width={40} />
    </Button>
  </ButtonGroup>
)

export default ButtonGroupWrapper