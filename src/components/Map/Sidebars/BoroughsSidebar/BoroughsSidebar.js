import Sidebar from '../../../Sidebar'

const BoroughsSidebar = ({ showSidebar, onHide }) => {
  return (
    <Sidebar
      title='London Boroughs'
      body={<div>Body</div>}
      showSidebar={showSidebar}
      onHide={onHide}
    />
  )
}

export default BoroughsSidebar