import Sidebar from '../../Sidebar'

const MapSidebar = ({ showSidebar, onHide }) => {
  return (
    <Sidebar
      title='Title'
      body={<div>Body</div>}
      showSidebar={showSidebar}
      onHide={onHide}
    />
  )
}

export default MapSidebar