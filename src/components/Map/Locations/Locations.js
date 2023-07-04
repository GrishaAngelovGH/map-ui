import { Marker, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import MarkerIcon from '../MarkerIcon'
import Popup from '../Popup'

const locations = [
  [51.525, -0.09],
  [51.520, -0.03],
  [51.522, -0.05],
  [51.515, -0.12],
  [51.515, -0.15],
  [51.505, -0.12],
  [51.495, -0.10],
  [51.495, -0.17],
  [51.495, -0.05],
  [51.495, -0.07],
]

const Locations = () => {
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