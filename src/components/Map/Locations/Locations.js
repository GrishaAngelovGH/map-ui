import { useContext } from 'react'

import { Marker, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

import LocationsContext from '../../../contexts/LocationsContext'
import MarkerIcon from '../MarkerIcon'
import Popup from '../Popup'

const Locations = () => {
  const locations = useContext(LocationsContext)
  const map = useMap()
  map.fitBounds(L.polyline(locations).getBounds())

  return (
    <MarkerClusterGroup chunkedLoading maxClusterRadius={90} showCoverageOnHover={false}>
      {
        locations.map((location, i) => (
          <Marker key={i} position={location} icon={MarkerIcon('location')}>
            <Popup />
          </Marker>
        ))
      }
    </MarkerClusterGroup>
  )
}

export default Locations