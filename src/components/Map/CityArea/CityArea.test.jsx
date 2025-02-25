import { render } from '@testing-library/react'
import { vi } from 'vitest'

import { MapContainer } from 'react-leaflet'
import CityArea from './CityArea'

vi.mock('react-leaflet', async () => {
  const originalModule = await vi.importActual('react-leaflet')

  return {
    __esModule: true,
    ...originalModule,
    // Named export mocks
    useMap: () => ({ setView: () => { } }),
    MapContainer: originalModule.MapContainer
  }
})

test('should render CityArea component', () => {
  const view = render(
    <MapContainer>
      <CityArea />
    </MapContainer>
  )

  expect(view).toMatchSnapshot()
})