import L from 'leaflet'
import locationIcon from './location-pin.png'
import startFlagIcon from './start-flag.png'
import finishFlagIcon from './finish-flag.png'

const types = {
  location: locationIcon,
  startFlag: startFlagIcon,
  finishFlag: finishFlagIcon
}

const MarkerIcon = type => new L.Icon({
  iconUrl: types[type],
  popupAnchor: [-0, -0],
  iconSize: [50, 50],
})

export default MarkerIcon