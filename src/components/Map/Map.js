import { useState, useRef } from 'react'
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'

import Locations from './Locations'
import MapButton from './MapButton'
import TrafficReport from './TrafficReport'
import VehicleRoute from './VehicleRoute'

import 'leaflet/dist/leaflet.css'
import './Map.scss'

const map = {
  lat: 51.505,
  lng: -0.09,
  zoom: {
    default: 13,
    min: 12,
    max: 16
  },
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const Map = ({ showLocations, showRoute, resetControls }) => {
  const [showTrafficReport, setTrafficReport] = useState(false)
  const featureGroupRef = useRef()

  const handleShowTrafficReport = () => {
    setTrafficReport(!showTrafficReport)
  }

  const handleClearMap = () => {
    resetControls()
    featureGroupRef.current.clearLayers()
    featureGroupRef.current._map.setZoom(map.zoom.default)
  }

  return (
    <MapContainer
      center={[map.lat, map.lng]}
      zoom={map.zoom.default}
      minZoom={map.zoom.min}
      maxZoom={map.zoom.max}
      className='react-leaflet-map'
    >
      <TileLayer url={map.url} />

      <MapButton
        icon='layout-text-sidebar-reverse'
        title='Traffic Report'
        onClick={handleShowTrafficReport}
      />

      <MapButton
        icon='backspace'
        title='Clear Map'
        onClick={handleClearMap}
      />

      <FeatureGroup ref={featureGroupRef}>
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
      </FeatureGroup>
    </MapContainer>
  )
}

export default Map