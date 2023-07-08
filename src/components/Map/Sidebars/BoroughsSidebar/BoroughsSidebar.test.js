import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import BoroughsSidebar from './BoroughsSidebar'

const localStorageMock = (function () {
  let store = {}

  return {
    getItem(key) {
      return store[key]
    },

    setItem(key, value) {
      store[key] = value
    }
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

test('should render BoroughsSidebar component with all boroughs', () => {
  const view = render(<BoroughsSidebar showSidebar />)

  expect(view).toMatchSnapshot()
})

test('should render BoroughsSidebar component with favorite boroughs', async () => {
  localStorageMock.setItem('boroughs', 'Croydon,Westminster,')

  const view = render(<BoroughsSidebar showSidebar />)

  await waitFor(() => {
    const favoritesButton = screen.getByText('Favorites (2)')

    fireEvent.click(favoritesButton, { currentTarget: { value: 'favorites' } })
  })

  expect(view).toMatchSnapshot()
})