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
      <form action='' className='form'>
        <label htmlFor='name'>Full name*</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={handleInputChange}
          placeholder='enter your name'
        />

        <label htmlFor='phone'>Phone*</label>
        <input
          type='tel'
          name='phone'
          id='phone'
          onChange={handleInputChange}
          placeholder='enter your phone number'
        />

        <label htmlFor='email'>Email*</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleInputChange}
          placeholder='enter your email'
        />

        <label htmlFor='linkedin'>Linkedin*</label>
        <input
          type='text'
          name='linkedin'
          id='linkedin'
          onChange={handleInputChange}
          placeholder='enter your @username'
        />

        <label htmlFor='github'>Github*</label>
        <input
          type='text'
          name='github'
          id='github'
          onChange={handleInputChange}
          placeholder='enter your @username'
        />
      </form>
    </>
  )
}

export default PersonalDetailsForm
