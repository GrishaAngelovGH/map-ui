import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ldnUndergroundIcon from './ldn-underground.png'
import mapIcon from './map.png'
import chargingStationIcon from './charging-station.png'

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