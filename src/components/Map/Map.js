import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import Locations from './Locations'
import MapButton from './MapButton'
import TrafficReport from './TrafficReport'
import VehicleRoute from './VehicleRoute'

import 'leaflet/dist/leaflet.css'
import './Map.scss'

const map = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const Map = ({ showLocations, showRoute }) => {
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
        showLocations && <Locations />
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