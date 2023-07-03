import { useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import MapButton from './MapButton'
import MarkerIcon from './MarkerIcon'
import Popup from './Popup'
import TrafficReport from './TrafficReport'
import VehicleRoute from './VehicleRoute'

import 'leaflet/dist/leaflet.css'
import './Map.scss'

import locations from './locations'

const map = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const Map = ({ showMarkers, showRoute }) => {
  const [showTrafficReport, setTrafficReport] = useState(false)

  const handleShowTrafficReport = () => {
    setTrafficReport(!showTrafficReport)
  }

  return (
    <MapContainer center={[map.lat, map.lng]} zoom={map.zoom} className='react-leaflet-map'>
      <TileLayer url={map.url} />

      <MapButton
        icon='layout-text-sidebar-reverse'
        title='Traffic Report'
        onClick={handleShowTrafficReport}
      />

      {
        showMarkers && locations.map((location, i) => (
          <Marker key={i} position={location} icon={MarkerIcon}>
            <Popup />
          </Marker>
        ))
      }

      {
        showTrafficReport && (
          <TrafficReport
            show={showTrafficReport}
            onHide={handleShowTrafficReport}
          />
        )
      }

      {showRoute && <VehicleRoute />}
    </MapContainer>
  )
}

export default Map