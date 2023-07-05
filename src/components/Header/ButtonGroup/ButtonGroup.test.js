import { render } from '@testing-library/react'

import ButtonGroup from './ButtonGroup'

test('should render Header/ButtonGroup component', () => {
  const view = render(<ButtonGroup />)

  expect(view).toMatchSnapshot()
})