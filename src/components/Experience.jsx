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
    <div className='my-[4px]'>
      <div className='flex justify-between'>
        <p className='font-CMU_BOLD'>{position}</p>
        <p className='text-[14px]'>{formatDate}</p>
      </div>

      <div className='flex justify-between mb-[5px]'>
        <p className='text-[14px]'>{company}</p>
        <p className='text-[14px]'>{location}</p>
      </div>

      <ul className='pl-[30px]'>
        {description.map((des) => (
          <li className='text-[12px] list-disc' key={des}>
            {des}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Experience = ({ data }) => {
  return (
    <div className='experience-section'>
      <h3 className='text-[1rem] font-CMU_BOLD border-b-2 mb-[5px] border-black'>
        Experience
      </h3>
      <div>
        {data.map((d) => (
          <ExperienceData key={d.company} data={d} />
        ))}
      </div>
    </div>
  )
}

export default Experience
