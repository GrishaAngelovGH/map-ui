import { render } from '@testing-library/react'

import Layout from './Layout'

test('should render Layout component', () => {
  const view = render(
    <Layout
      header={<h1>Header</h1>}
      footer={<h1>Footer</h1>}
    >
      <h1>Body</h1>
    </Layout>
  )

  expect(view).toMatchSnapshot()
})

test('should render Layout.Header component', () => {
  const view = render(
    <Layout.Header>
      <h1>Header</h1>
    </Layout.Header>
  )

  expect(view).toMatchSnapshot()
})

test('should render Layout.Body component', () => {
  const view = render(
    <Layout.Body>
      <h1>Body</h1>
    </Layout.Body>
  )

  expect(view).toMatchSnapshot()
})

test('should render Layout.Footer component', () => {
  const view = render(
    <Layout.Footer>
      <h1>Footer</h1>
    </Layout.Footer>
  )

  expect(view).toMatchSnapshot()
})