import { useState } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/Layout'
import Map from './components/Map'

function App() {
  const [showLocations, setShowLocations] = useState(false)
  const [showRoute, setShowRoute] = useState(false)

  const handleShowLocations = () => {
    setShowLocations(!showLocations)
  }

  const handleShowRoute = () => {
    setShowRoute(!showRoute)
  }

  const resetControls = () => {
    setShowLocations(false)
    setShowRoute(false)
  }

  const header = (
    <Header
      onShowLocations={handleShowLocations}
      onShowRoute={handleShowRoute}
    />
  )

  return (
    <Layout
      header={header}
      footer={<Footer />}
    >
      <Map
        showLocations={showLocations}
        showRoute={showRoute}
        resetControls={resetControls}
      />
    </Layout>
  )
}

export default App
