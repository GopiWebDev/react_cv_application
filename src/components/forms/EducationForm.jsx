/* eslint-disable react/prop-types */
import { useState } from 'react'

const EducationForm = ({ setData, data }) => {
  const [universityName, setUniversityName] = useState('')
  const [major, setMajor] = useState('')
  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    e.preventDefault()

    switch (name) {
      case 'universityName':
        setUniversityName(value)
        break
      case 'major':
        setMajor(value)
        break
      case 'location':
        setLocation(value)
        break
      case 'startDate':
        setStartDate(value)
        break
      case 'endDate':
        setEndDate(value)
        break
      default:
        break
    }
  }

  const addEducation = (newEducation) => {
    const { universityName, major, location, startDate, endDate } = newEducation

    if (!universityName || !major || !location || !startDate || !endDate) return

    setData((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }))
  }

  const deleteEducation = (universityName) => {
    setData((prev) => ({
      ...prev,
      education: [...prev.education].filter((educ) => {
        return educ.universityName !== universityName
      }),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEducation = {
      universityName,
      major,
      location,
      startDate,
      endDate,
    }

    addEducation(newEducation)
  }

  return (
    <>
      <form action='' className='form' onSubmit={handleSubmit}>
        <label htmlFor='universityName'>University*</label>
        <input
          type='text'
          name='universityName'
          id='universityName'
          onChange={handleInputChange}
          value={universityName}
          required
          placeholder='name of university'
        />

        <label htmlFor='major'>Course Name*</label>
        <input
          type='text'
          name='major'
          id='major'
          onChange={handleInputChange}
          value={major}
          required
          placeholder='major of study'
        />

        <label htmlFor='location'>Location*</label>
        <input
          type='text'
          name='location'
          id='location'
          onChange={handleInputChange}
          value={location}
          required
          placeholder='location of study'
        />

        <label htmlFor='startDate'>Start Date*</label>
        <input
          type='date'
          name='startDate'
          id='startDate'
          onChange={handleInputChange}
          value={startDate}
          required
        />

        <label htmlFor='endDate'>End Date*</label>
        <input
          type='date'
          name='endDate'
          id='endDate'
          onChange={handleInputChange}
          value={endDate}
          required
        />
        <div className='button-div'>
          <input type='submit' value='Add Education' />
        </div>
      </form>
      {data.length > 0 && (
        <div className='existing-data'>
          <h4>All Educations</h4>
          {data.map((data) => {
            return (
              <div key={data.universityName}>
                <p>{data.universityName}</p>
                <button onClick={() => deleteEducation(data.universityName)}>
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default EducationForm
