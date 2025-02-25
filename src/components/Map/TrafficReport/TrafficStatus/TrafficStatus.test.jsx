import { render } from '@testing-library/react'

import TrafficStatus from './TrafficStatus'

test('should render low TrafficStatus component', () => {
  const view = render(<TrafficStatus status='low' />)

  expect(view).toMatchSnapshot()
})

test('should render normal TrafficStatus component', () => {
  const view = render(<TrafficStatus status='normal' />)

  expect(view).toMatchSnapshot()
})

test('should render high TrafficStatus component', () => {
  const view = render(<TrafficStatus status='high' />)

  expect(view).toMatchSnapshot()
})