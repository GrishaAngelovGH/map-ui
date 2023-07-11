import { render } from '@testing-library/react'

import BatteryMeasure from './BatteryMeasure'

test('should render BatteryMeasure component with full battery charge', () => {
  const view = render(
    <BatteryMeasure
      measure={{
        location: { city: 'London', country: 'England, UK' },
        battery: 100
      }}
    />
  )

  expect(view).toMatchSnapshot()
})

test('should render BatteryMeasure component with lower battery charge', () => {
  const view = render(
    <BatteryMeasure
      measure={{
        location: { city: 'London', country: 'England, UK' },
        battery: 65
      }}
    />
  )

  expect(view).toMatchSnapshot()
})