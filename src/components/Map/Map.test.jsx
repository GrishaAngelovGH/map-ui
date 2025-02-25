import { render } from '@testing-library/react'

import Map from './Map'

test('should render Map component', () => {
  const view = render(<Map />)

  expect(view).toMatchSnapshot()
})