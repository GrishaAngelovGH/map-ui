import { render } from '@testing-library/react'

import { MapContainer } from 'react-leaflet'
import VehicleRoute from './VehicleRoute'

jest.mock('react-leaflet', () => {
  const originalModule = jest.requireActual('react-leaflet')

  return {
    __esModule: true,
    ...originalModule,
    // Named export mocks
    Polyline: jest.fn()
  }
})

test('should render VehicleRoute component', () => {
  const view = render(
    <MapContainer minZoom={10} maxZoom={16}>
      <VehicleRoute />
    </MapContainer>
  )

  expect(view).toMatchSnapshot()
})