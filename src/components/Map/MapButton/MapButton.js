const MapButton = ({ icon, onClick }) => (
  <div className='leaflet-right'>
    <div className='leaflet-control leaflet-bar'>
      <button className='btn btn-light' onClick={onClick}>
        <i className={`bi bi-${icon}`}></i>
      </button>
    </div>
  </div>
)

export default MapButton