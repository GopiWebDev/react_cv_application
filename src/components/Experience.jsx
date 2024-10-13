const ExperienceData = ({ data }) => {
  const { position, company, date, location, description } = data

  return (
    <div className='experience-detail'>
      <div>
        <p>{position}</p>
        <p>{date}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{location}</p>
      </div>

      <ul>
        {description.map((des) => (
          <li key={des}>{des}</li>
        ))}
      </ul>
    </div>
  )
}

const Experience = ({ data }) => {
  return (
    <div className='experience-section'>
      <h3>Experience</h3>
      <div className='line'></div>
      <div>
        {data.map((d) => (
          <ExperienceData key={d.company} data={d} />
        ))}
      </div>
    </div>
  )
}

export default Experience
