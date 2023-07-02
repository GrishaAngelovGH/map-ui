import Layout from './components/Layout'
import Header from './components/Header'

function App() {
  return (
    <Layout
      header={<Header />}
      footer={<h1>Footer</h1>}
    >
      <h1>Body</h1>
    </Layout>
  )
}

export default App
