import { render } from '@testing-library/react'

import Place from './Place'

test('should render open Place component', () => {
  const view = render(<Place title='Place' open={true} />)

  expect(view).toMatchSnapshot()
})

test('should render closed Place component', () => {
  const view = render(<Place title='Place' open={false} />)

  expect(view).toMatchSnapshot()
})