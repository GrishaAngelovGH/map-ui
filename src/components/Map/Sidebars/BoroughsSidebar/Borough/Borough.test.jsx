import { render } from '@testing-library/react'

import Borough from './Borough'

test('should render Borough component marked as favorite', () => {
  const view = render(
    <Borough
      id={1}
      name='borough'
      code='123a'
      areaHectares={10}
      isFavorite={true}
    />
  )

  expect(view).toMatchSnapshot()
})

test('should render Borough component not marked as favorite', () => {
  const view = render(
    <Borough
      id={1}
      name='borough'
      code='123a'
      areaHectares={10}
      isFavorite={false}
    />
  )

  expect(view).toMatchSnapshot()
})