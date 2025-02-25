import { render } from '@testing-library/react'
import { vi } from 'vitest'

import StreetView from './StreetView'

vi.mock('mapillary-js', () => {
  return {
    Viewer: vi.fn().mockImplementation(() => ({
      remove: vi.fn()
    }))
  }
})

test('should render StreetView component', () => {
  const view = render(<StreetView show={true} />)

  expect(view).toMatchSnapshot()
})