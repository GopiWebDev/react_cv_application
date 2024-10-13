import { useState } from 'react'
// Forms
import PersonalDetailsForm from './components/forms/PersonalDetailsForm'
import EducationForm from './components/forms/EducationForm'
// Preview Components
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'

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
    experiences: [
      {
        company: 'Texas A&M University',
        position: 'Undergraduate Research Assistant',
        date: 'June 2020 - Present',
        location: 'College Station, TX',
        description: [
          'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
          'Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data',
          'Explored ways to visualize GitHub collaboration in a classroom setting',
        ],
      },
      {
        position: 'Information Technology Support Specialist',
        company: 'Southwestern University',
        date: 'Sep. 2018 – Present',
        location: 'Georgetown, TX',
        description: [
          'Communicate with managers to set up campus computers used on campus',
          'Assess and troubleshoot computer problems brought by students, faculty and staff',
          'Maintain upkeep of computers, classroom equipment, and 200 printers across campus',
        ],
      },
    ],
  })

  return (
    <div className='container'>
      <div className='edit-section'>
        <PersonalDetailsForm setData={setData} />
        <EducationForm setData={setData} data={data.education} />
      </div>
      <div className='view'>
        <Personal data={data.personal} />
        <Education data={data.education} />
        <Experience data={data.experiences} />
      </div>
    </div>
  )
}

export default App
