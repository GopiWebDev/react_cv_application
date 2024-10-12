import { useState } from 'react'
import PersonalDetailsForm from './components/forms/PersonalDetailsForm'
import Personal from './components/Personal'
import Education from './components/Education'

const App = () => {
  const [data, setData] = useState({
    personal: {
      name: 'Jake Ryan',
      phone: '123-456-789',
      email: 'jake@su.edu.in',
      linkedin: 'jake',
      github: 'jake',
    },
    education: [
      {
        universityName: 'Southwestern University',
        major: 'Bachelor of Arts in Computer Science, Minor in Business',
        location: 'Georgetown, TX',
        startDate: 'Aug. 2018',
        endDate: 'May. 2021',
      },
      {
        universityName: 'Blinn College',
        major: 'Associate’s in Liberal Arts',
        location: 'Bryan, TX',
        startDate: 'Aug. 2014',
        endDate: 'May. 2018',
      },
    ],
  })

  return (
    <div className='container'>
      <div className='edit-section'>
        <PersonalDetailsForm setData={setData} />
      </div>
      <div className='view'>
        <Personal data={data.personal} />
        <Education data={data.education} />
      </div>
    </div>
  )
}

export default App
