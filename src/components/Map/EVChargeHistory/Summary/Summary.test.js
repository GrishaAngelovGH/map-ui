import { render } from '@testing-library/react'

import Summary from './Summary'

test('should render EVChargeHistory/Summary component', () => {
  const view = render(<Summary />)

  expect(view).toMatchSnapshot()
})