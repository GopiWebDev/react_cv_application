import { useState } from 'react'

const SkillsForm = ({ setData, data }) => {
  const [langInput, setLangInput] = useState('')
  const [languages, setLanguages] = useState('')

  const [frameInput, setFrameInput] = useState('')
  const [frameworks, setFrameworks] = useState('')

  const [devToolsInput, setDevToolsInput] = useState('')
  const [devTools, setDevTools] = useState('')

  const [libInput, setLibInput] = useState('')
  const [libraries, setLibraries] = useState('')

  const handleLang = () => {
    if (langInput.trim() !== '') {
      setLanguages((prevLang) => [...prevLang, langInput])
      setLangInput('')
    }
  }

  const handleFram = () => {
    if (frameInput.trim() !== '') {
      setFrameworks((prevFram) => [...prevFram, frameInput])
      setFrameInput('')
    }
  }

  const handleDevTools = () => {
    if (devToolsInput.trim() !== '') {
      setDevTools((prevTools) => [...prevTools, devToolsInput])
      setDevToolsInput('')
    }
  }

  const handleLib = () => {
    if (libInput.trim() !== '') {
      setLibraries((prevLib) => [...prevLib, libInput])
      setLibInput('')
    }
  }

  const handleInputChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target

    switch (name) {
      case 'languages':
        setLangInput(value)
        break
      case 'frameworks':
        setFrameInput(value)
        break
      case 'devTools':
        setDevToolsInput(value)
        break
      case 'libraries':
        setLibInput(value)
        break
      default:
        break
    }
  }

  const addSkill = (newSkills) => {
    const { languages, frameworks, devTools, libraries } = newSkills

    setData((prev) => ({
      ...prev,
      skills: { languages, frameworks, devTools, libraries },
    }))

    console.log(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newSkills = {
      languages,
      frameworks,
      devTools,
      libraries,
    }

    addSkill(newSkills)
  }

  return (
    <div>
      <h2>Skills</h2>
      <div className='flex'>
        <form action='' className='form' onSubmit={handleSubmit}>
          <label htmlFor='languages'>Languages</label>
          <span>
            <input
              type='text'
              name='languages'
              id='languages'
              value={langInput}
              onChange={handleInputChange}
            />
            <button
              type='button'
              style={{ width: '20px', cursor: 'pointer' }}
              onClick={handleLang}
            >
              +
            </button>
          </span>

          <label htmlFor='frameworks'>Frameworks</label>
          <span>
            <input
              type='text'
              name='frameworks'
              id='frameworks'
              value={frameInput}
              onChange={handleInputChange}
            />
            <button
              type='button'
              style={{ width: '20px', cursor: 'pointer' }}
              onClick={handleFram}
            >
              +
            </button>
          </span>

          <label htmlFor='devTools'>Developer Tools</label>
          <span>
            <input
              type='text'
              name='devTools'
              id='devTools'
              value={devToolsInput}
              onChange={handleInputChange}
            />
            <button
              type='button'
              style={{ width: '20px', cursor: 'pointer' }}
              onClick={handleDevTools}
            >
              +
            </button>
          </span>

          <label htmlFor='libraries'>Libraries</label>
          <span>
            <input
              type='text'
              name='libraries'
              id='libraries'
              value={libInput}
              onChange={handleInputChange}
            />
            <button
              type='button'
              style={{ width: '20px', cursor: 'pointer' }}
              onClick={handleLib}
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

export default SkillsForm
