import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'

const App = () => {
  const [name, setName] = useState('Jake Ryan')
  const [contactNumber, setContactNumber] = useState('123-456-789')
  const [contactMail, setContactMail] = useState('jake@su.edu')
  const [linkedinProfile, setLinkedIn] = useState('linked.com/in/jake')
  const [githubProfile, setGithubLink] = useState('github.com/jake')

  const handleNameChange = (e) => {
    e.preventDefault()
    e.target.value ? setName(e.target.value) : setName('Jake Ryan')
  }

  const handleContactChange = (e) => {
    e.preventDefault()
    e.target.value
      ? setContactNumber(e.target.value)
      : setContactNumber('123-456-789')
  }

  const handleMailChange = (e) => {
    e.preventDefault()
    e.target.value
      ? setContactMail(e.target.value)
      : setContactMail('linked.com/in/jake')
  }

  const handleLinkedInChange = (e) => {
    e.preventDefault()
    e.target.value ? setLinkedIn(e.target.value) : setLinkedIn('jake@su.edu')
  }

  const handleGithubChange = (e) => {
    e.preventDefault()
    setGithubLink(e.target.value)
    e.target.value
      ? setGithubLink(e.target.value)
      : setGithubLink('github.com/jake')
  }

  // const submitForm = (e) => {
  //   e.preventDefault()
  //   console.log(name, contactNumber)
  // }

  return (
    <>
      <div className='container'>
        <div className='edit-section'>
          <form action=''>
            <input
              type='text'
              onChange={handleNameChange}
              placeholder='Enter Your Name'
            />
            <input
              type='number'
              onChange={handleContactChange}
              placeholder='Enter Your Contact Number'
            />
            <input
              type='email'
              onChange={handleMailChange}
              placeholder='Enter Your Mail'
            />
            <input
              type='text'
              onChange={handleLinkedInChange}
              placeholder='Enter Your LinkedIn'
            />
            <input
              type='text'
              onChange={handleGithubChange}
              placeholder='Enter Your Github'
            />
            <input type='submit' />
          </form>
        </div>
        <div className='view'>
          <PersonalInfo
            name={name}
            contactNumber={contactNumber}
            contactMail={contactMail}
            linkedinProfile={linkedinProfile}
            githubProfile={githubProfile}
          />
        </div>
      </div>
    </>
  )
}

export default App
