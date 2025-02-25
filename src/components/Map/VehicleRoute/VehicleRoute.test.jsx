import { render } from '@testing-library/react'
import { vi } from 'vitest'

import { MapContainer } from 'react-leaflet'
import VehicleRoute from './VehicleRoute'

vi.mock('react-leaflet', async () => {
  const originalModule = await vi.importActual('react-leaflet')

  return {
    __esModule: true,
    ...originalModule,
    // Named export mocks
    Polyline: vi.fn(),
    MapContainer: originalModule.MapContainer
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