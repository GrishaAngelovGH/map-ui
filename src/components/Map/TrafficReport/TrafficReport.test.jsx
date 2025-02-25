import { render } from '@testing-library/react'

import TrafficReport from './TrafficReport'

test('should render TrafficReport component', () => {
  const view = render(<TrafficReport show />)

  expect(view).toMatchSnapshot()
})