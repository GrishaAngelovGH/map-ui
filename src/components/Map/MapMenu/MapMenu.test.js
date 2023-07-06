import { render } from '@testing-library/react'

import MapMenu from './MapMenu'

test('should render MapMenu component', () => {
  const view = render(<MapMenu />)

  expect(view).toMatchSnapshot()
})