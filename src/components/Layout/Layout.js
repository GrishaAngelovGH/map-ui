const Layout = ({ header, children, footer }) => (
  <div className='row g-0'>
    <div className='col-md-12'>
      <Layout.Header>
        {header}
      </Layout.Header>

      <Layout.Body>
        {children}
      </Layout.Body>

      <Layout.Footer>
        {footer}
      </Layout.Footer>
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

Layout.Footer = ({ children }) => (
  <div className='row g-0 fixed-bottom'>
    <div className='col-md-12'>
      {children}
    </div>
  </div>
)

export default Layout