import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './Map.scss'

const map = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const Map = () => (
  <MapContainer center={[map.lat, map.lng]} zoom={map.zoom} className='react-leaflet-map'>
    <TileLayer url={map.url} />
  </MapContainer>
)

export default Map