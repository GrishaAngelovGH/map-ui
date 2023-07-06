import { useContext, useRef, useState } from 'react'
import { FeatureGroup, MapContainer, Polygon, TileLayer } from 'react-leaflet'

import LocationsContext from '../../contexts/LocationsContext'
import CityArea from './CityArea'
import Locations from './Locations'
import MapButton from './MapButton'
import MapMenu from './MapMenu'
import MarkerIcon from './MarkerIcon'
import SidebarMapButton from './SidebarMapButton'
import BoroughsSidebar from './Sidebars/BoroughsSidebar'
import PlacesSidebar from './Sidebars/PlacesSidebar'
import TrafficReport from './TrafficReport'
import UndergroundLocations from './UndergroundLocations'
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
  const [showCityArea, setShowCityArea] = useState(false)
  const [showPlacesSidebar, setShowPlacesSidebar] = useState(false)
  const [showBoroughsSidebar, setShowBoroughsSidebar] = useState(false)
  const [showUndergroundLocations, setShowUndergroundLocations] = useState(false)
  const [boroughCoordinates, setBoroughCoordinates] = useState([])

  const featureGroupRef = useRef()
  const motionRef = useRef()

  const locations = useContext(LocationsContext)

  const handleShowTrafficReport = () => {
    setTrafficReport(!showTrafficReport)
  }

  const handleShowPlacesSidebar = () => {
    setShowPlacesSidebar(!showPlacesSidebar)
  }

  const handleShowBoroughsSidebar = () => {
    handleClearMap()
    setShowBoroughsSidebar(!showBoroughsSidebar)
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

  const handleShowCityArea = () => {
    setShowCityArea(!showCityArea)
  }

  const handleShowUndergroundLocations = () => {
    setShowUndergroundLocations(!showUndergroundLocations)
  }

  const handleBoroughClick = coords => {
    setBoroughCoordinates(coords)
    featureGroupRef.current._map.fitBounds(L.polyline(coords).getBounds())
  }

  const handleClearMap = () => {
    resetControls()
    setShowCityArea(false)
    setShowUndergroundLocations(false)
    setBoroughCoordinates([])
    featureGroupRef.current.clearLayers()
    featureGroupRef.current._map.setZoom(map.zoom.default)
    motionRef.current && featureGroupRef.current._map.removeLayer(motionRef.current)
  }

  const mapButtons = [
    { icon: 'layout-text-sidebar-reverse', title: 'Traffic Report', onClick: handleShowTrafficReport },
    { icon: 'play-circle', title: 'Play Route', onClick: handlePlayRoute },
    { icon: 'hexagon', title: 'City Area', onClick: handleShowCityArea },
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

      <MapMenu
        onShowUndergroundLocations={handleShowUndergroundLocations}
        onShowBoroughs={handleShowBoroughsSidebar}
      />

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

      <SidebarMapButton onClick={handleShowPlacesSidebar} />

      {
        showPlacesSidebar && (
          <PlacesSidebar
            showSidebar={showPlacesSidebar}
            onHide={handleShowPlacesSidebar}
          />
        )
      }

      {
        showBoroughsSidebar && (
          <BoroughsSidebar
            showSidebar={showBoroughsSidebar}
            onHide={handleShowBoroughsSidebar}
            onBoroughClick={handleBoroughClick}
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

        {showCityArea && <CityArea />}

        {showUndergroundLocations && <UndergroundLocations />}

        {
          boroughCoordinates.length > 0 && (
            <Polygon pathOptions={{ color: 'darkblue' }} positions={boroughCoordinates} />
          )
        }
      </FeatureGroup>
    </MapContainer>
  )
}

export default Map