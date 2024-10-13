import { useState } from 'react'

const ExperienceForm = ({ setData, data }) => {
  const [position, setPosition] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    switch (name) {
      case 'position':
        setPosition(value)
        break
      case 'company':
        setCompany(value)
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

  const addExperience = (newExperience) => {
    const { position, company, startDate, endDate, location } = newExperience

    if (!position || !company || !startDate || !endDate || !location) return

    setData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExperience],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newExperience = {
      position,
      company,
      startDate,
      endDate,
      location,
    }

    addExperience(newExperience)
  }

  return (
    <div>
      <h2 style={{ margin: '30px 0' }}>Experience</h2>
      <div className='flex'>
        <form action='' className='form' onSubmit={handleSubmit}>
          <label htmlFor='position'>Position</label>
          <input
            type='text'
            name='position'
            id='position'
            onChange={handleInputChange}
            value={position}
          />

          <label htmlFor='company'>Company</label>
          <input
            type='text'
            name='company'
            id='company'
            onChange={handleInputChange}
            value={company}
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

          <label htmlFor='location'>Location</label>
          <input
            type='text'
            name='location'
            id='location'
            onChange={handleInputChange}
            value={location}
          />

          {/* <label htmlFor='descriptions'>Points</label>
          <input
            type='text'
            name='descriptions'
            id='descriptions'
            onChange={handleInputChange}
          /> */}

          <input type='submit' value='Add Experience' />
        </form>
        <div>
          {data.map((data) => {
            return (
              <div key={data.position}>
                <p>{data.position}</p>
                <button>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExperienceForm
