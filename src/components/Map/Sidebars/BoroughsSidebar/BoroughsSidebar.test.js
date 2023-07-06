import { render } from '@testing-library/react'

import BoroughsSidebar from './BoroughsSidebar'

test('should render BoroughsSidebar component', () => {
  const view = render(<BoroughsSidebar />)

  expect(view).toMatchSnapshot()
})