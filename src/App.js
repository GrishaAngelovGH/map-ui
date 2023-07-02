import Layout from './components/Layout'

function App() {
  return (
    <Layout
      header={<h1>Header</h1>}
      footer={<h1>Footer</h1>}
    >
      <h1>Body</h1>
    </Layout>
  )
}

export default App
