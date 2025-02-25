import { render } from '@testing-library/react'

import StreetView from './StreetView'

test('should render StreetView component', () => {
  const view = render(<StreetView show={true} />)

  expect(view).toMatchSnapshot()
})