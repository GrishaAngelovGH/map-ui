import { render } from '@testing-library/react'

import MapButton from './MapButton'

test('should render MapButton component', () => {
  const view = render(<MapButton icon='list' />)

  expect(view).toMatchSnapshot()
})