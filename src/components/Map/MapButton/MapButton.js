const MapButton = ({ icon, title, onClick }) => (
  <div className='leaflet-right'>
    <div className='leaflet-control leaflet-bar'>
      <button className='btn btn-light' onClick={onClick} title={title}>
        <i className={`bi bi-${icon}`}></i>
      </button>
    </div>
  </div>
)

export default MapButton