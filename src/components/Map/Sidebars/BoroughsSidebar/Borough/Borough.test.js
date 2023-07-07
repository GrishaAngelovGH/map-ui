import { render } from '@testing-library/react'

import Borough from './Borough'

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    }
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

test('should render Borough component marked as favorite', () => {
  window.localStorage.setItem('boroughs', 'borough')

  const view = render(
    <Borough
      id={1}
      name='borough'
      code='123a'
      areaHectares={10}
    />
  )

  expect(view).toMatchSnapshot()
})

test('should render Borough component not marked as favorite', () => {
  window.localStorage.setItem('boroughs', '')

  const view = render(
    <Borough
      id={1}
      name='borough'
      code='123a'
      areaHectares={10}
    />
  )

  expect(view).toMatchSnapshot()
})