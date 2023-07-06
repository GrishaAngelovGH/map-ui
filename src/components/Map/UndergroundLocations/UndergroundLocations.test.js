import { render } from '@testing-library/react'

import { MapContainer } from 'react-leaflet'
import UndergroundLocations from './UndergroundLocations'

test('should render UndergroundLocations component', () => {
  const view = render(
    <MapContainer>
      <UndergroundLocations />
    </MapContainer>
  )

  expect(view).toMatchSnapshot()
})