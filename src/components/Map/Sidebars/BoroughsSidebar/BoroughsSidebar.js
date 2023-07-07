import { useContext, useEffect, useState } from 'react'

import RadioButtonGroup from 'components/RadioButtonGroup'
import Sidebar from 'components/Sidebar'
import Borough from './Borough'

import LondonAreaContext from 'contexts/LondonAreaContext'

const BoroughsSidebar = ({ showSidebar, onHide, onBoroughClick }) => {
  const [viewCriteria, setViewCriteria] = useState('all')
  const [sortCriteria, setSortCriteria] = useState('id')
  const [boroughId, setBoroughId] = useState(0)
  const londonArea = useContext(LondonAreaContext)

  const handleBoroughClick = (id, coords) => {
    setBoroughId(id)
    onBoroughClick(coords)
  }

  const changeViewClick = criteria => {
    setViewCriteria(criteria)
  }

  useEffect(() => {
    const favoriteBoroughs = window.localStorage.getItem('boroughs')
    if (!favoriteBoroughs) window.localStorage.setItem('boroughs', '')
  }, [])

  const radioButtonGroups = [
    {
      label: 'View',
      radioButtonGroup: (
        <RadioButtonGroup
          initialValue='all'
          radios={[
            { name: 'All', value: 'all' },
            { name: 'Favorites', value: 'favorites' }
          ]}
          onClick={changeViewClick}
        />
      )
    },
    {
      label: 'Sort ASC By',
      radioButtonGroup: (
        <RadioButtonGroup
          initialValue='id'
          radios={[
            { name: 'Id', value: 'id' },
            { name: 'Name', value: 'name' },
            { name: 'Area', value: 'area_hectares' }
          ]}
          onClick={setSortCriteria}
        />
      )
    }
  ]

  const boroughs = viewCriteria === 'all' ?
    londonArea.features :
    londonArea.features.filter(v => window.localStorage.getItem('boroughs').includes(v.properties.name))

  const body = (
    <div className='row p-1'>
      <div className='col-md-12'>
        {
          radioButtonGroups.map((v, i) => (
            <div key={i} className='row mb-3 justify-content-center align-items-center'>
              <div className='col-md-4'>
                <span>{v.label}</span>
              </div>
              <div className='col-md-7'>
                {v.radioButtonGroup}
              </div>
            </div>
          ))
        }

        {
          boroughs
            .sort((a, b) => {
              if (a.properties[sortCriteria] > b.properties[sortCriteria]) return 1
              if (a.properties[sortCriteria] < b.properties[sortCriteria]) return -1
              return 0
            })
            .map(v => {
              const id = v.properties.id

              return (
                <Borough
                  key={id}
                  id={id}
                  active={id === boroughId}
                  name={v.properties.name}
                  code={v.properties.code}
                  areaHectares={v.properties.area_hectares}
                  coordinates={v.geometry.coordinates[0][0]}
                  onClick={handleBoroughClick}
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