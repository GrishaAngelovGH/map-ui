import { render } from '@testing-library/react'

import EVStation from './EVStation'

test('should render EVStation component', () => {
  const view = render(
    <EVStation
      name='Station #1'
      location='Location 1'
      connector='Type 2'
      distance={1.5}
      time={0.8}
    />
  )

  expect(view).toMatchSnapshot()
})