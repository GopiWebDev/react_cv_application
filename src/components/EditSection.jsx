import { useState } from 'react'

import PersonalDetailsForm from '../components/forms/PersonalDetailsForm'
import EducationForm from '../components/forms/EducationForm'
import ExperienceForm from '../components/forms/ExperienceForm'
import ProjectsForm from './forms/ProjectsForm'
import SkillsForm from './forms/SkillsForm'

const EditSection = ({ data, setData }) => {
  const [selectedForm, setSelectedForm] = useState('personal')

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value)
  }

  return (
    <div className='edit-section w-[37.3125rem] bg-[#2E2E2E] rounded-[3.125rem] px-[2.5rem] font-Inter_medium'>
      <div className='navbar w-[33rem] h-[3.75rem] bg-[#D9D9D9] flex justify-evenly items-center text-[1.1rem] mx-auto mt-[2.19rem] rounded-[1.5rem]'>
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

      <div>
        {selectedForm === 'personal' && (
          <PersonalDetailsForm setData={setData} />
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
    </div>
  )
}

export default EditSection
