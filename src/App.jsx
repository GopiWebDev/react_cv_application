import { useState } from 'react'

// Preview Components
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import EditSection from './components/EditSection'

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
        startDate: '01-06-2020',
        endDate: '',
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
        startDate: '01-06-2020',
        endDate: '',
        location: 'Georgetown, TX',
        description: [
          'Communicate with managers to set up campus computers used on campus',
          'Assess and troubleshoot computer problems brought by students, faculty and staff',
          'Maintain upkeep of computers, classroom equipment, and 200 printers across campus',
        ],
      },
    ],
    projects: [
      {
        name: 'Gitlytics',
        tools: ['Python', 'Flask', 'React', 'PostgreSQL', 'Docker'],
        description: [
          'Developed a full-stack web application using with Flask serving a REST API with React as the frontend',
          'Implemented GitHub OAuth to get data from user’s repositories',
          'Visualized GitHub data to show collaboration',
          'Used Celery and Redis for asynchronous tasks',
        ],
        repoLink: 'https://github.com',
      },
      {
        name: 'Simple Paintball',
        tools: ['Spigot API', 'Java', 'Maven', 'TravisCI', 'Git'],
        description: [
          'Developed a Minecraft server plugin to entertain kids during free time for a previous job',
          'Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review',
          'Implemented continuous delivery using TravisCI to build the plugin upon new a release',
          'Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin',
        ],
        repoLink: 'https://github.com',
      },
    ],
  })

  return (
    <div className='container'>
      <EditSection data={data} setData={setData} />
      <div className='view'>
        <Personal data={data.personal} />
        <Education data={data.education} />
        <Experience data={data.experiences} />
        <Projects data={data.projects} />
      </div>
    </div>
  )
}

export default App
