import { useContext } from 'react'
import LondonAreaContext from '../../../../contexts/LondonAreaContext'
import Sidebar from '../../../Sidebar'
import Borough from './Borough'

const BoroughsSidebar = ({ showSidebar, onHide, onBoroughClick }) => {
  const londonArea = useContext(LondonAreaContext)

  const body = (
    <div className='row p-1'>
      <div className='col-md-12'>
        {
          londonArea.features.map(v => {
            const id = v.properties.id

            return (
              <Borough
                key={id}
                id={id.toString().padStart(2, '0')}
                name={v.properties.name}
                code={v.properties.code}
                areaHectares={v.properties.area_hectares}
                coordinates={v.geometry.coordinates[0][0]}
                onClick={onBoroughClick}
              />
            )
          })
        }
      </div>
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