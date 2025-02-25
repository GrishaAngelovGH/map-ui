import { render } from '@testing-library/react'

import Summary from './Summary'

test('should render EVChargeHistory/Summary component', () => {
  const view = render(
    <Summary
      history={[
        { id: 1, location: { city: 'London', country: 'England, UK' }, battery: 100, charge: false, distanceInKm: 20, durationTimeInMin: 30 },
        { id: 2, location: { city: 'London', country: 'England, UK' }, battery: 90, charge: false, distanceInKm: 24, durationTimeInMin: 28 },
        { id: 3, location: { city: 'London', country: 'England, UK' }, currentBatteryCharge: 85, prevBatteryCharge: 70, durationTimeInMin: 35, charge: true, name: 'ChargePoint - 123 Road', address: 'A12 B34 London, UK' },
      ]}
    />
  )

  expect(view).toMatchSnapshot()
})