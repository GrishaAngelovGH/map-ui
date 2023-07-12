import { render } from '@testing-library/react'

import ChargeDuration from './ChargeDuration'

test('should render ChargeDuration component', () => {
  const view = render(
    <ChargeDuration
      duration={{
        location: { city: 'London', country: 'England, UK' },
        currentBatteryCharge: 85,
        prevBatteryCharge: 70,
        durationTimeInMin: 35,
        charge: true,
        name: 'ChargePoint - 123 Road',
        location: 'A12 B34 London, UK'
      }}
    />
  )

  expect(view).toMatchSnapshot()
})