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
    <div className='mb-[5px]'>
      <div className='flex justify-between'>
        <p className='font-CMU_BOLD '>{universityName}</p>
        <p className='text-[14px]'>{location}</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-[12px]'>{major}</p>
        <p className='text-[12px]'>{formatDate}</p>
      </div>
    </div>
  )
}

const Education = ({ data }) => {
  return (
    <div>
      <h3 className='text-[1rem] font-CMU_BOLD border-b-2 mb-[5px] border-black'>
        Education
      </h3>
      <div>
        {data.map((data) => {
          return <EducationData key={data.universityName} data={data} />
        })}
      </div>
    </div>
  )
}

export default Education
