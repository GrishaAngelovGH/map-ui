const statuses = {
  low: {
    label: 'Low Traffic',
    classes: 'alert alert-warning'
  },
  normal: {
    label: 'Normal Traffic',
    classes: 'alert alert-success'
  },
  high: {
    label: 'High Traffic',
    classes: 'alert alert-danger'
  }
}

const TrafficStatus = ({ status }) => (
  <div className='row mt-3 justify-content-center'>
    <div className='col-md-10 border rounded shadow'>

      <div className='row small'>
        <div className='col-md-4 p-3'>
          <div className={`${statuses[status].classes} m-0 h-100 d-flex flex-column justify-content-center align-items-center fw-bold`}>
            <p className='m-0'>9 min</p>
            <p className='m-0'>(1.9 km)</p>
          </div>
        </div>

        <div className='col-md-8 p-1'>
          <p className='m-0 text-success text-center fw-bold'>Via A4 and A308</p>
          <p className={`${statuses[status].classes} text-center fw-bold m-0 p-1`}>{statuses[status].label}</p>
          <p className='m-0 text-secondary d-flex align-items-center'>
            <i className='bi bi-sign-turn-slight-right-fill text-primary me-2'></i>
            Next Direction
          </p>
          <p className='m-0'>Head west on Knightsbridge</p>
        </div>
      </div>

    </div>
  </div>
)

export default TrafficStatus