import { useEffect, useState } from 'react'

const useSearch = (searchCriteria, items, path) => {
  const [foundItems, setFoundItems] = useState([])

  useEffect(() => {
    const parts = path.split('.')

    const filteredItems = items.filter(v => {
      const value = parts.reduce((obj, part) => obj[part], v)
      return value.toString().toLowerCase().includes(searchCriteria.trim().toLowerCase())
    })

    setFoundItems(filteredItems)
  }, [searchCriteria])

  return [foundItems, foundItems.length]
}

export default useSearch