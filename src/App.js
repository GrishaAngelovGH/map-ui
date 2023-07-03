import { useState } from 'react'

import Header from './components/Header'
import Layout from './components/Layout'
import Map from './components/Map'

function App() {
  const [showMarkers, setShowMarkers] = useState(false)
  const [showRoute, setShowRoute] = useState(false)

  const handleShowMarkers = () => {
    setShowMarkers(!showMarkers)
  }

  const handleShowRoute = () => {
    setShowRoute(!showRoute)
  }

  const header = (
    <Header
      onShowMarkers={handleShowMarkers}
      onShowRoute={handleShowRoute}
    />
  )

  return (
    <Layout
      header={header}
      footer={<h1>Footer</h1>}
    >
      <Map
        showMarkers={showMarkers}
        showRoute={showRoute}
      />
    </Layout>
  )
}

export default App
