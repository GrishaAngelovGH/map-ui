import { render } from '@testing-library/react'

import Borough from './Borough'

test('should render Borough component', () => {
  const view = render(
    <Borough
      id='1'
      name='borough'
      code='123a'
      areaHectares={10}
    />
  )

  expect(view).toMatchSnapshot()
})