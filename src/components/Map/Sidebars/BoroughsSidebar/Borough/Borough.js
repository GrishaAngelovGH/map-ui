const Borough = ({ id, active, name, code, areaHectares, coordinates, onClick }) => {
  const handleClick = () => {
    const coords = coordinates.map(([lng, lat]) => [lat, lng])

    onClick(id, coords)
  }

  return (
    <div className={`row mb-3 ${active ? 'border border-1 border-primary' : 'border'} rounded bg-light p-2`}>
      <div className='col-md-12'>
        <h5 className='fw-bold'>#{id.toString().padStart(2, '0')} {name}</h5>
        <h5>Code: {code}</h5>
        <h5>Area Hectares: {areaHectares}</h5>
        <button className='btn btn-primary w-100' onClick={handleClick}>View on Map</button>
      </div>
    </div>
  )
}

export default Borough