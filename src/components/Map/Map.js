import { useContext, useRef, useState } from 'react'
import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet'

import LocationsContext from '../../LocationsContext'
import Locations from './Locations'
import MapButton from './MapButton'
import MapSidebar from './MapSidebar'
import MarkerIcon from './MarkerIcon'
import SidebarMapButton from './SidebarMapButton'
import TrafficReport from './TrafficReport'
import VehicleRoute from './VehicleRoute'

import 'leaflet/dist/leaflet.css'
import './Map.scss'

const map = {
  lat: 51.505,
  lng: -0.09,
  zoom: {
    default: 13,
    min: 10,
    max: 16
  },
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const Map = ({ showLocations, showRoute, resetControls }) => {
  const [showTrafficReport, setTrafficReport] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  const featureGroupRef = useRef()
  const motionRef = useRef()

  const locations = useContext(LocationsContext)

  const handleShowTrafficReport = () => {
    setTrafficReport(!showTrafficReport)
  }

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const handlePlayRoute = () => {
    if (motionRef.current) {
      featureGroupRef.current._map.removeLayer(motionRef.current)
    }

    featureGroupRef.current._map.fitBounds(L.polyline(locations).getBounds())

    motionRef.current = L.motion.polyline(locations, {
      color: 'lime',
      weight: 10
    }, {
      auto: true,
      duration: 15000,
      speed: 5,
      easing: L.Motion.Ease.linear
    }, {
      removeOnEnd: false,
      showMarker: true,
      icon: MarkerIcon('suv')
    }).addTo(featureGroupRef.current._map)
  }

  const handleClearMap = () => {
    resetControls()
    featureGroupRef.current.clearLayers()
    featureGroupRef.current._map.setZoom(map.zoom.default)
    motionRef.current && featureGroupRef.current._map.removeLayer(motionRef.current)
  }

  const mapButtons = [
    { icon: 'layout-text-sidebar-reverse', title: 'Traffic Report', onClick: handleShowTrafficReport },
    { icon: 'play-circle', title: 'Play Route', onClick: handlePlayRoute },
    { icon: 'backspace', title: 'Clear Map', onClick: handleClearMap }
  ]

  return (
    <MapContainer
      center={[map.lat, map.lng]}
      zoom={map.zoom.default}
      minZoom={map.zoom.min}
      maxZoom={map.zoom.max}
      className='react-leaflet-map'
    >
      <TileLayer url={map.url} />

      {
        mapButtons.map((v, i) => (
          <MapButton
            key={i}
            icon={v.icon}
            title={v.title}
            onClick={v.onClick}
          />
        ))
      }

      <SidebarMapButton onClick={handleShowSidebar} />

      {
        showSidebar && (
          <MapSidebar
            showSidebar={showSidebar}
            onHide={handleShowSidebar}
          />
        )
      }

      <FeatureGroup ref={featureGroupRef}>
        {showLocations && <Locations />}

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