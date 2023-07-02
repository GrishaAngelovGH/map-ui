import Layout from './components/Layout'
import Header from './components/Header'
import Map from './components/Map'

function App() {
  return (
    <Layout
      header={<Header />}
      footer={<h1>Footer</h1>}
    >
      <Map />
    </Layout>
  )
}

export default App
