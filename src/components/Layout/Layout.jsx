const Layout = ({ header, children }) => (
  <div className='row g-0'>
    <div className='col-md-12'>
      <Layout.Header>
        {header}
      </Layout.Header>

      <Layout.Body>
        {children}
      </Layout.Body>
    </div>
  </div>
)

Layout.Header = ({ children }) => (
  <div className='row g-0'>
    <div className='col-md-12'>
      {children}
    </div>
  </div>
)

Layout.Body = ({ children }) => (
  <div className='row g-0'>
    <div className='col-md-12'>
      {children}
    </div>
  </div>
)

export default Layout