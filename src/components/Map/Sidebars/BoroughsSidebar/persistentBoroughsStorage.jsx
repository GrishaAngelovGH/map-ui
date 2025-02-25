const persistentBoroughsStorage = {
  init: () => {
    const favoriteBoroughs = window.localStorage.getItem('boroughs')
    if (!favoriteBoroughs) window.localStorage.setItem('boroughs', '')
  },
  clearBoroughs: () => {
    window.localStorage.setItem('boroughs', '')
  },
  getFavoritesCount: () => {
    const favoriteBoroughs = window.localStorage.getItem('boroughs')
    return favoriteBoroughs.split(',').length - 1
  },
  isFavorite: name => {
    return window.localStorage.getItem('boroughs').includes(name)
  },
  addToFavorites: name => {
    const favoriteBoroughs = window.localStorage.getItem('boroughs')

    if (!favoriteBoroughs.includes(name)) {
      window.localStorage.setItem('boroughs', `${favoriteBoroughs}${name},`)
    }
  },
  removeFromFavorites: name => {
    const favoriteBoroughs = window.localStorage.getItem('boroughs').split(',')
    const newFavoriteBoroughs = favoriteBoroughs.filter(v => v !== name)
    window.localStorage.setItem('boroughs', newFavoriteBoroughs)
  }
}

export default persistentBoroughsStorage