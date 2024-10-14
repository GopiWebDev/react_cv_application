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

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
}

const EducationData = ({ data }) => {
  const { universityName, major, location, startDate, endDate } = data

  const formatDate = formatDateRange([startDate, endDate])

  return (
    <div className='education-detail'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{universityName}</p>
        <p>{location}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{major}</p>
        <p style={{ width: '150px' }}>{formatDate}</p>
      </div>
    </div>
  )
}

const Education = ({ data }) => {
  return (
    <div className='education-section'>
      <h3>Education</h3>
      <div className='line'></div>
      <div className='education-details'>
        {data.map((data) => {
          return <EducationData key={data.universityName} data={data} />
        })}
      </div>
    </div>
  )
}

export default Education
