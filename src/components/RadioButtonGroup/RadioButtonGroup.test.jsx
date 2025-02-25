import { render } from '@testing-library/react'

import RadioButtonGroup from './RadioButtonGroup'

test('should render RadioButtonGroup component', () => {
  const view = render(
    <RadioButtonGroup
      initialValue='1'
      radios={[
        { name: 'First', value: '1' },
        { name: 'Second', value: '2' },
        { name: 'Third', value: '3' },
      ]}
    />
  )

  expect(view).toMatchSnapshot()
})