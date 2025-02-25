const EVStation = ({ name, location, connector, distance, time }) => (
  <div className='row bg-white rounded p-3 m-5'>
    <div className='col-md-12'>
      <h3 className='text-center'>{name}</h3>
      <p className='text-center'>{location}</p>
      <p className='text-center'>Connector: {connector}</p>

      <div className='row justify-content-center'>
        <div className='col-5 col-md-4'>
          <div className='d-flex align-items-center'>
            <i className='bi bi-geo-alt fs-3 mx-2'></i>
            <span className='fw-bold'>{distance}km</span>
          </div>
        </div>
        <div className='col-5 col-md-5'>
          <div className='d-flex align-items-center'>
            <i className='bi bi-clock fs-3 mx-2'></i>
            <span className='fw-bold'>{time} minutes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default EVStation