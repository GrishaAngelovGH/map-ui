import { render } from '@testing-library/react'

import EVStations from './EVStations'

test('should render EVStations component', () => {
  const view = render(<EVStations />)

  expect(view).toMatchSnapshot()
})