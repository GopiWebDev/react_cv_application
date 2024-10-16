// Preview Components
import Personal from '../components/Personal'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const ViewSection = ({ data }) => {
  return (
    <div className='view-section'>
      <Personal data={data.personal} />
      <Education data={data.education} />
      <Experience data={data.experiences} />
      <Projects data={data.projects} />
      <Skills data={data.skills} />
    </div>
  )
}

export default ViewSection
