import { render } from '@testing-library/react'

import { MapContainer } from 'react-leaflet'
import CityArea from './CityArea'

jest.mock('react-leaflet', () => {
  const originalModule = jest.requireActual('react-leaflet')

  return {
    __esModule: true,
    ...originalModule,
    // Named export mocks
    useMap: () => ({ setView: () => { } })
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