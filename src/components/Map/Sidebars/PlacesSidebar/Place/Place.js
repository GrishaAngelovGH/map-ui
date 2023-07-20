const Place = ({ id, title, open, onClick }) => {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <div className='row mb-3 border border-3 rounded shadow p-2 bg-light small'>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-10'>
            <p className='fw-bold text-center'>{title}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <p className={`p-1 w-50 alert alert-${open ? 'success' : 'danger'} text-center`}>
                {open ? 'Open' : 'Closed'}
              </p>
              <p className='text-secondary'>
                4.3 <i className='bi bi-star-fill text-warning'></i> (3037 votes)
              </p>
            </div>
          </div>
          <div className='col-md-2'>
            <button
              className='bi bi-chevron-right btn btn-primary w-100 p-1'
              onClick={handleClick}
            >
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <p className='m-0 text-secondary d-flex align-items-center'>
              <i className='bi bi-card-text fs-4'></i>
              <span className='mx-2'>Contemporary all-day European dining</span>
            </p>
            <p className='m-0 text-secondary d-flex align-items-center'>
              <i className='bi bi-clock fs-4'></i>
              <span className='mx-2'>{open ? 'Closes' : 'Opens'} 11 PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Place