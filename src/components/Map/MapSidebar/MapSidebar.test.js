import { render } from '@testing-library/react'

import MapSidebar from './MapSidebar'

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  }
}

test('should render MapSidebar component', () => {
  const view = render(<MapSidebar showSidebar />)

  expect(view).toMatchSnapshot()
})