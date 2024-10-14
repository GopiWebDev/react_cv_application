const SkillData = ({ data }) => {
  const { languages, frameworks, devTools, libraries } = data

  return (
    <div className='skill-data'>
      <p>
        <h4>Languages</h4> : {'  '}
        {languages &&
          languages.map((lang) => {
            return <span key={lang}>{lang}</span>
          })}
      </p>

      <p>
        <h4>Frameworks</h4> : {'  '}
        {frameworks &&
          frameworks.map((fram) => {
            return <span key={fram}>{fram}</span>
          })}
      </p>

      <p>
        <h4>DevTools</h4> : {'  '}
        {devTools &&
          devTools.map((tool) => {
            return <span key={tool}>{tool}</span>
          })}
      </p>

      <p>
        <h4>Libraries</h4> : {'  '}
        {libraries &&
          libraries.map((lib) => {
            return <span key={lib}>{lib}</span>
          })}
      </p>
    </div>
  )
}

const Skills = ({ data }) => {
  return (
    <div>
      <h2>Technical Skills</h2>
      <div>{<SkillData data={data} />}</div>
    </div>
  )
}

export default Skills
