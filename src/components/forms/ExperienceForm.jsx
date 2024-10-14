import { useState } from 'react'

const ExperienceForm = ({ setData, data }) => {
  const [position, setPosition] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState([])
  const [inputValue, setInputValue] = useState('')

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
      case 'descriptions':
        setInputValue(value)
        break
      default:
        break
    }
  }

  const addDescription = () => {
    if (inputValue.trim() !== '') {
      setDescription((prevDescription) => [...prevDescription, inputValue])
      setInputValue('')
    }
  }

  const addExperience = (newExperience) => {
    const { position, company, startDate, endDate, location } = newExperience

    if (!position || !company || !startDate || !location) return

    setData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExperience],
    }))
  }

  const deleteExperience = (position) => {
    setData((prev) => ({
      ...prev,
      experiences: [...prev.experiences].filter((exp) => {
        return exp.position !== position
      }),
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
      description,
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

          <label htmlFor='descriptions'>Description</label>
          <span>
            <input
              type='text'
              name='descriptions'
              id='descriptions'
              onChange={handleInputChange}
              value={inputValue}
            />
            <button
              onClick={addDescription}
              type='button'
              style={{ width: '20px', cursor: 'pointer' }}
            >
              +
            </button>
          </span>
          <input type='submit' value='Add Experience' />
        </form>
        <div>
          {data.map((data) => {
            return (
              <div key={data.position}>
                <p>{data.position}</p>
                <button onClick={() => deleteExperience(data.position)}>
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExperienceForm
