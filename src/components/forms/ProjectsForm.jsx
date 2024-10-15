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
    <div>
      <h2>Projects</h2>
      <div className='flex'>
        <form action='' className='form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            onChange={handleInputChange}
            type='text'
            name='name'
            id='name'
            required
          />

          <label htmlFor='tools'>Tech Stack</label>
          {tools.length > 0 ? (
            <div>
              <h3>Added Stacks</h3>
              <ul>
                {tools &&
                  tools.map((tool) => {
                    return (
                      <div key={tool}>
                        <li>{tool}</li>
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
          {description.length > 0 ? (
            <div>
              <h3>Added Descriptions</h3>
              <ul>
                {description &&
                  description.map((desc) => {
                    return (
                      <div key={desc}>
                        <li>{desc}</li>
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
        <div>
          {data.map((data) => {
            return (
              <div key={data.name}>
                <p>{data.name}</p>
                <button onClick={() => deleteProject(data.name)}>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectsForm
