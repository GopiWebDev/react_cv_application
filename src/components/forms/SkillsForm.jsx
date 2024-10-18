/* eslint-disable react/prop-types */
import { useState } from 'react'

const SkillsForm = ({ setData }) => {
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

  const deleteLanguage = (language) => {
    setLanguages((prevLanguages) =>
      prevLanguages.filter((lang) => lang !== language)
    )
  }

  const deleteFramework = (framework) => {
    setFrameworks((prevFrameworks) =>
      prevFrameworks.filter((fram) => fram !== framework)
    )
  }

  const deleteDevTool = (devTool) => {
    setDevTools((prevDevTools) =>
      prevDevTools.filter((tool) => tool !== devTool)
    )
  }

  const deleteLibrary = (library) => {
    setLibraries((prevlibraries) =>
      prevlibraries.filter((lib) => lib !== library)
    )
  }

  return (
    <>
      <form action='' className='form' onSubmit={handleSubmit}>
        <label htmlFor='languages'>Languages*</label>
        <span>
          <input
            className='input-with-btn'
            type='text'
            name='languages'
            id='languages'
            value={langInput}
            onChange={handleInputChange}
            placeholder='add one by one'
          />
          <button type='button' onClick={handleLang}>
            +
          </button>
        </span>
        {languages.length > 0 && (
          <div className='descriptions'>
            <h4 className='text-[1.2rem]'>Added Languages</h4>
            <ul className='my-3'>
              {languages &&
                languages.map((lang, i) => {
                  return (
                    <div key={`${lang}-${i}`} className='flex justify-between'>
                      <li>{`${i + 1}. ${lang}`}</li>
                      <button
                        type='button'
                        onClick={() => deleteLanguage(lang)}
                      >
                        Delete
                      </button>
                    </div>
                  )
                })}
            </ul>
          </div>
        )}

        {/* Frameworks */}
        <label htmlFor='frameworks'>Frameworks*</label>
        <span>
          <input
            type='text'
            name='frameworks'
            id='frameworks'
            value={frameInput}
            onChange={handleInputChange}
            className='input-with-btn'
            placeholder='add one by one'
          />
          <button type='button' onClick={handleFram}>
            +
          </button>
        </span>
        {frameworks.length > 0 && (
          <div className='descriptions'>
            <h4 className='text-[1.2rem]'>Added Frameworks</h4>
            <ul className='my-3'>
              {frameworks &&
                frameworks.map((fram, i) => {
                  return (
                    <div key={`${fram}-${i}`} className='flex justify-between'>
                      <li>{`${i + 1}. ${fram}`}</li>
                      <button
                        type='button'
                        onClick={() => deleteFramework(fram)}
                      >
                        Delete
                      </button>
                    </div>
                  )
                })}
            </ul>
          </div>
        )}

        {/* Developer Tools */}
        <label htmlFor='devTools'>Developer Tools*</label>
        <span>
          <input
            type='text'
            name='devTools'
            id='devTools'
            value={devToolsInput}
            onChange={handleInputChange}
            className='input-with-btn'
            placeholder='add one by one'
          />
          <button type='button' onClick={handleDevTools}>
            +
          </button>
        </span>
        {devTools.length > 0 && (
          <div className='descriptions'>
            <h4 className='text-[1.2rem]'>Added Developer Tools</h4>
            <ul className='my-3'>
              {devTools &&
                devTools.map((tool, i) => {
                  return (
                    <div key={`${tool}-${i}`} className='flex justify-between'>
                      <li>{`${i + 1}. ${tool}`}</li>
                      <button type='button' onClick={() => deleteDevTool(tool)}>
                        Delete
                      </button>
                    </div>
                  )
                })}
            </ul>
          </div>
        )}

        {/* Libraries */}
        <label htmlFor='libraries'>Libraries*</label>
        <span>
          <input
            type='text'
            name='libraries'
            id='libraries'
            value={libInput}
            onChange={handleInputChange}
            className='input-with-btn'
            placeholder='add one by one'
          />
          <button type='button' onClick={handleLib}>
            +
          </button>
        </span>
        {libraries.length > 0 && (
          <div className='descriptions'>
            <h4 className='text-[1.2rem]'>Added Libraries</h4>
            <ul className='my-3'>
              {libraries &&
                libraries.map((lib, i) => {
                  return (
                    <div key={`${lib}-${i}`} className='flex justify-between'>
                      <li>{`${i + 1}. ${lib}`}</li>
                      <button type='button' onClick={() => deleteLibrary(lib)}>
                        Delete
                      </button>
                    </div>
                  )
                })}
            </ul>
          </div>
        )}

        <div className='button-div'>
          <input type='submit' value='Add Skills' />
        </div>
      </form>
    </>
  )
}

export default SkillsForm
