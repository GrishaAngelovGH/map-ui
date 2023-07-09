import { useState } from 'react'
import FormControl from 'react-bootstrap/FormControl'

const SearchInput = ({ placeholder, onChange }) => {
  const [value, setValue] = useState('')

  const handleInputChange = ({ target }) => {
    setValue(target.value)
    onChange(target.value)
  }

  const handleClearInput = () => {
    setValue('')
    onChange('')
  }

  return (
    <div className='d-flex position-relative'>
      <i className='bi bi-search text-secondary fs-4 ps-2 position-absolute'></i>
      <FormControl
        value={value}
        placeholder={placeholder}
        className='mb-3 ps-5'
        onChange={handleInputChange}
      />
      <i role='button' className='bi bi-backspace text-secondary fs-4 ps-2' onClick={handleClearInput}></i>
    </div>
  )
}

export default SearchInput