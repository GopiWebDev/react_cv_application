import { useState } from 'react'

import PersonalDetailsForm from '../components/forms/PersonalDetailsForm'
import EducationForm from '../components/forms/EducationForm'
import ExperienceForm from '../components/forms/ExperienceForm'
import ProjectsForm from './forms/ProjectsForm'
import SkillsForm from './forms/SkillsForm'

const EditSection = ({ data, setData }) => {
  const [selectedForm, setSelectedForm] = useState('personal')

  return (
    <div className='edit-section '>
      <div className='navbar'>
        <nav
          onClick={() => setSelectedForm('personal')}
          className={selectedForm === 'personal' ? 'active' : ''}
        >
          Personal
        </nav>
        <nav
          onClick={() => setSelectedForm('education')}
          className={selectedForm === 'education' ? 'active' : ''}
        >
          Education
        </nav>
        <nav
          onClick={() => setSelectedForm('experience')}
          className={selectedForm === 'experience' ? 'active' : ''}
        >
          Experience
        </nav>
        <nav
          onClick={() => setSelectedForm('projects')}
          className={selectedForm === 'projects' ? 'active' : ''}
        >
          Projects
        </nav>
        <nav
          onClick={() => setSelectedForm('skills')}
          className={selectedForm === 'skills' ? 'active' : ''}
        >
          Skills
        </nav>
      </div>

      {selectedForm === 'personal' && (
        <PersonalDetailsForm setData={setData} data={data.personal} />
      )}

      {selectedForm === 'education' && (
        <EducationForm setData={setData} data={data.education} />
      )}

      {selectedForm === 'experience' && (
        <ExperienceForm setData={setData} data={data.experiences} />
      )}

      {selectedForm === 'projects' && (
        <ProjectsForm setData={setData} data={data.projects} />
      )}

      {selectedForm === 'skills' && (
        <SkillsForm setData={setData} data={data.skills} />
      )}
    </div>
  )
}

export default EditSection
