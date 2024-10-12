const Personal = ({ data }) => {
  const { name, phone, email, linkedin, github } = data
  return (
    <div>
      <h1>{name}</h1>
      <div className='personal-info'>
        <p>{phone}</p>
        <p>|</p>
        <p>
          <a href={`mailto:${email}`} target='_blank'>
            {email}
          </a>
        </p>
        <p>|</p>
        <p>
          <a href={`https://www.linkedin.com/in/${linkedin}`} target='_blank'>
            {`linkedin.com/in/${linkedin}`}
          </a>
        </p>
        <p>|</p>
        <p>
          <a href={`https://www.github.com/${github}`} target='_blank'>
            {`github.com/${github}`}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Personal
