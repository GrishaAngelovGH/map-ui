import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import MarkerIcon from './MarkerIcon'
import Popup from './Popup'

import 'leaflet/dist/leaflet.css'
import './Map.scss'

import locations from './locations'

const map = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const Map = ({ showMarkers }) => (
  <MapContainer center={[map.lat, map.lng]} zoom={map.zoom} className='react-leaflet-map'>
    <TileLayer url={map.url} />
    {
      showMarkers && locations.map((location, i) => (
        <Marker key={i} position={location} icon={MarkerIcon}>
          <Popup />
        </Marker>
      ))
    }
  </MapContainer>
)

export default Map