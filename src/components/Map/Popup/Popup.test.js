import { render } from '@testing-library/react'

import { MapContainer, Marker } from 'react-leaflet'
import Popup from './Popup'

test('should render Popup component', () => {
  const view = render(
    <MapContainer>
      <Marker>
        <Popup />
      </Marker>
    </MapContainer>
  )

  expect(view).toMatchSnapshot()
})