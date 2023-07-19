import { useContext, useRef, useState } from 'react'
import { FeatureGroup, MapContainer, Polygon, TileLayer } from 'react-leaflet'

import LocationsContext from 'contexts/LocationsContext'
import CityArea from './CityArea'
import EVChargeHistory from './EVChargeHistory'
import EVStations from './EVStations'
import Locations from './Locations'
import MapButton from './MapButton'
import MapMenu from './MapMenu'
import SidebarMapButton from './SidebarMapButton'
import BoroughsSidebar from './Sidebars/BoroughsSidebar'
import PlacesSidebar from './Sidebars/PlacesSidebar'
import TrafficReport from './TrafficReport'
import UndergroundLocations from './UndergroundLocations'
import VehicleRoute from './VehicleRoute'
import StreetView from './StreetView'

import 'leaflet/dist/leaflet.css'
import './Map.scss'

import { map, motionPolylineConf } from './mapConfig'

const Map = ({ showLocations, showRoute, resetControls }) => {
  const [showTrafficReport, setTrafficReport] = useState(false)
  const [showCityArea, setShowCityArea] = useState(false)
  const [showPlacesSidebar, setShowPlacesSidebar] = useState(false)
  const [showBoroughsSidebar, setShowBoroughsSidebar] = useState(false)
  const [showUndergroundLocations, setShowUndergroundLocations] = useState(false)
  const [showEVChargeHistory, setShowEVChargeHistory] = useState(false)
  const [showEVStations, setShowEVStations] = useState(false)
  const [showStreetView, setShowStreetView] = useState(false)
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

  const handleShowEVChargeHistory = () => {
    setShowEVChargeHistory(!showEVChargeHistory)
  }

  const handleShowEVStations = () => {
    setShowEVStations(!showEVStations)
  }

  const handleShowStreetView = () => {
    setShowStreetView(!showStreetView)
  }

  const handlePlayRoute = () => {
    if (motionRef.current) {
      featureGroupRef.current._map.removeLayer(motionRef.current)
    }

    featureGroupRef.current._map.fitBounds(L.polyline(locations).getBounds())

    motionRef.current = motionPolylineConf(locations).addTo(featureGroupRef.current._map)
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
    { icon: 'ev-station', title: 'EV Charge History', onClick: handleShowEVChargeHistory },
    { icon: 'backspace', title: 'Clear Map', onClick: handleClearMap }
  ]

  const sidebars = [
    {
      id: 'sidebar-1',
      show: showPlacesSidebar,
      component: PlacesSidebar,
      props: {
        showSidebar: showPlacesSidebar,
        onHide: handleShowPlacesSidebar
      }
    },
    {
      id: 'sidebar-2',
      show: showBoroughsSidebar,
      component: BoroughsSidebar,
      props: {
        showSidebar: showBoroughsSidebar,
        onHide: handleShowBoroughsSidebar,
        onBoroughClick: handleBoroughClick
      }
    }
  ]

  const toggles = [
    {
      show: showLocations,
      component: Locations,
      props: {}
    },
    {
      show: showTrafficReport,
      component: TrafficReport,
      props: {
        show: showTrafficReport,
        onHide: handleShowTrafficReport
      }
    },
    {
      show: showRoute,
      component: VehicleRoute,
      props: {}
    },
    {
      show: showCityArea,
      component: CityArea,
      props: {}
    },
    {
      show: showUndergroundLocations,
      component: UndergroundLocations,
      props: {}
    },
    {
      show: showEVChargeHistory,
      component: EVChargeHistory,
      props: {
        show: showEVChargeHistory,
        onHide: setShowEVChargeHistory
      }
    },
    {
      show: showEVStations,
      component: EVStations,
      props: {
        show: showEVStations,
        onHide: handleShowEVStations
      }
    },
    {
      show: showStreetView,
      component: StreetView,
      props: {
        show: showStreetView,
        onHide: handleShowStreetView
      }
    }
  ]

  return (
    <MapContainer
      center={[map.lat, map.lng]}
      zoom={map.zoom.default}
      minZoom={map.zoom.min}
      maxZoom={map.zoom.max}
      doubleClickZoom={false}
      className='react-leaflet-map'
    >
      <TileLayer url={map.url} />

      <MapMenu
        onShowUndergroundLocations={handleShowUndergroundLocations}
        onShowBoroughs={handleShowBoroughsSidebar}
        onShowEVStations={handleShowEVStations}
        onShowStreetView={handleShowStreetView}
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
        sidebars.map(v => {
          const { id, show, component: Component, props } = v

          return show ? <Component key={id} {...props} /> : null
        })
      }

      <FeatureGroup ref={featureGroupRef}>
        {
          toggles.map((v, i) => {
            const { show, component: Component, props } = v

            return show ? <Component key={i} {...props} /> : null
          })
        }

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