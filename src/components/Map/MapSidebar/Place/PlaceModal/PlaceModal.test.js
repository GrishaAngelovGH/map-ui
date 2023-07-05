import { render } from '@testing-library/react'

import PlaceModal from './PlaceModal'

test('should render PlaceModal component', () => {
  const view = render(
    <PlaceModal show={true} place={{ title: 'Place' }} />
  )

  expect(view).toMatchSnapshot()
})