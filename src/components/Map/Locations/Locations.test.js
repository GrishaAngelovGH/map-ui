import { render } from '@testing-library/react'

import { MapContainer } from 'react-leaflet'
import Locations from './Locations'

test('should render Locations component', () => {
  const view = render(
    <MapContainer>
      <Locations />
    </MapContainer>
  )

  expect(view).toMatchSnapshot()
})