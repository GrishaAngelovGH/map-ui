import { render } from '@testing-library/react'

import SearchInput from './SearchInput'

test('should render SearchInput component', () => {
  const view = render(<SearchInput placeholder='Search' />)

  expect(view).toMatchSnapshot()
})