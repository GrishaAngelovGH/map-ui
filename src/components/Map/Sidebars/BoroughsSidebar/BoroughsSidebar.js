import { useContext } from 'react'
import LondonAreaContext from '../../../../contexts/LondonAreaContext'
import Sidebar from '../../../Sidebar'

const BoroughsSidebar = ({ showSidebar, onHide }) => {
  const londonArea = useContext(LondonAreaContext)

  const body = (
    <div>
      {
        londonArea.features.map(v => {
          const id = v.properties['cartodb_id']

          return (
            <div key={id}>
              <h5>#{id.toString().padStart(2, '0')} {v.properties.name}</h5>
            </div>
          )
        })
      }
    </div>
  )

  return (
    <Sidebar
      title='London Boroughs'
      body={body}
      showSidebar={showSidebar}
      onHide={onHide}
    />
  )
}

export default BoroughsSidebar