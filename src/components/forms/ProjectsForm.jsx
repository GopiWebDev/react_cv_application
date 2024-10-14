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

  return (
    <div>
      <h2>Projects</h2>
      <div>
        <form action='' className='form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            onChange={handleInputChange}
            type='text'
            name='name'
            id='name'
          />

          <label htmlFor='tools'>Tech Stack</label>
          <span>
            <input
              type='text'
              name='tools'
              id='tools'
              onChange={handleInputChange}
              value={toolsInput}
            />
            <button
              onClick={addTools}
              type='button'
              style={{ width: '20px', cursor: 'pointer' }}
            >
              +
            </button>
          </span>

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
          <input type='submit' />
        </form>
      </div>
    </div>
  )
}

export default ProjectsForm
