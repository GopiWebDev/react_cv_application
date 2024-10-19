const SkillData = ({ data }) => {
  const { languages, frameworks, devTools, libraries } = data

  return (
    <div className='skill-data flex flex-col w-full'>
      <span>
        <span className='font-CMU_BOLD mr-[5px] text-[14px]'>Languages: </span>
        {languages &&
          languages.map((lang) => {
            return (
              <span className='text-[12px] mr-[3px]' key={lang}>
                {lang},
              </span>
            )
          })}
      </span>

      <span>
        <span className='font-CMU_BOLD mr-[5px] text-[14px]'>Frameworks: </span>
        {frameworks &&
          frameworks.map((fram) => {
            return (
              <span className='text-[12px] mr-[3px]' key={fram}>
                {fram},
              </span>
            )
          })}
      </span>

      <span className=' flex flex-wrap mb-[2px]'>
        <span className='font-CMU_BOLD mr-[5px] text-[14px]'>
          Developer Tools:
        </span>
        {devTools &&
          devTools.map((tool) => {
            return (
              <span className='text-[12px] mr-[3px]' key={tool}>
                {tool},
              </span>
            )
          })}
      </span>

      <span className=' flex flex-wrap'>
        <span className='font-CMU_BOLD mr-[5px] text-[14px]'>Libraries:</span>
        {libraries &&
          libraries.map((lib) => {
            return (
              <span className='text-[12px] mr-[3px]' key={lib}>
                {lib},
              </span>
            )
          })}
      </span>
    </div>
  )
}

const Skills = ({ data }) => {
  return (
    <div>
      <h3 className='text-[1rem] font-CMU_BOLD border-b-2 mb-[5px] border-black'>
        Technical Skills
      </h3>
      <div>{<SkillData data={data} />}</div>
    </div>
  )
}

export default Skills
