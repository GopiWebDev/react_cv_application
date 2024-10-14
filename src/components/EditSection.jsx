import { useState } from 'react'

import PersonalDetailsForm from '../components/forms/PersonalDetailsForm'
import EducationForm from '../components/forms/EducationForm'
import ExperienceForm from '../components/forms/ExperienceForm'
import ProjectsForm from './forms/ProjectsForm'

const EditSection = ({ data, setData }) => {
  const [selectedForm, setSelectedForm] = useState('personal')

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value)
  }

  return (
    <div className='edit-section'>
      <div>
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
          Education
        </label>

        <label>
          <input
            type='radio'
            value='experience'
            checked={selectedForm === 'experience'}
            onChange={handleFormChange}
          />
          Experience
        </label>

        <label>
          <input
            type='radio'
            value='projects'
            checked={selectedForm === 'projects'}
            onChange={handleFormChange}
          />
          Project
        </label>
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
      </div>
    </div>
  )
}

export default EditSection
