import { useContext } from 'react'
import { GeoJSON, useMap } from 'react-leaflet'
import LondonAreaContext from '../../../contexts/LondonAreaContext'

const onEachFeature = (feature, layer) => {
  if (feature.properties) {
    const { name } = feature.properties
    layer.bindPopup(`<div class="fw-bold text-center">${name}</div>`)
  }
}

const CityArea = () => {
  const map = useMap()
  map.setView([51.505, -0.09], 10)

  const londonArea = useContext(LondonAreaContext)

  return (
    <GeoJSON
      key='london-area'
      data={londonArea}
      style={{ color: 'orange' }}
      onEachFeature={onEachFeature}
    />
  )
}

export default CityArea