const PersonalInfo = ({
  name,
  contactNumber,
  contactMail,
  linkedinProfile,
  githubProfile,
}) => {
  return (
    <>
      <h1>{name}</h1>
      <div className='personal-info'>
        <p>{contactNumber} | </p>
        <p>{contactMail} | </p>
        <p>{linkedinProfile} | </p>
        <p>{githubProfile} </p>
      </div>
    </>
  )
}

export default PersonalInfo
