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
      <h2>Education</h2>
      <div className='flex'>
        <form action='' className='form' onSubmit={handleSubmit}>
          <label htmlFor='universityName'>University Name</label>
          <input
            type='text'
            name='universityName'
            id='universityName'
            onChange={handleInputChange}
            value={universityName}
          />
          <label htmlFor='major'>Course Name</label>
          <input
            type='text'
            name='major'
            id='major'
            onChange={handleInputChange}
            value={major}
          />
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            name='location'
            id='location'
            onChange={handleInputChange}
            value={location}
          />

          <label htmlFor='startDate'>Start Date</label>
          <input
            type='date'
            name='startDate'
            id='startDate'
            onChange={handleInputChange}
            value={startDate}
          />
          <label htmlFor='endDate'>End Date</label>
          <input
            type='date'
            name='endDate'
            id='endDate'
            onChange={handleInputChange}
            value={endDate}
          />

          <input type='submit' value='Add Education' />
        </form>
        <div>
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
      </div>
    </>
  )
}

export default EducationForm
