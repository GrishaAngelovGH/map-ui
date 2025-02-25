import { render } from '@testing-library/react'

import Sidebar from './Sidebar'

test('should render Sidebar component', () => {
  const view = render(
    <Sidebar
      title='Title'
      body={<div>Content</div>}
      showSidebar
    />
  )

  expect(view).toMatchSnapshot()
})