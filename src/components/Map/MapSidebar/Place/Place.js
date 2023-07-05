const Place = ({ id, title, open, onClick }) => {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <div className='row mb-3 border border-3 rounded shadow p-3 bg-light small'>
      <div className='col-md-10'>
        <p className='fw-bold text-center'>{title}</p>
        <p className={`p-0 alert alert-${open ? 'success' : 'danger'} text-center`}>{open ? 'Open' : 'Closed'}</p>
        <p className='m-0 text-secondary'>4.3 <i className='bi bi-star-fill text-warning'></i> (3037 votes)</p>
        <p className='m-0 text-secondary'>Contemporary all-day European dining</p>
        <p className='m-0 text-secondary'>{open ? 'Closes' : 'Opens'} 11 PM</p>
      </div>
      <div className='col-md-2'>
        <i role='button' className='bi bi-chevron-right bg-primary text-white fs-1 rounded' onClick={handleClick}></i>
      </div>
    </div>
  )
}

export default Place