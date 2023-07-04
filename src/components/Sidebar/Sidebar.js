import Offcanvas from 'react-bootstrap/Offcanvas'

const Sidebar = ({ title, body, showSidebar, onHide }) => (
  <Offcanvas show={showSidebar} onHide={onHide} backdrop={false}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>{title}</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>{body}</Offcanvas.Body>
  </Offcanvas>
)

export default Sidebar