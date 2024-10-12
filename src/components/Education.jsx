const EducationData = ({ data }) => {
  const { universityName, major, location, startDate, endDate } = data

  return (
    <div className='education-detail'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{universityName}</p>
        <p>{location}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{major}</p>
        <p>
          {startDate}-{endDate}
        </p>
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
