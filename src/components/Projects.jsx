const ProjectsData = ({ data }) => {
  const { name, tools, description, repoLink } = data
  return (
    <div className='project-detail'>
      <div style={{ display: 'flex' }}>
        <a href={repoLink}>{name} | </a>
        <div style={{ display: 'flex' }}>
          {tools &&
            tools.map((tool) => {
              if (tool) return <p key={tool}> {tool} | </p>
            })}
        </div>
      </div>

      <ul>
        {description &&
          description.map((des) => {
            if (!des) return
            return <li key={des}>{des}</li>
          })}
      </ul>
    </div>
  )
}

const Projects = ({ data }) => {
  return (
    <div className='projects-section'>
      <h3>Projects</h3>
      <div className='line'></div>
      <div>
        {data.map((dat) => {
          return <ProjectsData key={dat.name} data={dat} />
        })}
      </div>
    </div>
  )
}

export default Projects
