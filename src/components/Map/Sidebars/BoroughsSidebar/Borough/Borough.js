import persistentBoroughsStorage from 'components/Map/Sidebars/BoroughsSidebar/persistentBoroughsStorage'

const Borough = ({
  id, active, name, code, areaHectares, coordinates, isFavorite,
  onViewOnMapClick, onFavoriteChange
}) => {
  const handleViewOnMapClick = () => {
    const coords = coordinates.map(([lng, lat]) => [lat, lng])

    onViewOnMapClick(id, coords)
  }

  const handleAddToFavoritesClick = () => {
    persistentBoroughsStorage.addToFavorites(name)

    onFavoriteChange()
  }

  const handleRemoveFromFavoritesClick = () => {
    persistentBoroughsStorage.removeFromFavorites(name)
    onFavoriteChange()
  }

  return (
    <div className={`row mb-3 ${active ? 'border border-1 border-primary' : 'border'} rounded bg-light p-2`}>
      <div className='col-md-12'>
        <h5 className='fw-bold'>#{id.toString().padStart(2, '0')} {name}</h5>

        <h5>Code: {code}</h5>

        <h5>Area Hectares: {areaHectares}</h5>

        <button className='btn btn-primary w-100' onClick={handleViewOnMapClick}>View on Map</button>

        <button
          className={`btn  ${isFavorite ? 'btn-warning' : 'btn-outline-warning'} w-100 mt-2`}
          onClick={isFavorite ? handleRemoveFromFavoritesClick : handleAddToFavoritesClick}
        >
          {isFavorite ? 'Remove from Favorites' : 'Save as Favorite'}
        </button>
      </div>
    </div >
  )
}

export default Borough