import L from 'leaflet'
import locationIcon from 'images/map/marker-icons/location-pin.png'
import startFlagIcon from 'images/map/marker-icons/start-flag.png'
import finishFlagIcon from 'images/map/marker-icons/finish-flag.png'
import suvIcon from 'images/map/marker-icons/suv.png'
import ldnUndergroundIcon from 'images/map/marker-icons/ldn-underground.png'

const types = {
  location: locationIcon,
  startFlag: startFlagIcon,
  finishFlag: finishFlagIcon,
  suv: suvIcon,
  ldnUnderground: ldnUndergroundIcon
}

const MarkerIcon = type => new L.Icon({
  iconUrl: types[type],
  popupAnchor: [-0, -0],
  iconSize: [50, 50],
})

export default MarkerIcon