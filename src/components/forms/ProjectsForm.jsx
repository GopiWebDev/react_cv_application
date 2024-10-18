/* eslint-disable react/prop-types */
import { useState } from 'react'

const ProjectsForm = ({ setData, data }) => {
  const [name, setName] = useState('')
  const [tools, setTools] = useState([])
  const [toolsInput, setToolsInput] = useState('')
  const [description, setDescription] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target

    switch (name) {
      case 'name':
        setName(value)
        break
      case 'tools':
        setToolsInput(value)
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

  const addTools = () => {
    if (toolsInput.trim() !== '') {
      setTools((prev) => [...prev, toolsInput])
      setToolsInput('')
    }
  }

  const addProject = (newProject) => {
    const { name } = newProject

    if (!name) return
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProject = {
      name,
      tools,
      description,
    }

    addProject(newProject)
  }

  const deleteProject = (name) => {
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects].filter((project) => {
        return project.name !== name
      }),
    }))
  }

  const deleteTool = (tool) => {
    setTools((prevTools) => prevTools.filter((t) => t !== tool))
  }

  const deleteDescription = (name) => {
    setDescription((prevDescription) =>
      prevDescription.filter((des) => des !== name)
    )
  }

  return (
    <>
      <form action='' className='form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name*</label>
        <input
          onChange={handleInputChange}
          type='text'
          name='name'
          id='name'
          required
          placeholder='name of the project'
        />

        <label htmlFor='tools'>Tech Stack*</label>
        <span>
          <input
            className='input-with-btn'
            type='text'
            name='tools'
            id='tools'
            onChange={handleInputChange}
            value={toolsInput}
            placeholder='add one by one'
          />
          <button onClick={addTools} type='button'>
            +
          </button>
        </span>
        {tools.length > 0 ? (
          <div className='descriptions'>
            <h4 className='text-[1.2rem]'>Added Stacks</h4>
            <ul className='my-3'>
              {tools &&
                tools.map((tool, i) => {
                  return (
                    <div key={`${tool}-${i}`} className='flex justify-between'>
                      <li>{`${i + 1}. ${tool}`}</li>
                      <button type='button' onClick={() => deleteTool(tool)}>
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
          <input type='submit' value='Add Project' />
        </div>
      </form>
      <div>
        {data.length > 0 && (
          <div className='existing-data'>
            <h4>All Projects</h4>
            {data.map((data) => {
              return (
                <div key={data.name}>
                  <p>{data.name}</p>
                  <button onClick={() => deleteProject(data.name)}>
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

export default ProjectsForm
