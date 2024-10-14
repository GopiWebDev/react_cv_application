function formatDateRange([startDate, endDate]) {
  const months = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ]

  // Convert the startDate and endDate strings into Date objects
  const start = new Date(startDate)
  const end = new Date(endDate)

  // Format the dates
  const startMonth = months[start.getMonth()]
  const startYear = start.getFullYear()
  const endMonth = months[end.getMonth()]
  const endYear = end.getFullYear()

  if (!endDate) return `${startMonth} ${startYear} - Present`
  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
}

const ExperienceData = ({ data }) => {
  const { position, company, startDate, endDate, location, description } = data

  let formatDate
  if (!endDate) {
    formatDate = formatDateRange([startDate])
  } else {
    formatDate = formatDateRange([startDate, endDate])
  }

  return (
    <div className='experience-detail'>
      <div>
        <p>{position}</p>
        <p>{formatDate}</p>
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
