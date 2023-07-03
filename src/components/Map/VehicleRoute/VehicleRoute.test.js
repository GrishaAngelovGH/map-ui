import { render } from '@testing-library/react'

import VehicleRoute from './VehicleRoute'

jest.mock('react-leaflet', () => ({
  useMap: () => ({ fitBounds: () => { } }),
  Polyline: () => <div>Polyline</div>,
  Marker: () => <div>Marker</div>,
}))

test('should render VehicleRoute component', () => {
  const view = render(
    <VehicleRoute />
  )

  expect(view).toMatchSnapshot()
})