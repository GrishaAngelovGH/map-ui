import L from 'leaflet'
import locationIcon from './location-pin.png'
import startFlagIcon from './start-flag.png'
import finishFlagIcon from './finish-flag.png'
import suvIcon from './suv.png'
import ldnUndergroundIcon from './ldn-underground.png'

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