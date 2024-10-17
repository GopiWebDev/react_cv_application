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
        <nav>Personal</nav>
        <nav>Education</nav>
        <nav>Experience</nav>
        <nav>Projects</nav>
        <nav>Skills</nav>
      </div>
      <PersonalDetailsForm setData={setData} />
      {/* <div>
        <label>
          <input
            type='radio'
            value='personal'
            checked={selectedForm === 'personal'}
            onChange={handleFormChange}
          />
          Personal Details
        </label>

        <label>
          <input
            type='radio'
            value='education'
            checked={selectedForm === 'education'}
            onChange={handleFormChange}
          />
          education
        </label>

        <label>
          <input
            type='radio'
            value='experience'
            checked={selectedForm === 'experience'}
            onChange={handleFormChange}
          />
          experience
        </label>

        <label>
          <input
            type='radio'
            value='projects'
            checked={selectedForm === 'projects'}
            onChange={handleFormChange}
          />
          project
        </label>

        <label>
          <input
            type='radio'
            value='skills'
            checked={selectedForm === 'skills'}
            onChange={handleFormChange}
          />
          skills
        </label>
      </div> */}

      {/* <div>
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
      </div> */}
    </div>
  )
}

export default EditSection
