import { Fragment } from 'react'

import L from 'leaflet'
import { Marker, Polyline, useMap } from 'react-leaflet'
import MarkerIcon from '../MarkerIcon'

const polyline = [
  [51.50917249679021, -0.12439680208002753],
  [51.51045456127713, -0.12160730480114733],
  [51.51108222550184, -0.11978340271756788],
  [51.51191687202163, -0.11902165540212936],
  [51.51294513550582, -0.11803460254261373],
  [51.51329038279241, -0.11633525726622364],
  [51.51303665952414, -0.11490832218710867],
  [51.513497366524774, -0.1131166066178557],
  [51.513864593410354, -0.11092792392206086]
]

const limeOptions = { color: 'lime', weight: 10 }

const VehicleRoute = () => {
  const map = useMap()
  map.fitBounds(L.polyline(polyline).getBounds())

  return (
    <Fragment>
      <Polyline pathOptions={limeOptions} positions={polyline} />
      {
        polyline.map((v, i) => (
          <Marker key={i} position={v} icon={MarkerIcon} />
        ))
      }
    </Fragment>
  )
}

export default VehicleRoute