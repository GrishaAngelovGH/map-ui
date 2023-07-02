import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ButtonGroupWrapper = ({ onShowMarkersClick }) => (
  <ButtonGroup>
    <Button variant='success' onClick={onShowMarkersClick}>Show Markers</Button>
  </ButtonGroup>
)

export default ButtonGroupWrapper