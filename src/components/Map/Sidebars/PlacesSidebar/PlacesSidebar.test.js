import { render } from '@testing-library/react'

import PlacesSidebar from './PlacesSidebar'

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  }
}

test('should render PlacesSidebar component', () => {
  const view = render(<PlacesSidebar showSidebar />)

  expect(view).toMatchSnapshot()
})