import L from 'leaflet'
import locationIcon from './location-pin.png'

const MarkerIcon = new L.Icon({
  iconUrl: locationIcon,
  popupAnchor: [-0, -0],
  iconSize: [50, 50],
})

export default MarkerIcon