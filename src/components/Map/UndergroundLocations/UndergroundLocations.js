import { Marker, Tooltip } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import MarkerIcon from 'components/Map/MarkerIcon'
import ldnUnderground from './london-underground.json'

const UndergroundLocations = () => (
  <MarkerClusterGroup chunkedLoading maxClusterRadius={50} showCoverageOnHover={false}>
    {
      ldnUnderground.features.map((v, i) => {
        const [lng, lat] = v.geometry.coordinates
        return (
          <Marker key={i} position={[lat, lng]} icon={MarkerIcon('ldnUnderground')}>
            <Tooltip direction='bottom' offset={[0, 25]} opacity={1} permanent>
              <span className='fw-bold'>{v.properties.name}</span>
            </Tooltip>
          </Marker>
        )
      })
    }
  </MarkerClusterGroup>
)

export default UndergroundLocations