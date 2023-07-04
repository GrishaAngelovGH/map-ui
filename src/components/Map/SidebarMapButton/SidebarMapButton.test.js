import { render } from '@testing-library/react'

import SidebarMapButton from './SidebarMapButton'

test('should render SidebarMapButton component', () => {
  const view = render(<SidebarMapButton />)

  expect(view).toMatchSnapshot()
})