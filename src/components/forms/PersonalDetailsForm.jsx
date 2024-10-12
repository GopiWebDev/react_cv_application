const PersonalDetailsForm = ({ setData }) => {
  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [name]: value },
    }))
  }

  return (
    <>
      <h2>Personal Details</h2>
      <form action='' className='form'>
        <label htmlFor='name'>Full Name </label>
        <input type='text' name='name' id='name' onChange={handleInputChange} />
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='tel'
          name='phone'
          id='phone'
          onChange={handleInputChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleInputChange}
        />
        <label htmlFor='linkedin'>LinkedIn Username</label>
        <input
          type='text'
          name='linkedin'
          id='linkedin'
          onChange={handleInputChange}
        />
        <label htmlFor='github'>Github Username</label>
        <input
          type='text'
          name='github'
          id='github'
          onChange={handleInputChange}
        />
      </form>
    </>
  )
}

export default PersonalDetailsForm
