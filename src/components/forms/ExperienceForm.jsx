/* eslint-disable react/prop-types */
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
    const { position, company, startDate, location } = newExperience

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

  const deleteDescription = (name) => {
    setDescription((prevDescription) =>
      prevDescription.filter((des) => des !== name)
    )
  }

  return (
    <>
      <form action='' className='form' onSubmit={handleSubmit}>
        <label htmlFor='position'>Position*</label>
        <input
          type='text'
          name='position'
          id='position'
          onChange={handleInputChange}
          value={position}
          required
          placeholder='title of position'
        />

        <label htmlFor='company'>Company*</label>
        <input
          type='text'
          name='company'
          id='company'
          onChange={handleInputChange}
          value={company}
          required
          placeholder='name of company'
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

        <label htmlFor='endDate'>End Date</label>
        <input
          type='date'
          name='endDate'
          id='endDate'
          onChange={handleInputChange}
          value={endDate}
        />

        <label htmlFor='location'>Location*</label>
        <input
          type='text'
          name='location'
          id='location'
          onChange={handleInputChange}
          value={location}
          required
          placeholder='location of company'
        />

        <label htmlFor='descriptions'>Descriptions*</label>
        <span>
          <input
            className='input-with-btn'
            type='text'
            name='descriptions'
            id='descriptions'
            onChange={handleInputChange}
            value={inputValue}
            placeholder='add one by one'
          />
          <button onClick={addDescription} type='button'>
            +
          </button>
        </span>

        {description.length > 0 ? (
          <div className='descriptions'>
            <h4 className='text-[1.2rem]'>Added Descriptions</h4>
            <ul className='my-3'>
              {description &&
                description.map((desc, i) => {
                  return (
                    <div key={`${desc}-${i}`} className='flex justify-between'>
                      <li>{`${i + 1}. ${desc}`}</li>
                      <button
                        type='button'
                        onClick={() => deleteDescription(desc)}
                      >
                        Delete
                      </button>
                    </div>
                  )
                })}
            </ul>
          </div>
        ) : (
          ''
        )}
  
        <div className='button-div'>
          <input type='submit' value='Add Experience' />
        </div>
      </form>
      <div>
        {data.length > 0 && (
          <div className='existing-data'>
            <h4>All Positions</h4>
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
        )}
      </div>
    </>
  )
}

export default ExperienceForm
