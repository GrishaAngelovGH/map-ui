import { render } from '@testing-library/react'

import PlacesSidebar from './PlacesSidebar'

test('should render PlacesSidebar component', () => {
  const view = render(<PlacesSidebar showSidebar />)

  expect(view).toMatchSnapshot()
})