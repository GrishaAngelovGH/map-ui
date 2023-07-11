import { render } from '@testing-library/react'

import EVChargeHistory from './EVChargeHistory'

test('should render EVChargeHistory component', () => {
  const view = render(<EVChargeHistory show={true} />)

  expect(view).toMatchSnapshot()
})