import { render } from '@testing-library/react'

import ButtonGroup from './ButtonGroup'

test('should render ButtonGroup component', () => {
  const view = render(<ButtonGroup />)

  expect(view).toMatchSnapshot()
})