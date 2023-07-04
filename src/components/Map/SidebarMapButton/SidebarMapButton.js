import './SidebarMapButton.scss'

const SidebarMapButton = ({ onClick }) => (
  <div className='leaflet-right'>
    <div className='leaflet-control mt-2'>
      <button className='position-fixed top-50 start-0 sidebar-map-button' onClick={onClick}>
        <i className='bi bi-chevron-right'></i>
      </button>
    </div>
  </div>
)

export default SidebarMapButton