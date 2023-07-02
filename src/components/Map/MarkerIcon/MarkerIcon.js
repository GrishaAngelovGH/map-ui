import L from 'leaflet'
import lefletIcon from 'leaflet/dist/images/marker-icon-2x.png'

const MarkerIcon = new L.Icon({
  iconUrl: lefletIcon,
  popupAnchor: [-0, -0],
  iconSize: [32, 50],
})

export default MarkerIcon