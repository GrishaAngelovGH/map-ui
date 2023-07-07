import { useEffect, useState } from 'react'

const Borough = ({ id, active, name, code, areaHectares, coordinates, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleViewOnMapClick = () => {
    const coords = coordinates.map(([lng, lat]) => [lat, lng])

    onClick(id, coords)
  }

  const handleAddToFavoritesClick = () => {
    const favoriteBoroughs = window.localStorage.getItem('boroughs')

    if (!favoriteBoroughs.includes(name)) {
      window.localStorage.setItem('boroughs', `${favoriteBoroughs}${name},`)
    }

    setIsFavorite(true)
  }

  const handleRemoveFromFavoritesClick = () => {
    const favoriteBoroughs = window.localStorage.getItem('boroughs').split(',')
    const newFavoriteBoroughs = favoriteBoroughs.filter(v => v !== name)
    window.localStorage.setItem('boroughs', newFavoriteBoroughs)
    setIsFavorite(false)
  }

  useEffect(() => {
    const favoriteBoroughs = window.localStorage.getItem('boroughs')

    if (favoriteBoroughs.includes(name)) {
      setIsFavorite(true)
    }
  }, [])

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