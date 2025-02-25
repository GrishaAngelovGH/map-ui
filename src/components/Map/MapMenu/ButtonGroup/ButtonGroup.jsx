import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import ldnUndergroundIcon from 'images/map/map-menu/button-group/ldn-underground.png'
import mapIcon from 'images/map/map-menu//button-group/map.png'
import chargingStationIcon from 'images/map/map-menu//button-group/charging-station.png'
import streetViewIcon from 'images/map/map-menu//button-group/street-view.png'

const ButtonGroupWrapper = ({ onShowUndergroundLocations, onShowBoroughs, onShowEVStations, onShowStreetView }) => {
  const buttons = [
    { title: 'Underground Locations', image: ldnUndergroundIcon, onClick: onShowUndergroundLocations },
    { title: 'London Boroughs', image: mapIcon, onClick: onShowBoroughs },
    { title: 'EV Stations', image: chargingStationIcon, onClick: onShowEVStations },
    { title: 'Street View', image: streetViewIcon, onClick: onShowStreetView },
  ]

  return (
    <ButtonGroup>
      {
        buttons.map((v, i) => (
          <Button key={i} variant='outline-success' title={v.title} onClick={v.onClick}>
            <Image src={v.image} width={40} />
          </Button>
        ))
      }
    </ButtonGroup>
  )
}

export default ButtonGroupWrapper