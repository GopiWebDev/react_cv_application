const ProjectsData = ({ data }) => {
  const { name, tools, description, repoLink } = data

  return (
    <div className='project-detail'>
      <div className='flex items-end'>
        <span className='font-CMU_BOLD mr-[5px]'>{name} |</span>
        <div className='flex items-end gap-[3px]'>
          {tools &&
            tools.map((tool) => {
              return (
                <span key={tool} className='text-[14px]'>
                  {tool},
                </span>
              )
            })}
        </div>
      </div>

      <ul className='pl-[30px]'>
        {description &&
          description.map((des) => {
            if (!des) return
            return (
              <li className='text-[12px] list-disc' key={des}>
                {des}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

const Projects = ({ data }) => {
  return (
    <div className='projects-section mb-[5px]'>
      <h3 className='font-CMU_BOLD border-b-2 mb-[5px] border-black'>
        Projects
      </h3>
      <div>
        {data.map((dat) => {
          return <ProjectsData key={dat.name} data={dat} />
        })}
      </div>
    </div>
  )
}

export default Projects
